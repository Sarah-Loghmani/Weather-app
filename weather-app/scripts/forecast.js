// All of the JS that are responsible for interacting with the weather API and getting data.

const apiKey = 'ezjoNaRMpA996HEB1AFPGs32Mb8pTcZf';


// get the weather information
const getWeather = async (key) => {
    const resource = "http://dataservice.accuweather.com/currentconditions/v1/" +`${key}?apikey=${apiKey}`;
    const request = await fetch(resource);
    const data = await request.json();
    console.log(data);

}

//get city information
const getCity = async (city) => {

    const resource = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apiKey}&q=${city}`;

    const request = await fetch(resource + query);
    // console.log(request);
    const data = await request.json();
    // console.log(data[0]);
    return data[0];
}
getCity('tehran')
.then(data => {
    return getWeather(data.Key)})
.then(data=> {
    console.log(data)})
.catch(err => console.log(err))

getWeather('')
