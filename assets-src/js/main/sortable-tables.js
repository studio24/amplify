import {exists} from "./_exists.helper";

  function sortableTable () {
    /**
    * Table sort function
    * @param {Element} table - the top level table with data-component="sortable-table"
  */

    function sortTable (table) {
      /*  All clickable table th / filtered out those with data-type="no-sort" attributes */  
      const headers = [...table.querySelectorAll('th')].filter(function (header) {
        return header.dataset.type !== 'no-sort';
    });

    const tableBody = table.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');

    /*  Setting default sorting order to descending for all th with data-type="*" attribute */ 
    headers.map(function (header) {
      return convertThToBtn(header);
    });

    /*  Creates an array of th each represented as empty ''; */ 
    const directions = headers.map(function(header) {
      return '';
    });

    /**
     * Converts all table headers to clickable buttons and append svg arrows
     * @param {Element} heading - table th element 
     * @returns {Element} button - button created from table th element with wrapper which contains svg arrows
    */
    function convertThToBtn (heading) {
      const btn = document.createElement('button');
      const appendArrows = function (btn) {
          const wrapper = document.createElement('div');
          const arrowsWrapper = `
          <svg fill="currentColor" focusable="false"
          aria-hidden="true" class="asc icon icon--32" viewBox="0 0 407.436 407.436">
            <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/>
          </svg>
          <svg fill="currentColor" focusable="false"
          aria-hidden="true" class="desc icon icon--32" viewBox="0 0 407.437 407.437">
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
          </svg>`;

          wrapper.classList.add('arrow-wrapper');
          btn.textContent = heading.textContent;
          wrapper.innerHTML = arrowsWrapper;
          btn.appendChild(wrapper);
          return btn;
      }
      appendArrows(btn);
      heading.textContent = ``;
      heading.appendChild(btn);
    }

    /**
     * @param {*} index - index of selected column to sort
     * @param {*} content - content to sort
    */ 
    function transform (index, content) {
      const type = headers[index].getAttribute('data-type');
      switch (type) {
          case 'number':
          case 'date':
              return parseFloat(content);
          case 'string':
          default:
              return content;
      }
    };

    /**
     * @param {Element} header - table th converted to button
     * @param {Element} index  - index of selected column to sort
    */ 
    function sortCol (header, index) {

      const newRows = Array.from(rows);
      const direction = directions[index] || 'descending';
      const multiplier = (direction === 'descending') ? 1 : -1;
      header.setAttribute('aria-sort', (direction === 'ascending') ? 'descending' : 'ascending');

      newRows.sort(function (rowA, rowB) {
        let cellA;
        let cellB;

        if (header.matches('[data-type="date"]')) {
          cellA = rowA.querySelectorAll('td')[index].getAttribute('data-date');
          cellB = rowB.querySelectorAll('td')[index].getAttribute('data-date');
        } else {
          cellA = rowA.querySelectorAll('td')[index].innerHTML;
          cellB = rowB.querySelectorAll('td')[index].innerHTML;
        }

        const a = transform(index, cellA);
        const b = transform(index, cellB);

        switch(true) {
          case a > b: 
            return 1 * multiplier;
          case a < b:
            return -1 * multiplier;
          case a === b:
            return 0;
        }
      });

      rows.forEach( function(row) {
        return tableBody.removeChild(row);
      });

      directions[index] = direction === 'ascending' ? 'descending' : 'ascending';

      newRows.forEach( function(newRow) {
      return tableBody.appendChild(newRow);
      });
    }
      
    /**
     * @param {Element} header - table th converted to button
     * @param {Element} index - index of selected column to sort
    */ 
    headers.forEach( function(header, index) {
      header.addEventListener('click', function(e) {

        sortCol(header, index);

        let currentActiveFields = tableBody.querySelectorAll('.active');
        removeActiveClasses(currentActiveFields);

        let fieldsToHighlight = [...rows].map( function(row) {
          return row.querySelectorAll('td')[index];
        });

        if (document.activeElement === e.target) {
          headers.forEach( function(header) {
            if (header.firstChild !== e.target) {
              header.removeAttribute('aria-sort')
            }
          });
          fieldsToHighlight.forEach( function(field) {
            field.classList.add('active');
            field.setAttribute('scope', 'row');
          });
        }

      });
    });

    /**
      * @param {Array} elementsToIterate - list of all active table cells in selected column 
    */ 
    function removeActiveClasses(elementsToIterate) {
      elementsToIterate.forEach( function(field) {
        return field.classList.remove('active')
      });
    };
    /**
      * @param {Array} elements - list of all table headers with aria-sort attribure 
    */ 
    function removeSortAttributes(elements) {
      if(elements) {
        elements.forEach( function(element) { 
          return element.removeAttribute('aria-sort')
        });
      } 
    }

    /*  Remove active class from table cells when events are triggered  */ 
    table.addEventListener('keyup', function(e) {
      let key = e.key;
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        let currentActiveFields = tableBody.querySelectorAll('.active');
        removeActiveClasses(currentActiveFields);
        let currentActiveHeader = document.querySelector('th[aria-sort]');
        if(currentActiveHeader.hasAttribute('aria-sort')) {
          currentActiveHeader.removeAttribute('aria-sort');
        } 
      }
    });

    document.body.addEventListener('click', function(e) {
      if(!e.target.closest('table[data-component="sortable-table"]')) {
        let currentActiveFields = tableBody.querySelectorAll('.active');
        removeActiveClasses(currentActiveFields);
        let currentAriaSortHeaders = document.querySelectorAll('th[aria-sort]');
        removeSortAttributes(currentAriaSortHeaders);
      }
    });
  } 
      /* Create sortable table */ 
    const tables = [...document.querySelectorAll('table[data-component="sortable-table"]')];
      if (exists(tables)) {
        tables.forEach( function(table) {
          return sortTable(table);
        });
      }
  }

  export { sortableTable };