const textarea = document.querySelector("#the-textarea");
const button = document.querySelector("#the-button");
const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");
const task4 = document.querySelector("#task4");
const task5 = document.querySelector("#task5");

let obj;

button.addEventListener("click", () => {
  obj = JSON.parse(textarea.value);
  console.log(obj);

  task1.innerHTML = obj.daily.find(
    (day) =>
      day.wind_deg < 180 + 45 &&
      day.wind_deg > 180 - 45 &&
      day.weather[0].main === "Clouds"
  ).dt;

  task2.innerHTML = Math.min(...obj.daily.map((day) => day.temp.max));

  task3.innerHTML = obj.daily.every((day) => day.pressure > 1010);

  task4.innerHTML =
    obj.daily.reduce((s, day) => s + day.feels_like.day, 0) / obj.daily.length;

  task5.innerHTML = obj.hourly.reduce((s,hour) => hour.wind_speed > 3 ? s+1 : s,0)
});
