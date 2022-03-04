// All of the JS that are responsible for interacting with the weather API and getting data.

class Forecast {
  constructor() {
    this.apiKey = "ezjoNaRMpA996HEB1AFPGs32Mb8pTcZf";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityData = await this.getCity(city);
    const weather = await this.getWeather(cityData.Key);
    // return {cityData: cityData, weather: weather }
    //object shorthand notation
    return { cityData, weather };
  }
  //get city information
  async getCity(city) {
    const query = `?apikey=${this.apiKey}&q=${city}`;
    const request = await fetch(this.cityURI + query);
    const data = await request.json();
    return data[0];
  }
  // get the weather information
  async getWeather(id) {
    const query = `${id}?apikey=${this.apiKey}`;
    const request = await fetch(this.weatherURI + query);
    const data = await request.json();
    return data;
  }
}
