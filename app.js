// All of the JS that are responsible for interacting with the weather API and getting data.

class Forecast {
  constructor() {
    this.appid = "6c8b4e1ce36d42ec1524f341258ee514";
    this.url = `https://api.openweathermap.org/data/2.5/weather?`;
  }
  // get city & weather
  async getInfo(city) {
    const query = `q=${city}&units=metric&appid=${this.appid}`;
    const response = await axios.get(this.url + query);
    const data = response.data;
    console.log(data);
    const weather = data.weather[0].description;
    const temp = Math.round(data.main.temp);
    const iconNum = data.weather[0].icon;
    return { temp, city, weather, iconNum }; //object shorthand notation
  }
}

// All of our kind of DOM manipulations showing things on the page
// alert("If you are in Iran, Please turn on your VPN : )");

const form = document.querySelector("form");
const card = document.querySelector(".card");
const info = document.querySelector(".info");
const timeImage = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = (data) => {
  //   const cityData = data.cityData;
  //   const weather = data.weather;
  //destructure properties
  const { city, weather, temp, iconNum } = data;
  console.log(data);

  info.innerHTML =
    `<h5>${city}</h5>
                <div>${weather}</div>
                <div>`.toUpperCase() +
    `<span>${temp}</span><span>&degC / </span>
                    <span>${Math.round(
                      (temp * 9) / 5 + 32
                    )}</span><span>&degF</span>
                </div>`;

  //update the day/night & icon images
  console.log(iconNum);
  const iconSrc = `icons/0/${iconNum}.svg`;
  icon.setAttribute("src", iconSrc);

  // let timeImageSrc = null;
  // if (weather[0].IsDayTime) {
  //   timeImageSrc = "icons/day.svg";
  // } else {
  //   timeImageSrc = "icons/night.svg";
  // }
  // *ternary operator----------->
  let timeImageSrc = iconNum.includes("d")
    ? "icons/day.svg"
    : "icons/night.svg";

  timeImage.setAttribute("src", timeImageSrc);

  //refreshing----------->
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

//add event listener----------->
form.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();
  //   console.dir(form);
  // get city value
  const city = form.city.value.trim();
  // const forecast = new Forecast(city);
  // console.log(city);
  form.reset();

  forecast
    .getInfo(city)
    .then((info) => updateUI(info))
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
