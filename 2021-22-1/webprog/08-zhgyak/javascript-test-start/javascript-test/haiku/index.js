const editor = document.querySelector("#haiku-editor");
const numOfChar = document.querySelector("#number-of-characters");
const numOfRows = document.querySelector("#number-of-rows");
const vowPerRow = document.querySelector("#vowels-per-row");
const mgh = "aáeéiíoóöőuúüű";
const haikus = document.querySelector("#haikus")

function mgh_e(char) {
  return mgh.indexOf(char) !== -1;
}

editor.addEventListener("input", () => {
  console.log(editor.value);
  numOfChar.innerHTML = editor.value.length;
  const sorok = editor.value.match(/\n/g) || [];
  console.log(sorok);
  numOfRows.innerHTML = sorok.length;
  console.log(
    "Első sor mgh: " +
      Array.from(editor.value.split("\n")[0]).reduce(
        (s, x) => (mgh_e(x) ? s + 1 : s),
        0
      )
  );
  const vow1stRow = Array.from(editor.value.split("\n")[0]).reduce(
    (s, x) => (mgh_e(x) ? s + 1 : s),
    0
  );
  const vow2ndRow = Array.from(editor.value.split("\n")[1]).reduce(
    (s, x) => (mgh_e(x) ? s + 1 : s),
    0
  );

  const vow3rdRow = Array.from(editor.value.split("\n")[2]).reduce(
    (s, x) => (mgh_e(x) ? s + 1 : s),
    0
  );
  vowPerRow.children[0].innerHTML = vow1stRow;

  vowPerRow.children[1].innerHTML = vow2ndRow;

  vowPerRow.children[2].innerHTML = vow3rdRow;
  console.log(
    sorok.length === 3,
    vow1stRow === 5,
    vow2ndRow === 7,
    vow3rdRow === 5
  );
  if (
    sorok.length === 3 &&
    vow1stRow === 5 &&
    vow2ndRow === 7 &&
    vow3rdRow === 5
  ) {
    editor.parentElement.classList.add("haiku");
  }
});

document.querySelector("#btn-copy-haiku").addEventListener("click", ()=>{
    const uj = document.createElement("pre")
    uj.innerHTML = editor.value
    haikus.appendChild(uj)
})