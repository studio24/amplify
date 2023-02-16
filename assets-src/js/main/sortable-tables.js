const sortTable = (table) => {
  const headers = [...table.querySelectorAll('th')].filter(header => header.dataset.type !== 'no-sort');
  const tableBody = table.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');
  
  Array.from(headers).map(header => {
    header.setAttribute('aria-sort', 'descending');
    convertThToBtn(header);
  });

  // directions array
  const directions = Array.from(headers).map(header => '');

  // convert table headings to clickable buttons 
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
      header.addEventListener('click', () => {
        sortCol(header, index);
      });
    })
}

export { sortTable };