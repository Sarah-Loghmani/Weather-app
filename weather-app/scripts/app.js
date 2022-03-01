// All of our kind of DOM manipulations showing things on the page

const form = document.querySelector("form");
const card = document.querySelector(".card");
const info = document.querySelector(".info");
const timeImage = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  //   const cityData = data.cityData;
  //   const weather = data.weather;
  //destructure properties
  const { cityData, weather } = data;
  console.log(data);

  info.innerHTML = `<h5>${cityData.EnglishName}</h5>
                <div>${weather[0].WeatherText}</div>
                <div>
                    <span>${weather[0].Temperature.Metric.Value}</span><span>&degC / </span>
                    <span>${weather[0].Temperature.Imperial.Value}</span><span>&degF</span>
                </div>`;

  //update the day/night & icon images
  const iconSrc = `icons/${weather[0].WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeImageSrc = null;

  if (weather[0].IsDayTime) {
    timeImageSrc = "icons/day.svg";
  } else {
    timeImageSrc = "icons/night.svg";
  }

  timeImage.setAttribute("src", timeImageSrc);

  //refreshing
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

async function updateCity(city) {
  const cityData = await getCity(city);
  const weather = await getWeather(cityData.Key);
  // return {
  //     cityData: cityData,
  //     weather: weather
  // }
  //object shorthand notation
  return { cityData, weather };
}

form.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();
  //   console.dir(form);
  // get city value
  const city = form.city.value.trim();
  // console.log(city);
  form.reset();

  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
