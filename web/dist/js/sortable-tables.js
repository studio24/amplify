(function() {
  "use strict";
  customElements.define("amplify-table-sort", class extends HTMLElement {
    // Instantiate the web component
    constructor() {
      super();
      const headers = [...this.querySelectorAll("thead th")].filter(function(header) {
        return header.dataset.type !== "no-sort";
      });
      const cols = [...this.querySelectorAll("col")];
      const tableBody = this.querySelector("tbody");
      const rows = tableBody.querySelectorAll("tr");
      headers.map(function(header) {
        return addBtnToTh(header);
      });
      const directions = headers.map(function(header) {
        return "";
      });
      function addBtnToTh(heading) {
        const btn = document.createElement("button");
        const appendArrows = function(btn2) {
          const wrapper = document.createElement("div");
          const arrowsWrapper = '<svg fill="currentColor" focusable="false" aria-hidden="true" class="asc icon" viewBox="0 0 407.436 407.436" width="15" height="15">\n	<polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/></svg>\n	<svg fill="currentColor" focusable="false" aria-hidden="true" class="desc icon" viewBox="0 0 407.437 407.437" width="15" height="15">\n	<polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/></svg>';
          wrapper.classList.add("arrow-wrapper");
          btn2.textContent = heading.textContent;
          wrapper.innerHTML = arrowsWrapper;
          btn2.appendChild(wrapper);
          return btn2;
        };
        appendArrows(btn);
        heading.textContent = "";
        heading.appendChild(btn);
      }
      function transform(index, content) {
        const type = headers[index].getAttribute("data-type");
        switch (type) {
          case "number":
          case "date":
            return parseFloat(content);
          case "string":
          default:
            return content;
        }
      }
      function sortCol(header, index) {
        const newRows = Array.from(rows);
        const direction = directions[index] || "descending";
        const multiplier = direction === "descending" ? 1 : -1;
        header.setAttribute(
          "aria-sort",
          direction === "ascending" ? "descending" : "ascending"
        );
        newRows.sort(function(rowA, rowB) {
          let cellA;
          let cellB;
          if (header.matches('[data-type="date"]')) {
            cellA = rowA.querySelectorAll("td")[index].getAttribute("data-date");
            cellB = rowB.querySelectorAll("td")[index].getAttribute("data-date");
          } else {
            cellA = rowA.querySelectorAll("td")[index].innerHTML;
            cellB = rowB.querySelectorAll("td")[index].innerHTML;
          }
          const a = transform(index, cellA);
          const b = transform(index, cellB);
          switch (true) {
            case a > b:
              return 1 * multiplier;
            case a < b:
              return -1 * multiplier;
            case a === b:
              return 0;
          }
        });
        rows.forEach(function(row) {
          return tableBody.removeChild(row);
        });
        directions[index] = direction === "ascending" ? "descending" : "ascending";
        newRows.forEach(function(newRow) {
          return tableBody.appendChild(newRow);
        });
      }
      headers.forEach(function(header, index) {
        header.firstChild.addEventListener("click", function(e) {
          sortCol(header, index);
          cols.forEach(function(col) {
            col.classList.remove("js-sorted");
          });
          let colToHighlight = cols[index];
          colToHighlight.classList.add("js-sorted");
          if (document.activeElement === e.target) {
            headers.forEach(function(header2) {
              if (header2.firstChild !== e.target) {
                header2.removeAttribute("aria-sort");
              }
            });
          }
        });
      });
      this.addEventListener("keyup", function(e) {
        let key = e.key;
        if (key === "Escape" || key === "Esc" || key === 27) {
          let currentActiveHeader = document.querySelector("th[aria-sort]");
          if (currentActiveHeader) {
            currentActiveHeader.removeAttribute("aria-sort");
          }
          let sortedCol = this.querySelector(".js-sorted");
          if (sortedCol) {
            sortedCol.classList.remove("js-sorted");
          }
        }
      });
      document.body.addEventListener("click", function(e) {
        if (!e.target.matches("amplify-table-sort table *")) {
          let currentActiveHeader = this.querySelector("th[aria-sort]");
          if (currentActiveHeader) {
            currentActiveHeader.removeAttribute("aria-sort");
          }
          let sortedCol = this.querySelector(".js-sorted");
          if (sortedCol) {
            sortedCol.classList.remove("js-sorted");
          }
        }
      });
    }
    // End of constructor
  });
})();
