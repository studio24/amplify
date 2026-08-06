var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
(function() {
  "use strict";
  var _headers, _cols, _tableBody, _rows, _directions, _instances, addBtnToTh_fn, transform_fn, sortCol_fn, onHeaderClick_fn, onKeyup_fn, onOutsideClick_fn, clearSortStyles_fn, _a;
  customElements.define("amplify-table-sort", (_a = class extends HTMLElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _instances);
      // Declare private instance properties
      /** @type HTMLTableCellElement[] */
      __privateAdd(this, _headers);
      /** @type HTMLTableColElement[] */
      __privateAdd(this, _cols);
      /** @type HTMLTableSectionElement */
      __privateAdd(this, _tableBody);
      /** @type NodeListOf<HTMLTableRowElement> */
      __privateAdd(this, _rows);
      /** @type string[] */
      __privateAdd(this, _directions);
    }
    /**
     * Initialize on connect
     * Checks DOM status first, so we don't query for elements before they exist
     */
    connectedCallback() {
      if (document.readyState !== "loading") {
        this.init();
        return;
      }
      document.addEventListener("DOMContentLoaded", () => this.init(), {
        once: true
      });
    }
    /**
     * Cleanup global event listeners on disconnect
     */
    disconnectedCallback() {
      document.body.removeEventListener("click", this);
    }
    /**
     * Set up the component
     */
    init() {
      __privateSet(this, _headers, [...this.querySelectorAll("thead th")].filter(
        (header) => header.dataset.type !== "no-sort"
      ));
      __privateSet(this, _cols, [...this.querySelectorAll("col")]);
      __privateSet(this, _tableBody, this.querySelector("tbody"));
      __privateSet(this, _rows, __privateGet(this, _tableBody).querySelectorAll("tr"));
      __privateSet(this, _directions, __privateGet(this, _headers).map(() => ""));
      __privateGet(this, _headers).forEach((header) => __privateMethod(this, _instances, addBtnToTh_fn).call(this, header));
      __privateGet(this, _headers).forEach((header) => {
        header.firstChild.addEventListener("click", this);
      });
      this.addEventListener("keyup", this);
      document.body.addEventListener("click", this);
    }
    /**
     * Handle events for the web component
     * @param {Event} event
     */
    handleEvent(event) {
      if (event.type === "click") {
        if (event.currentTarget === document.body) {
          __privateMethod(this, _instances, onOutsideClick_fn).call(this, event);
        } else {
          __privateMethod(this, _instances, onHeaderClick_fn).call(this, event);
        }
        return;
      }
      if (event.type === "keyup") {
        __privateMethod(this, _instances, onKeyup_fn).call(this, event);
      }
    }
  }, _headers = new WeakMap(), _cols = new WeakMap(), _tableBody = new WeakMap(), _rows = new WeakMap(), _directions = new WeakMap(), _instances = new WeakSet(), /**
   * Insert a button into a table header for sorting its column
   * @param {Element} heading - <th> element
   */
  addBtnToTh_fn = function(heading) {
    const btn = document.createElement("button");
    const wrapper = document.createElement("div");
    const arrowsWrapper = '<svg fill="currentColor" focusable="false" aria-hidden="true" class="asc icon" viewBox="0 0 407.436 407.436" width="15" height="15">\n<polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/></svg>\n<svg fill="currentColor" focusable="false" aria-hidden="true" class="desc icon" viewBox="0 0 407.437 407.437" width="15" height="15">\n<polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/></svg>';
    wrapper.classList.add("arrow-wrapper");
    btn.textContent = heading.textContent;
    wrapper.innerHTML = arrowsWrapper;
    btn.appendChild(wrapper);
    heading.textContent = "";
    heading.appendChild(btn);
  }, /**
   * Transform cell content based on the column's data-type
   * @param {number} index - index of the column
   * @param {string} content - content to transform
   * @returns {string | number}
   */
  transform_fn = function(index, content) {
    const type = __privateGet(this, _headers)[index].getAttribute("data-type");
    switch (type) {
      case "number":
      case "date":
        return parseFloat(content);
      case "string":
      default:
        return content;
    }
  }, /**
   * Sort the table body by a given column
   * @param {Element} header - <th> element with the sort button
   * @param {number} index - index of the column to sort
   */
  sortCol_fn = function(header, index) {
    const newRows = Array.from(__privateGet(this, _rows));
    const direction = __privateGet(this, _directions)[index] || "descending";
    const multiplier = direction === "descending" ? 1 : -1;
    header.setAttribute(
      "aria-sort",
      direction === "ascending" ? "descending" : "ascending"
    );
    newRows.sort((rowA, rowB) => {
      let cellA;
      let cellB;
      if (header.matches('[data-type="date"]')) {
        cellA = rowA.querySelectorAll("td")[index].getAttribute("data-date");
        cellB = rowB.querySelectorAll("td")[index].getAttribute("data-date");
      } else if (header.matches('[data-type="number"]')) {
        cellA = rowA.querySelectorAll("td")[index].getAttribute("data-number");
        cellB = rowB.querySelectorAll("td")[index].getAttribute("data-number");
        if (cellA === null || cellB === null) {
          cellA = rowA.querySelectorAll("td")[index].innerHTML;
          cellB = rowB.querySelectorAll("td")[index].innerHTML;
        }
      }
      const a = __privateMethod(this, _instances, transform_fn).call(this, index, cellA);
      const b = __privateMethod(this, _instances, transform_fn).call(this, index, cellB);
      switch (true) {
        case a > b:
          return 1 * multiplier;
        case a < b:
          return -1 * multiplier;
        case a === b:
          return 0;
      }
    });
    __privateGet(this, _rows).forEach((row) => __privateGet(this, _tableBody).removeChild(row));
    __privateGet(this, _directions)[index] = direction === "ascending" ? "descending" : "ascending";
    newRows.forEach((newRow) => __privateGet(this, _tableBody).appendChild(newRow));
  }, /**
   * Handle clicks on a sortable column header's button
   * @param {MouseEvent} event
   */
  onHeaderClick_fn = function(event) {
    var _a2;
    const btn = event.currentTarget;
    const header = btn.closest("th");
    const index = __privateGet(this, _headers).indexOf(header);
    __privateMethod(this, _instances, sortCol_fn).call(this, header, index);
    __privateGet(this, _cols).forEach((col) => col.classList.remove("js-sorted"));
    (_a2 = __privateGet(this, _cols)[index]) == null ? void 0 : _a2.classList.add("js-sorted");
    if (document.activeElement === event.target) {
      __privateGet(this, _headers).forEach((header2) => {
        if (header2.firstChild !== event.target) {
          header2.removeAttribute("aria-sort");
        }
      });
    }
  }, /**
   * Remove all sorting attributes/styles when Escape key is pressed
   * @param {KeyboardEvent} event
   */
  onKeyup_fn = function(event) {
    const key = event.key;
    if (key === "Escape" || key === "Esc" || key === 27) {
      __privateMethod(this, _instances, clearSortStyles_fn).call(this);
    }
  }, /**
   * Remove all sorting attributes/styles if a click happens outside the table
   * @param {MouseEvent} event
   */
  onOutsideClick_fn = function(event) {
    if (!event.target.matches("amplify-table-sort table *")) {
      __privateMethod(this, _instances, clearSortStyles_fn).call(this);
    }
  }, /**
   * Remove active aria-sort attribute and .js-sorted class from the table
   */
  clearSortStyles_fn = function() {
    const currentActiveHeader = this.querySelector("th[aria-sort]");
    if (currentActiveHeader) {
      currentActiveHeader.removeAttribute("aria-sort");
    }
    const sortedCol = this.querySelector(".js-sorted");
    if (sortedCol) {
      sortedCol.classList.remove("js-sorted");
    }
  }, _a));
})();
