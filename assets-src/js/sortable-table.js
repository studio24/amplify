/**
 * Sortable table web component
 */

customElements.define('amplify-table-sort', class extends HTMLElement {
	// Declare private instance properties
	/** @type HTMLTableCellElement[] */ #headers;
	/** @type HTMLTableColElement[] */ #cols;
	/** @type HTMLTableSectionElement */ #tableBody;
	/** @type NodeListOf<HTMLTableRowElement> */ #rows;
	/** @type string[] */ #directions;

	/**
	 * Initialize on connect
	 * Checks DOM status first, so we don't query for elements before they exist
	 */
	connectedCallback() {
		if (document.readyState !== 'loading') {
			this.init();
			return;
		}
		document.addEventListener('DOMContentLoaded', () => this.init(), {
			once: true,
		});
	}

	/**
	 * Cleanup global event listeners on disconnect
	 */
	disconnectedCallback() {
		document.body.removeEventListener('click', this);
	}

	/**
	 * Set up the component
	 */
	init() {
		// Get all sortable table headers - filter out those with data-type="no-sort" attribute
		this.#headers = [...this.querySelectorAll('thead th')].filter(
			(header) => header.dataset.type !== 'no-sort'
		);
		this.#cols = [...this.querySelectorAll('col')];
		this.#tableBody = this.querySelector('tbody');
		this.#rows = this.#tableBody.querySelectorAll('tr');

		// Create an array of table headers each represented as empty '';
		this.#directions = this.#headers.map(() => '');

		// Insert a sort button into each sortable table header
		this.#headers.forEach((header) => this.#addBtnToTh(header));

		// Attach event listeners
		this.#headers.forEach((header) => {
			header.firstChild.addEventListener('click', this);
		});
		this.addEventListener('keyup', this);
		document.body.addEventListener('click', this);
	}

	/**
	 * Handle events for the web component
	 * @param {Event} event
	 */
	handleEvent(event) {
		if (event.type === 'click') {
			if (event.currentTarget === document.body) {
				this.#onOutsideClick(event);
			} else {
				this.#onHeaderClick(event);
			}
			return;
		}

		if (event.type === 'keyup') {
			this.#onKeyup(event);
		}
	}

	/**
	 * Insert a button into a table header for sorting its column
	 * @param {Element} heading - <th> element
	 */
	#addBtnToTh(heading) {
		const btn = document.createElement('button');
		const wrapper = document.createElement('div');
		const arrowsWrapper = `<svg fill="currentColor" focusable="false" aria-hidden="true" class="asc icon" viewBox="0 0 407.436 407.436" width="15" height="15">
<polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/></svg>
<svg fill="currentColor" focusable="false" aria-hidden="true" class="desc icon" viewBox="0 0 407.437 407.437" width="15" height="15">
<polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/></svg>`;

		wrapper.classList.add('arrow-wrapper');
		btn.textContent = heading.textContent;
		wrapper.innerHTML = arrowsWrapper;
		btn.appendChild(wrapper);

		heading.textContent = '';
		heading.appendChild(btn);
	}

	/**
	 * Transform cell content based on the column's data-type
	 * @param {number} index - index of the column
	 * @param {string} content - content to transform
	 * @returns {string | number}
	 */
	#transform(index, content) {
		const type = this.#headers[index].getAttribute('data-type');

		switch (type) {
			case 'number':
			case 'date':
				return parseFloat(content);
			case 'string':
			default:
				return content;
		}
	}

	/**
	 * Sort the table body by a given column
	 * @param {Element} header - <th> element with the sort button
	 * @param {number} index - index of the column to sort
	 */
	#sortCol(header, index, colIndex) {
		const newRows = Array.from(this.#rows);
		const direction = this.#directions[index] || 'descending';
		const multiplier = direction === 'descending' ? 1 : -1;

		header.setAttribute(
			'aria-sort',
			direction === 'ascending' ? 'descending' : 'ascending'
		);

		newRows.sort((rowA, rowB) => {
			let cellA;
			let cellB;

			// Get data from table cells
			if (header.matches('[data-type="date"]')) {
				cellA = rowA.querySelectorAll('td')[colIndex].getAttribute('data-date');
				cellB = rowB.querySelectorAll('td')[colIndex].getAttribute('data-date');
			} else if (header.matches('[data-type="number"]')) {
				cellA = rowA.querySelectorAll('td')[colIndex].getAttribute('data-number');
				cellB = rowB.querySelectorAll('td')[colIndex].getAttribute('data-number');
				if (cellA === null || cellB === null) {
					cellA = rowA.querySelectorAll('td')[colIndex].innerHTML;
					cellB = rowB.querySelectorAll('td')[colIndex].innerHTML;
				}
			} else {
				// string (and any other/default) columns
				cellA = rowA.querySelectorAll('td')[colIndex].textContent.trim();
				cellB = rowB.querySelectorAll('td')[colIndex].textContent.trim();
			}

			// Transform data if data-type="number"/"date" attribute is present on table header
			const a = this.#transform(index, cellA);
			const b = this.#transform(index, cellB);

			switch (true) {
				case a > b:
					return 1 * multiplier;
				case a < b:
					return -1 * multiplier;
				case a === b:
					return 0;
			}
		});

		// Remove all rows from table body
		this.#rows.forEach((row) => this.#tableBody.removeChild(row));

		// Change direction to opposite for next sort
		this.#directions[index] =
			direction === 'ascending' ? 'descending' : 'ascending';

		// Append sorted rows to table body
		newRows.forEach((newRow) => this.#tableBody.appendChild(newRow));
	}

	/**
	 * Handle clicks on a sortable column header's button
	 * @param {MouseEvent} event
	 */
	#onHeaderClick(event) {
		const btn = event.currentTarget;
		const header = btn.closest('th');
		const index = this.#headers.indexOf(header); // Direction-tracking index (filtered space)
		const colIndex = header.cellIndex; // Real column index (DOM space)

		// Sort table when clicked on table header
		this.#sortCol(header, index, colIndex);

		// Add .js-sorted class to appropriate <col> when button in table header is clicked
		this.#cols.forEach((col) => col.classList.remove('js-sorted'));
		this.#cols[colIndex]?.classList.add('js-sorted');

		// Add aria-sort attribute to table headers when clicked on table header
		if (document.activeElement === event.target) {
			this.#headers.forEach((header) => {
				if (header.firstChild !== event.target) {
					header.removeAttribute('aria-sort');
				}
			});
		}
	}

	/**
	 * Remove all sorting attributes/styles when Escape key is pressed
	 * @param {KeyboardEvent} event
	 */
	#onKeyup(event) {
		const key = event.key;

		if (key === 'Escape' || key === 'Esc' || key === 27) {
			this.#clearSortStyles();
		}
	}

	/**
	 * Remove all sorting attributes/styles if a click happens outside the table
	 * @param {MouseEvent} event
	 */
	#onOutsideClick(event) {
		if (!event.target.matches('amplify-table-sort table *')) {
			this.#clearSortStyles();
		}
	}

	/**
	 * Remove active aria-sort attribute and .js-sorted class from the table
	 */
	#clearSortStyles() {
		const currentActiveHeader = this.querySelector('th[aria-sort]');
		if (currentActiveHeader) {
			currentActiveHeader.removeAttribute('aria-sort');
		}

		const sortedCol = this.querySelector('.js-sorted');
		if (sortedCol) {
			sortedCol.classList.remove('js-sorted');
		}
	}
});