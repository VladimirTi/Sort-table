const rows = [...document.querySelector('tbody').rows];

document.querySelector('thead').addEventListener('click', (event) => {
  const index = +event.target.dataset.index;

  rows.sort((elem1, elem2) => {
    [a, b] = [elem1.children[index].innerText, elem2.children[index].innerText]
    if (!isNaN(+a)) return a - b;
    return a > b ? 1 : -1;
  })

  const container = document.createElement('tbody');

  rows.forEach((node) => {
    container.append(node);
  })

  document.querySelector('tbody').replaceWith(container);
});
