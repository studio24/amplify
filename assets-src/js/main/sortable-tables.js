
/**
 * Table sort function
 *
 * @param {Element} table - the top level table with data-component="sortable-table"
 */


const sortTable = (table) => {
  // All clickable table th / filtered out those with data-type="no-sort" attributes 
  const headers = [...table.querySelectorAll('th')].filter(header => header.dataset.type !== 'no-sort');

  const tableBody = table.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');

  // Setting default sorting order to descending for all th with data-type="*" attribute
  headers.map(header => {
    header.setAttribute('aria-sort', 'descending');
    convertThToBtn(header);
  });

  // Creates an array of th each represented as empty '';
  const directions = headers.map(header => '');

  /**
   * Converts all table headers to clickable buttons and append svg arrows
   * @param {Element} heading - table th element 
   */
  function convertThToBtn (heading) {
    const btn = document.createElement('button');
    const appendArrows = (btn) => {
        const wrapper = document.createElement('div');
        const arrowsWrapper = `
        <svg fill="currentColor" focusable="false"
        aria-hidden="true" class="desc icon icon--32" viewBox="0 0 407.436 407.436">
          <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/>
        </svg>
        <svg fill="currentColor" focusable="false"
        aria-hidden="true" class="asc icon icon--32" viewBox="0 0 407.437 407.437">
          <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
        </svg>
            `;
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

const transform = (index, content) => {
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

const removeActiveClasses = (elementsToIterate) => {
  elementsToIterate.forEach(field => {
    field.classList.remove('active')
  });
};

  const sortCol = (header, index) => {
    const newRows = Array.from(rows);
    const direction = directions[index] || 'ascending';
    const multiplier = (direction === 'ascending') ? 1 : -1;
    header.setAttribute('aria-sort', (direction === 'ascending') ? 'descending' : 'ascending');

    newRows.sort((rowA, rowB) => {
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
    
    rows.forEach(row => tableBody.removeChild(row));
    directions[index] = direction === 'ascending' ? 'descending' : 'ascending';
    newRows.forEach(newRow => tableBody.appendChild(newRow));
  }
    
  // loop over heders add click event
  headers.forEach((header, index) => {
    header.addEventListener('click', (e) => {
      sortCol(header, index);
      
      let currentActiveFields = tableBody.querySelectorAll('.active');
      removeActiveClasses(currentActiveFields);
      
      let fieldsToHighlight = [...rows].map(row => {
        return row.querySelectorAll('td')[index];
      });

      if (document.activeElement === e.target) {
        fieldsToHighlight.forEach(field => {
          field.classList.add('active');
        });
      } else {
        removeActiveClasses(fieldsToHighlight);
      }

    });
  });

  table.addEventListener('keyup', (e) => {
    let key = e.key;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      let currentActiveFields = tableBody.querySelectorAll('.active');
      removeActiveClasses(currentActiveFields);
    }
  });

  document.body.addEventListener('click', (event) => {
    if(!event.target.closest('[data-component="sortable-table"]')) {
      let currentActiveFields = tableBody.querySelectorAll('.active');
      removeActiveClasses(currentActiveFields);
    }
  });
}

export { sortTable };