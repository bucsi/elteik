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

for (let f of filters) {
  //lehetne filters.map, vagy filters.forEach is
  theFiltersDiv.innerHTML += `
  <label>
    <input type="checkbox" value="${f.filter}" />
    ${f.label}
    <input type="range" min="${f.min}" max="${f.max}" value="${f.value}" />
  </label>`;
}

theFiltersDiv.addEventListener("input", () => {
  filterString = "";

  for (let filter of theFiltersDiv.children) {
    const checkbox = filter.children[0];
    const range = filter.children[1];

    if (checkbox.checked) {
      const filterWord = checkbox.value.replace("#", range.value);

      console.log(filterWord);
      filterString += filterWord + " ";
    }
  }

  theImage.style.filter = filterString;
});
