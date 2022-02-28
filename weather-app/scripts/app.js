// All of our kind of DOM manipulations showing things on the page

const form = document.querySelector('form');
const card = document.querySelector('.card');
const info = document.querySelect('.info');

const updateCity = async (city) => {
   
    const cityData = await getCity(city)
    const weather = await getWeather(cityData.Key);
   


    // return {
    //     cityData: cityData,
    //     weather: weather
    // }

    //object shorthand notation
    return {cityData, weather}

}

form.addEventListener('submit', e =>{
    //prevent default action
    e.preventDefault();
    console.dir(form);
    // get city value
    const city = form.city.value.trim();
    // console.log(city);
    form.reset();

    updateCity(city)
      .then(data => {console.log(data)})
      .catch(err => {console.log(err)})

}
)