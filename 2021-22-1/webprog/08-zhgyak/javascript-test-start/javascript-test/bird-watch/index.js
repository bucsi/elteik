const placesInput = document.querySelector("#places");
const speciesInput = document.querySelector("#species");
const button = document.querySelector("#btn-generate");
const tableContainer = document.querySelector("#table-container");
const task1 = document.querySelector("#task-1");
const task2 = document.querySelector("#task-2");
const task3 = document.querySelector("#task-3");
const task4 = document.querySelector("#task-4");
const task5 = document.querySelector("#task-5");

let matrix = [];

button.addEventListener("click", onGenerate);
function onGenerate(e) {
  const n = placesInput.valueAsNumber;
  const m = speciesInput.valueAsNumber;

  matrix = generateMatrix(n, m);
  generateTable(n, m);
  console.log(matrix);
}

function generateMatrix(n, m) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

function generateTable(n, m) {
  const tbl = document.createElement("table");
  for (let i = 0; i < n; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < m; j++) {
      const cell = document.createElement("td");
      cell.innerHTML = 0;
      cell.dataset.sor = i;
      cell.dataset.oszlop = j;
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }
  tableContainer.appendChild(tbl);
}

function onClick(e, t) {
  console.log(`sor: ${t.dataset.sor}, oszlop:${t.dataset.oszlop}`);
  matrix[t.dataset.sor][t.dataset.oszlop]++;
  t.innerHTML = matrix[t.dataset.sor][t.dataset.oszlop];
  task1f();
  task2f();
  task3f();
}

function task1f() {
  if (matrix[0].some((el) => el !== 0)) {
    task1.innerHTML = "Yes";
  } else {
    task1.innerHTML = "No";
  }
}

function task2f() {
  task2.innerHTML = matrix.reduce((s, x) => s + isThere10(x), 0);
}

function isThere10(sor) {
  return sor.some((el) => el === 10);
}

function task3f() {
  const place = matrix.findIndex((sor) => !sor.some((el) => el !== 0));
  task3.innerHTML = place > -1 ? place : "no";
}
delegal(tableContainer, "td", "click", onClick);
/**
 *
 * @param {Node} szulo egy HTML elem querySelectorral kiválasztva (pl. `document.querySelector("ul")`)
 * @param {keyof HTMLElementTagNameMap} gyerek egy CSS szelektor, ami leírja azon elemeket, melyeken szeretnénk futtatni a fgv-t (pl. `"a"`)
 * @param {string} mikor egy esemény, stringként (pl. `"click"`)
 * @param {(ev: Event, target: Node) => null} mit A függvény, amit futtatunk
 */
function delegal(szulo, gyerek, mikor, mit) {
  function esemenyKezelo(ev) {
    const esemenyCelja = ev.target;
    const esemenyKezeloje = this;
    const legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

    if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
      mit(ev, legkozelebbiKeresettElem);
    }
  }

  szulo.addEventListener(mikor, esemenyKezelo);
}
