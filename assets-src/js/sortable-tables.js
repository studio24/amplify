/**
* Table sort function
* @param {Element} table - the top level table with data-component="sortable-table"
*/
function sortTable(table) {
	// All clickable table th / filtered out those with data-type="no-sort" attributes
	const headers = [...table.querySelectorAll('th')].filter(function(header) {
		return header.dataset.type !== 'no-sort';
	});
	const cols = [...table.querySelectorAll('col')];
	const tableBody = table.querySelector('tbody');
	const rows = tableBody.querySelectorAll('tr');

	// Setting default sorting order to descending for all th with data-type="*" attribute
	headers.map(function(header) {
		return addBtnToTh(header);
	});

	// Creates an array of th each represented as empty '';
	const directions = headers.map(function(header) {
		return '';
	});

	/**
	 * Inserts a button into table headers for sorting columns
	 * @param {Element} heading - table th element
	 * @returns {Element} button - button created for table th element with wrapper which contains svg arrows
	 */
	function addBtnToTh(heading) {
		const btn = document.createElement('button');
		const appendArrows = function(btn) {
			const wrapper = document.createElement('div');
			const arrowsWrapper = `<svg fill="currentColor" focusable="false" aria-hidden="true" class="asc icon" viewBox="0 0 407.436 407.436" width="15" height="15">
		<polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/></svg>
		<svg fill="currentColor" focusable="false" aria-hidden="true" class="desc icon" viewBox="0 0 407.437 407.437" width="15" height="15">
		<polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/></svg>`;

			wrapper.classList.add('arrow-wrapper');
			btn.textContent = heading.textContent;
			wrapper.innerHTML = arrowsWrapper;
			btn.appendChild(wrapper);
			return btn;
		};

		appendArrows(btn);
		heading.textContent = ``;
		heading.appendChild(btn);
	}

	/**
	 * @param {*} index - index of selected column to sort
	 * @param {*} content - content to sort
	 */
	function transform(index, content) {
		// Get data type from table header
		const type = headers[index].getAttribute('data-type');

		// Transform data if data-type="number" attribute is present on table header
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
	 * @param {Element} header - table th converted to button
	 * @param {Element} index  - index of selected column to sort
	 */
	function sortCol(header, index) {
		const newRows = Array.from(rows);
		const direction = directions[index] || 'descending';
		const multiplier = (direction === 'descending') ? 1 : -1;

		header.setAttribute('aria-sort', (direction === 'ascending') ? 'descending' : 'ascending');

		newRows.sort(function(rowA, rowB) {
			let cellA;
			let cellB;

			// Get data from table cells
			if (header.matches('[data-type="date"]')) {
				cellA = rowA.querySelectorAll('td')[index].getAttribute('data-date');
				cellB = rowB.querySelectorAll('td')[index].getAttribute('data-date');
			} else {
				cellA = rowA.querySelectorAll('td')[index].innerHTML;
				cellB = rowB.querySelectorAll('td')[index].innerHTML;
			}

			// Transform data if data-type="number" attribute is present on table header
			const a = transform(index, cellA);
			const b = transform(index, cellB);

			// Sort by date if data-type="date" attribute is present on table header
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
		rows.forEach(function(row) {
			return tableBody.removeChild(row);
		});

		// Change direction to opposite for next sort
  		directions[index] = direction === 'ascending' ? 'descending' : 'ascending';

  		// Append sorted rows to table body
		newRows.forEach(function(newRow) {
			return tableBody.appendChild(newRow);
		});
	}

	headers.forEach(function(header, index) {
		// Add event listener to table headers
		header.firstChild.addEventListener('click', function(e) {
			// Sort table when clicked on table header
			sortCol(header, index);

			// Add .js-sorted class to appropriate <col> when button in table header is clicked
			cols.forEach(function(col) {
				col.classList.remove('js-sorted');
			})
			let colToHighlight = cols[index];
			colToHighlight.classList.add('js-sorted');

			// Add aria-sort attribute to table headers when clicked on table header
			if (document.activeElement === e.target) {
				headers.forEach(function(header) {
					if (header.firstChild !== e.target) {
						header.removeAttribute('aria-sort');
					}
				});
			}
		});
	});

	/**
	 * @param {Array} elements - list of all table headers with aria-sort attribute
	 */
	function removeSortAttributes(elements) {
		if (elements) {
			elements.forEach(function(element) {
				return element.removeAttribute('aria-sort');
			});
		}
	}

	// Remove active class from table cells when events are triggered
	table.addEventListener('keyup', function(e) {
		// Remove active class from table cells when clicked on Escape key
		let key = e.key;

		// Check if clicked key is Escape key and remove active class from table cells
		if (key === 'Escape' || key === 'Esc' || key === 27) {

			// Remove aria-sort attribute from table headers when clicked on Escape key or outside of table body
			let currentActiveHeader = document.querySelector('th[aria-sort]');
			if (currentActiveHeader) {
				currentActiveHeader.removeAttribute('aria-sort');
			}

			// Remove .js-sorted class from table col when clicked on Escape key
			let sortedCol = table.querySelector('.js-sorted');
			sortedCol.classList.remove('js-sorted');
		}
	});

	// Remove active class from table cells when clicked outside of table
	document.body.addEventListener('click', function(e) {
		if (!e.target.matches('table[data-component="sortable-table"] *')) {

			// Remove aria-sort attribute from table headers when clicked outside of table body
			let currentActiveHeader = document.querySelector('th[aria-sort]');
			if (currentActiveHeader) {
				currentActiveHeader.removeAttribute('aria-sort');
			}

			// Remove .js-sorted class from table col when clicked outside of table body
			let sortedCol = table.querySelector('.js-sorted');
			sortedCol.classList.remove('js-sorted');
		}
	});
}

// Create sortable table
const tables = [...document.querySelectorAll('table[data-component="sortable-table"]')];

// Sort all tables on page load
if (tables) {
	tables.forEach(function(table) {
		return sortTable(table);
	});
}