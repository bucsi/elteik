const filters = [
  { label: "Blur", filter: "blur(#px)", min: 0, max: 10, value: 3 },
  {
    label: "Brightness",
    filter: "brightness(#%)",
    min: 0,
    max: 500,
    value: 80,
  },
  { label: "Contrast", filter: "contrast(#%)", min: 0, max: 500, value: 200 },
  { label: "Grayscale", filter: "grayscale(#%)", min: 0, max: 100, value: 50 },
  {
    label: "Hue rotate",
    filter: "hue-rotate(#deg)",
    min: 0,
    max: 360,
    value: 90,
  },
  { label: "Invert", filter: "invert(#%)", min: 0, max: 100, value: 80 },
  { label: "Opacity", filter: "opacity(#%)", min: 0, max: 100, value: 50 },
  { label: "Saturate", filter: "saturate(#%)", min: 0, max: 500, value: 200 },
  { label: "Sepia", filter: "sepia(#%)", min: 0, max: 100, value: 50 },
];

const theFiltersDiv = document.querySelector("#the-filters");
const theImage = document.querySelector("#the-image");

theFiltersDiv.innerHTML = "";

filters.forEach((f) => {
  theFiltersDiv.innerHTML += `<label>
  <input type="checkbox" value="${f.filter}">
  ${f.label}
  <input type="range" min="${f.min}" max="${f.max}" value="${f.value}">
</label>`;
});

theFiltersDiv.addEventListener("input", () => {
  let filterCSS = "";

  for (let filter of theFiltersDiv.children) {
    const checkbox = filter.children[0];
    const filterString = checkbox.value;
    const range = filter.children[1];

    if (checkbox.checked) {
      filterCSS += filterString.replace("#", range.value) + " ";
    }
  }

  theImage.style.filter = filterCSS;
  console.log(filterCSS);
});
