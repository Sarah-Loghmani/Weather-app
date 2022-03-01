// All of our kind of DOM manipulations showing things on the page

const form = document.querySelector("form");
const card = document.querySelector(".card");
const info = document.querySelector(".info");

const updateUI = async(data)=>{
    const cityData = data.cityData;
    const weather = data.weather;

    info.innerHTML = `<h5>CITY NAME</h5>
                <div>WEATHER CONDITIONS</div>
                <div>
                    <span>TEMP</span><span>&degC</span>
                </div>`;
}
const updateCity = async (city) => {
  const cityData = await getCity(city);
  const weather = await getWeather(cityData.Key);
  // return {
  //     cityData: cityData,
  //     weather: weather
  // }

  //object shorthand notation
  return { cityData, weather };
};

form.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();
  console.dir(form);
  // get city value
  const city = form.city.value.trim();
  // console.log(city);
  form.reset();

  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err)
    });
});
