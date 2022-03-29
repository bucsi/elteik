const table = document.querySelector("table");

function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.sectionRowIndex,
  };
}

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

document.querySelectorAll("input[type=checkbox]").forEach((c) => szinez(c));

function szinez(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.classList.add("present");
  } else {
    checkbox.parentElement.classList.remove("present");
  }
}

delegate(table, "input", "input[type=checkbox]", (ev) => szinez(ev.target));
delegate(table, "click", "td", (ev) => {
  if (ev.target.matches("td")) {
    ev.target.children[0].focus();
  }
});

document.addEventListener("keydown", (ev) => {
  if (benneVan(ev.key, ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"])) {
    const focus = document.activeElement
    const coords = xyCoord(focus.parentElement)
    if(focus !== document.body){
      console.log(coords)
    }
    if(ev.key === "ArrowRight"){
//checkbox ->     td   -> tr         -> velem szomszédos td -> annak a checkboxa focus()
      focus.parentElement.parentElement.children[coords.x+1].children[0].focus()
    }
    if(ev.key === "ArrowLeft"){
//checkbox ->     td   -> tr         -> velem szomszédos td -> annak a checkboxa focus()
      focus.parentElement.parentElement.children[coords.x-1].children[0].focus()
    }
    if(ev.key === "ArrowUp"){
//checkbox-> td        -> tr         -> table      -> szomszéd tr -> stb...
      focus.parentElement.parentElement.parentElement.children[coords.y-1].children[coords.x].children[0].focus()

    }
    if(ev.key === "ArrowDown"){
//checkbox-> td        -> tr         -> table      -> szomszéd tr -> stb...
      focus.parentElement.parentElement.parentElement.children[coords.y+1].children[coords.x].children[0].focus()
    }
  }
});

function benneVan(elem, tomb) {
  return tomb.find((e) => e === elem) !== undefined;
}
