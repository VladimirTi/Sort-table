document.querySelector('th').addEventListener('click', sortingByAge);

function sortingByAge() {
  const rows = [...document.querySelector('tbody').rows];
  rows.sort((a, b) => {
    return a.firstElementChild.innerText - b.firstElementChild.innerText;
  })

  rows.forEach((node) => {
    document.querySelector('table > tbody').append(node);
  })
}
