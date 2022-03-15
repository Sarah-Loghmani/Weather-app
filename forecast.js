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

class Forecast {
  constructor(city) {
    this.appid = "6c8b4e1ce36d42ec1524f341258ee514";
    this.city = city;
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`;
  }

  // get data
  async getData() {
    try {
      const response = await axios.get(this.url);
      const data = response.data;
      console.log(data);
      console.log(data.weather[0].description);
    } catch (e) {
      console.log(e);
    }
  }
}
