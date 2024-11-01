/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
* Sortable tables web component
*/

customElements.define('amplify-table-sort', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  // Instantiate the web component
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    // Inherit parent class properties
    _this = _super.call(this);

    // Get all sortable table headers - filter out those with data-type="no-sort" attribute
    var headers = _toConsumableArray(_this.querySelectorAll("thead th")).filter(function (header) {
      return header.dataset.type !== 'no-sort';
    });
    var cols = _toConsumableArray(_this.querySelectorAll("col"));
    var tableBody = _this.querySelector("tbody");
    var rows = tableBody.querySelectorAll("tr");

    // Set default sorting order to `descending` for all table headers with data-type="*" attribute
    headers.map(function (header) {
      return addBtnToTh(header);
    });

    // Create an array of table headers each represented as empty '';
    var directions = headers.map(function (header) {
      return '';
    });

    /**
     * Insert a button into table headers for sorting columns
     * @param {Element} heading - <th> element
     * @returns {Element} button - button created for <th> with wrapper which contains SVG arrows
     */
    function addBtnToTh(heading) {
      var btn = document.createElement('button');
      var appendArrows = function appendArrows(btn) {
        var wrapper = document.createElement('div');
        var arrowsWrapper = "<svg fill=\"currentColor\" focusable=\"false\" aria-hidden=\"true\" class=\"asc icon\" viewBox=\"0 0 407.436 407.436\" width=\"15\" height=\"15\">\n\t<polygon points=\"203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 \"/></svg>\n\t<svg fill=\"currentColor\" focusable=\"false\" aria-hidden=\"true\" class=\"desc icon\" viewBox=\"0 0 407.437 407.437\" width=\"15\" height=\"15\">\n\t<polygon points=\"386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 \"/></svg>";
        wrapper.classList.add('arrow-wrapper');
        btn.textContent = heading.textContent;
        wrapper.innerHTML = arrowsWrapper;
        btn.appendChild(wrapper);
        return btn;
      };
      appendArrows(btn);
      heading.textContent = "";
      heading.appendChild(btn);
    }

    /**
     * @param {*} index - index of selected column to sort
     * @param {*} content - content to sort
     */
    function transform(index, content) {
      // Get data type from table header
      var type = headers[index].getAttribute('data-type');

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
     * @param {Element} header - table header with button inserted
     * @param {Element} index  - index of selected column to sort
     */
    function sortCol(header, index) {
      var newRows = Array.from(rows);
      var direction = directions[index] || 'descending';
      var multiplier = direction === 'descending' ? 1 : -1;
      header.setAttribute('aria-sort', direction === 'ascending' ? 'descending' : 'ascending');
      newRows.sort(function (rowA, rowB) {
        var cellA;
        var cellB;

        // Get data from table cells
        if (header.matches('[data-type="date"]')) {
          cellA = rowA.querySelectorAll('td')[index].getAttribute('data-date');
          cellB = rowB.querySelectorAll('td')[index].getAttribute('data-date');
        } else {
          cellA = rowA.querySelectorAll('td')[index].innerHTML;
          cellB = rowB.querySelectorAll('td')[index].innerHTML;
        }

        // Transform data if data-type="number" attribute is present on table header
        var a = transform(index, cellA);
        var b = transform(index, cellB);

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
      rows.forEach(function (row) {
        return tableBody.removeChild(row);
      });

      // Change direction to opposite for next sort
      directions[index] = direction === 'ascending' ? 'descending' : 'ascending';

      // Append sorted rows to table body
      newRows.forEach(function (newRow) {
        return tableBody.appendChild(newRow);
      });
    }
    headers.forEach(function (header, index) {
      // Add event listener to table headers
      header.firstChild.addEventListener('click', function (e) {
        // Sort table when clicked on table header
        sortCol(header, index);

        // Add .js-sorted class to appropriate <col> when button in table header is clicked
        cols.forEach(function (col) {
          col.classList.remove('js-sorted');
        });
        var colToHighlight = cols[index];
        colToHighlight.classList.add('js-sorted');

        // Add aria-sort attribute to table headers when clicked on table header
        if (document.activeElement === e.target) {
          headers.forEach(function (header) {
            if (header.firstChild !== e.target) {
              header.removeAttribute('aria-sort');
            }
          });
        }
      });
    });

    // Remove all sorting attributes/styles when Escape key is pressed
    _this.addEventListener('keyup', function (e) {
      var key = e.key;

      // Check if clicked key is Escape key and remove active class from table cells
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        // Remove aria-sort attribute from table headers when clicked on Escape key or outside of table body
        var currentActiveHeader = document.querySelector("th[aria-sort]");
        if (currentActiveHeader) {
          currentActiveHeader.removeAttribute('aria-sort');
        }

        // Remove .js-sorted class from table col
        var sortedCol = this.querySelector('.js-sorted');
        if (sortedCol) {
          sortedCol.classList.remove('js-sorted');
        }
      }
    });

    // Remove all sorting attributes/styles if mouse is clicked outside of table
    document.body.addEventListener('click', function (e) {
      if (!e.target.matches('amplify-table-sort table *')) {
        // Remove aria-sort attribute from table headers when clicked outside of table body
        var currentActiveHeader = this.querySelector("th[aria-sort]");
        if (currentActiveHeader) {
          currentActiveHeader.removeAttribute('aria-sort');
        }

        // Remove .js-sorted class from table col
        var sortedCol = this.querySelector('.js-sorted');
        if (sortedCol) {
          sortedCol.classList.remove('js-sorted');
        }
      }
    });
    return _this;
  } // End of constructor
  return _createClass(_class);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
/******/ })()
;