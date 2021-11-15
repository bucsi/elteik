const tabla = document.querySelector("table");

tabla.addEventListener("click", handleClick);

let xKovetkezik = true;

function handleClick(e) {
  if (!e.target.matches("td")) {
    return;
  }
  console.log(e.target);
  e.target.innerHTML = xKovetkezik ? "X" : "0"
  xKovetkezik = !xKovetkezik
}
