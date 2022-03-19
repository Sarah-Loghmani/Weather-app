// All of the JS that are responsible for interacting with the weather API and getting data.

// class Forecast {
//   constructor(cityName) {
//     this.appid = "6c8b4e1ce36d42ec1524f341258ee514";
//     this.cityName = cityName;
//     this.Url =
//       `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.appid}`;
//   }

// get data

// async updateCity(city) {
//   const cityData = await this.getCity(city);
//   const weather = await this.getWeather(cityData.Key);
//   // return {cityData: cityData, weather: weather }
//   //object shorthand notation
//   return { cityData, weather };
// }

// //get city information
// async getCity(city) {
//   const query = `?appid=${this.appid}&q=${city}`;
//   const request = await fetch(this.cityURI + query);
//   const data = await request.json();
//   console.log(data);
//   return data[0];
// }

// // get the weather information
// async getWeather(id) {
//   const query = `${id}?appid=${this.appid}`;
//   const request = await fetch(this.weatherURI + query);
//   const data = await request.json();
//   return data;
// }
// }

// class Forecast {
//   constructor() {
//     this.appid = "6c8b4e1ce36d42ec1524f341258ee514";
//     this.url = `https://api.openweathermap.org/data/2.5/weather?`;
//   }

//   // get city & weather
//   async getInfo(city) {
//     const query = `q=${city}&appid=${this.appid}`;
//     const response = await axios.get(this.url + query);
//     const data = response.data;
//     console.log(data);
//     const weather = data.weather[0].description;
//     const temp = data.main.temp;
//     const iconNum = data.weather[0].icon;

//     return { temp, city, weather, iconNum }; //object shorthand notation
//   }
// }

// const test = new Forecast();
// test.getInfo("London");
