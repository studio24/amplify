/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
var _headers, _cols, _tableBody, _rows, _directions, _Class_brand;
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * Sortable table web component
 */

customElements.define('amplify-table-sort', (_headers = /*#__PURE__*/new WeakMap(), _cols = /*#__PURE__*/new WeakMap(), _tableBody = /*#__PURE__*/new WeakMap(), _rows = /*#__PURE__*/new WeakMap(), _directions = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), class extends HTMLElement {
  constructor(...args) {
    super(...args);
    /**
     * Insert a button into a table header for sorting its column
     * @param {Element} heading - <th> element
     */
    _classPrivateMethodInitSpec(this, _Class_brand);
    // Declare private instance properties
    /** @type HTMLTableCellElement[] */
    _classPrivateFieldInitSpec(this, _headers, void 0);
    /** @type HTMLTableColElement[] */_classPrivateFieldInitSpec(this, _cols, void 0);
    /** @type HTMLTableSectionElement */_classPrivateFieldInitSpec(this, _tableBody, void 0);
    /** @type NodeListOf<HTMLTableRowElement> */_classPrivateFieldInitSpec(this, _rows, void 0);
    /** @type string[] */_classPrivateFieldInitSpec(this, _directions, void 0);
  }
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
      once: true
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
    _classPrivateFieldSet(_headers, this, [...this.querySelectorAll('thead th')].filter(header => header.dataset.type !== 'no-sort'));
    _classPrivateFieldSet(_cols, this, [...this.querySelectorAll('col')]);
    _classPrivateFieldSet(_tableBody, this, this.querySelector('tbody'));
    _classPrivateFieldSet(_rows, this, _classPrivateFieldGet(_tableBody, this).querySelectorAll('tr'));

    // Create an array of table headers each represented as empty '';
    _classPrivateFieldSet(_directions, this, _classPrivateFieldGet(_headers, this).map(() => ''));

    // Insert a sort button into each sortable table header
    _classPrivateFieldGet(_headers, this).forEach(header => _assertClassBrand(_Class_brand, this, _addBtnToTh).call(this, header));

    // Attach event listeners
    _classPrivateFieldGet(_headers, this).forEach(header => {
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
        _assertClassBrand(_Class_brand, this, _onOutsideClick).call(this, event);
      } else {
        _assertClassBrand(_Class_brand, this, _onHeaderClick).call(this, event);
      }
      return;
    }
    if (event.type === 'keyup') {
      _assertClassBrand(_Class_brand, this, _onKeyup).call(this, event);
    }
  }
}));
function _addBtnToTh(heading) {
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
function _transform(index, content) {
  const type = _classPrivateFieldGet(_headers, this)[index].getAttribute('data-type');
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
function _sortCol(header, index) {
  const newRows = Array.from(_classPrivateFieldGet(_rows, this));
  const direction = _classPrivateFieldGet(_directions, this)[index] || 'descending';
  const multiplier = direction === 'descending' ? 1 : -1;
  header.setAttribute('aria-sort', direction === 'ascending' ? 'descending' : 'ascending');
  newRows.sort((rowA, rowB) => {
    let cellA;
    let cellB;

    // Get data from table cells
    if (header.matches('[data-type="date"]')) {
      cellA = rowA.querySelectorAll('td')[index].getAttribute('data-date');
      cellB = rowB.querySelectorAll('td')[index].getAttribute('data-date');
    } else if (header.matches('[data-type="number"]')) {
      // checks for data-number
      cellA = rowA.querySelectorAll('td')[index].getAttribute('data-number');
      cellB = rowB.querySelectorAll('td')[index].getAttribute('data-number');
      if (cellA === null || cellB === null) {
        // fallback if data-number doesn't exist
        cellA = rowA.querySelectorAll('td')[index].innerHTML;
        cellB = rowB.querySelectorAll('td')[index].innerHTML;
      }
    }

    // Transform data if data-type="number"/"date" attribute is present on table header
    const a = _assertClassBrand(_Class_brand, this, _transform).call(this, index, cellA);
    const b = _assertClassBrand(_Class_brand, this, _transform).call(this, index, cellB);
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
  _classPrivateFieldGet(_rows, this).forEach(row => _classPrivateFieldGet(_tableBody, this).removeChild(row));

  // Change direction to opposite for next sort
  _classPrivateFieldGet(_directions, this)[index] = direction === 'ascending' ? 'descending' : 'ascending';

  // Append sorted rows to table body
  newRows.forEach(newRow => _classPrivateFieldGet(_tableBody, this).appendChild(newRow));
}
/**
 * Handle clicks on a sortable column header's button
 * @param {MouseEvent} event
 */
function _onHeaderClick(event) {
  var _classPrivateFieldGet2;
  const btn = event.currentTarget;
  const header = btn.closest('th');
  const index = _classPrivateFieldGet(_headers, this).indexOf(header);

  // Sort table when clicked on table header
  _assertClassBrand(_Class_brand, this, _sortCol).call(this, header, index);

  // Add .js-sorted class to appropriate <col> when button in table header is clicked
  _classPrivateFieldGet(_cols, this).forEach(col => col.classList.remove('js-sorted'));
  (_classPrivateFieldGet2 = _classPrivateFieldGet(_cols, this)[index]) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.classList.add('js-sorted');

  // Add aria-sort attribute to table headers when clicked on table header
  if (document.activeElement === event.target) {
    _classPrivateFieldGet(_headers, this).forEach(header => {
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
function _onKeyup(event) {
  const key = event.key;
  if (key === 'Escape' || key === 'Esc' || key === 27) {
    _assertClassBrand(_Class_brand, this, _clearSortStyles).call(this);
  }
}
/**
 * Remove all sorting attributes/styles if a click happens outside the table
 * @param {MouseEvent} event
 */
function _onOutsideClick(event) {
  if (!event.target.matches('amplify-table-sort table *')) {
    _assertClassBrand(_Class_brand, this, _clearSortStyles).call(this);
  }
}
/**
 * Remove active aria-sort attribute and .js-sorted class from the table
 */
function _clearSortStyles() {
  const currentActiveHeader = this.querySelector('th[aria-sort]');
  if (currentActiveHeader) {
    currentActiveHeader.removeAttribute('aria-sort');
  }
  const sortedCol = this.querySelector('.js-sorted');
  if (sortedCol) {
    sortedCol.classList.remove('js-sorted');
  }
}
/******/ })()
;