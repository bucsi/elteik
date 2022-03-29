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

function szinez(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.classList.add("present");
  }
}

document.querySelectorAll("input[type=checkbox]").forEach((c) => {
  szinez(c);
});

delegate(table, "click", "td", (ev) => {
  if (ev.target.matches("td")) {
    ev.target.children[0].focus();
  }
});

delegate(table, "input", "input[type=checkbox]", (ev) => {
  szinez(ev.target);
});
