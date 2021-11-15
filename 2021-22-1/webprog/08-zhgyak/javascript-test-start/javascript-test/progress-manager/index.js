const todos = document.querySelector("ol");

delegal(todos, "li ul li", "click", handleClick);

function handleClick(e, t) {
  if (t.classList.contains("done")) {
      const kov = t.nextElementSibling
    if (!kov || !kov.classList.contains("done")) {
      t.classList.remove("done");
    }
  } else {
    t.classList.add("done");
    markPrev(t);
  }
  const todo = t.parentElement.parentElement;
  if(allDone(todo)){
      todo.classList.add("done")
  }
}
function allDone(parent) {
  return (
    parent.querySelectorAll("li").length ===
    parent.querySelectorAll("li.done").length
  );
}
function markPrev(t) {
  const elozo = t.previousElementSibling;
  if (elozo && !elozo.classList.contains("done")) {
    elozo.classList.add("done");
    markPrev(elozo);
  }
}

//túlbonyolítottam, elég csak a rákövetkező elemet megnézni.
function isNextDone(t) {
  const kovetkezo = t.nextElementSibling;
  if (!kovetkezo) {
    return false;
  }
  return kovetkezo.classList.contains("done") || isNextDone(kovetkezo);
}

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
