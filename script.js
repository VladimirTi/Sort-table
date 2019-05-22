document.querySelector('thead').addEventListener('click', (event) => {
  const index = +event.target.dataset.index;
  const rows = [...document.querySelector('tbody').rows];

  rows.sort((a, b) => {
    [a, b] = [a.children[index].innerText, b.children[index].innerText]
    if (!isNaN(+a)) return a - b;
    return a > b ? 1 : -1;
  })
  const container = document.createElement('tbody');
  rows.forEach((node) => {
    container.append(node);
  })
  document.querySelector('tbody').replaceWith(container);
});
