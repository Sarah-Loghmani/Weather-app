// All of our kind of DOM manipulations showing things on the page
// alert("If you are in Iran, Please turn on your VPN : )");

const form = document.querySelector("form");
const card = document.querySelector(".card");
const info = document.querySelector(".info");
const timeImage = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
// const forecast = new Forecast(city);

// const updateUI = (data) => {
//   //   const cityData = data.cityData;
//   //   const weather = data.weather;
//   //destructure properties
//   const { cityData, weather } = data;
//   console.log(data);

//   info.innerHTML =
//     `<h5>${cityData.EnglishName}</h5>
//                 <div>${weather[0].WeatherText}</div>
//                 <div>`.toUpperCase() +
//     `<span>${weather[0].Temperature.Metric.Value}</span><span>&degC / </span>
//                     <span>${weather[0].Temperature.Imperial.Value}</span><span>&degF</span>
//                 </div>`;

//   //update the day/night & icon images
//   const iconSrc = `icons/${weather[0].WeatherIcon}.svg`;
//   icon.setAttribute("src", iconSrc);

//   // let timeImageSrc = null;
//   // if (weather[0].IsDayTime) {
//   //   timeImageSrc = "icons/day.svg";
//   // } else {
//   //   timeImageSrc = "icons/night.svg";
//   // }
//   // *ternary operator
//   let timeImageSrc = weather[0].IsDayTime ? "icons/day.svg" : "icons/night.svg";

//   timeImage.setAttribute("src", timeImageSrc);

//   //refreshing
//   if (card.classList.contains("d-none")) {
//     card.classList.remove("d-none");
//   }
// };

form.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();
  //   console.dir(form);
  // get city value
  const city = form.city.value.trim();
  const forecast = new Forecast(city);
  // console.log(city);
  form.reset();

  forecast
    .getData()
    .then((data) => console.log("runnnnn"))
    .catch((err) => {
      console.log(err);
    });

  // forecast
  //   .updateCity(city)
  //   .then((data) => updateUI(data))
  //   .catch((err) => {
  //     console.log(err);
  //     alert("There is not the location");
  //   });
});
