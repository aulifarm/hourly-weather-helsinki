import { Component, OnInit } from '@angular/core';
import { faMoon, faSun, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData: any;
  faWind = faWind;
  faTint = faTint;
  faSun = faSun;
  faMoon = faMoon;

  constructor() {
   }

  ngOnInit(): void {
    //uncomment this, when using apikey
    
    //this.WeatherData = {
    // main: {}
    //}
    this.getWeatherData();
  }

  getWeatherData() {
    //uncomment this, when using apikey
    //fetch('https://api.openweathermap.org/data/2.5/onecall?lat=60.1695&lon=24.9355&exclude=minutely,daily,//alerts&appid=<INSERT_API_KEY>lang=fi')
    //.then(response=>response.json())
    //.then(data=>{this.setWeatherData(data);})

    //Comment below, when using apikey
    let data = JSON.parse('{"lat":60.1695,"lon":24.9355,"timezone":"Europe/Helsinki","timezone_offset":10800,"current":{"dt":1617017677,"sunrise":1616990048,"sunset":1617036937,"temp":276.98,"feels_like":270.4,"pressure":1016,"humidity":93,"dew_point":275.95,"uvi":0.21,"clouds":90,"visibility":4000,"wind_speed":7.2,"wind_deg":180,"weather":[{"id":300,"main":"Drizzle","description":"lievä tihuttainen","icon":"09d"}]},"hourly":[{"dt":1617015600,"temp":276.98,"feels_like":269.87,"pressure":1016,"humidity":93,"dew_point":275.95,"uvi":0.25,"clouds":90,"visibility":10000,"wind_speed":7.96,"wind_deg":189,"wind_gust":14.98,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0.24},{"dt":1617019200,"temp":276.39,"feels_like":269.2,"pressure":1016,"humidity":93,"dew_point":275.37,"uvi":0.21,"clouds":95,"visibility":10000,"wind_speed":7.93,"wind_deg":191,"wind_gust":15.05,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0.17},{"dt":1617022800,"temp":276.16,"feels_like":269.09,"pressure":1017,"humidity":94,"dew_point":275.29,"uvi":0.31,"clouds":98,"visibility":10000,"wind_speed":7.75,"wind_deg":194,"wind_gust":15,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617026400,"temp":276.06,"feels_like":269.12,"pressure":1016,"humidity":94,"dew_point":275.19,"uvi":0.18,"clouds":99,"visibility":10000,"wind_speed":7.54,"wind_deg":191,"wind_gust":14.61,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617030000,"temp":276.17,"feels_like":269.36,"pressure":1016,"humidity":95,"dew_point":275.45,"uvi":0.09,"clouds":100,"visibility":10000,"wind_speed":7.41,"wind_deg":192,"wind_gust":14.41,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617033600,"temp":276.12,"feels_like":269.48,"pressure":1015,"humidity":96,"dew_point":275.64,"uvi":0.01,"clouds":100,"visibility":7194,"wind_speed":7.19,"wind_deg":187,"wind_gust":14.96,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10d"}],"pop":0.52,"rain":{"1h":0.39}},{"dt":1617037200,"temp":276.29,"feels_like":269.17,"pressure":1014,"humidity":97,"dew_point":275.86,"uvi":0,"clouds":100,"visibility":6779,"wind_speed":7.95,"wind_deg":191,"wind_gust":16.61,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.96,"rain":{"1h":0.53}},{"dt":1617040800,"temp":276.46,"feels_like":269.14,"pressure":1014,"humidity":97,"dew_point":276.03,"uvi":0,"clouds":100,"visibility":5367,"wind_speed":8.28,"wind_deg":198,"wind_gust":17.17,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.97,"rain":{"1h":0.43}},{"dt":1617044400,"temp":276.56,"feels_like":268.99,"pressure":1013,"humidity":97,"dew_point":276.1,"uvi":0,"clouds":100,"visibility":3887,"wind_speed":8.67,"wind_deg":200,"wind_gust":17.45,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.97,"rain":{"1h":0.69}},{"dt":1617048000,"temp":276.62,"feels_like":269.06,"pressure":1012,"humidity":97,"dew_point":276.17,"uvi":0,"clouds":100,"visibility":3268,"wind_speed":8.66,"wind_deg":211,"wind_gust":17.52,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.96,"rain":{"1h":0.56}},{"dt":1617051600,"temp":276.47,"feels_like":268.5,"pressure":1011,"humidity":97,"dew_point":276.03,"uvi":0,"clouds":100,"visibility":2867,"wind_speed":9.21,"wind_deg":214,"wind_gust":18.13,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.96,"rain":{"1h":0.7}},{"dt":1617055200,"temp":276.31,"feels_like":268.52,"pressure":1011,"humidity":97,"dew_point":275.93,"uvi":0,"clouds":100,"visibility":1312,"wind_speed":8.91,"wind_deg":221,"wind_gust":17.42,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.96,"rain":{"1h":0.46}},{"dt":1617058800,"temp":276.15,"feels_like":268.65,"pressure":1011,"humidity":97,"dew_point":275.78,"uvi":0,"clouds":100,"visibility":832,"wind_speed":8.46,"wind_deg":229,"wind_gust":16.64,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.97,"rain":{"1h":0.3}},{"dt":1617062400,"temp":276.16,"feels_like":269.38,"pressure":1012,"humidity":97,"dew_point":275.85,"uvi":0,"clouds":100,"visibility":195,"wind_speed":7.43,"wind_deg":235,"wind_gust":14.53,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.99,"rain":{"1h":0.11}},{"dt":1617066000,"temp":276.22,"feels_like":270.08,"pressure":1012,"humidity":98,"dew_point":275.96,"uvi":0,"clouds":100,"visibility":216,"wind_speed":6.57,"wind_deg":238,"wind_gust":13.27,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0.25},{"dt":1617069600,"temp":276.47,"feels_like":270.96,"pressure":1012,"humidity":98,"dew_point":276.19,"uvi":0,"clouds":100,"visibility":3743,"wind_speed":5.74,"wind_deg":243,"wind_gust":12.04,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0.1},{"dt":1617073200,"temp":276.82,"feels_like":271.89,"pressure":1012,"humidity":97,"dew_point":276.47,"uvi":0,"clouds":100,"visibility":4259,"wind_speed":4.96,"wind_deg":247,"wind_gust":9.81,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0.07},{"dt":1617076800,"temp":277.03,"feels_like":272.38,"pressure":1013,"humidity":95,"dew_point":276.41,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.53,"wind_deg":250,"wind_gust":8.35,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0.03},{"dt":1617080400,"temp":276.76,"feels_like":272.6,"pressure":1013,"humidity":97,"dew_point":276.34,"uvi":0.12,"clouds":100,"visibility":10000,"wind_speed":3.85,"wind_deg":244,"wind_gust":7,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617084000,"temp":276.76,"feels_like":272.73,"pressure":1013,"humidity":97,"dew_point":276.44,"uvi":0.31,"clouds":100,"visibility":10000,"wind_speed":3.66,"wind_deg":239,"wind_gust":6.31,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617087600,"temp":277.38,"feels_like":273.36,"pressure":1014,"humidity":94,"dew_point":276.47,"uvi":0.74,"clouds":100,"visibility":10000,"wind_speed":3.69,"wind_deg":229,"wind_gust":5.4,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617091200,"temp":277.77,"feels_like":273.26,"pressure":1013,"humidity":90,"dew_point":276.31,"uvi":1.17,"clouds":100,"visibility":3754,"wind_speed":4.33,"wind_deg":218,"wind_gust":6.15,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617094800,"temp":277.81,"feels_like":273.31,"pressure":1014,"humidity":91,"dew_point":276.47,"uvi":1.55,"clouds":100,"visibility":3687,"wind_speed":4.36,"wind_deg":222,"wind_gust":6.82,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617098400,"temp":277.7,"feels_like":273.16,"pressure":1013,"humidity":93,"dew_point":276.68,"uvi":1.86,"clouds":100,"visibility":4979,"wind_speed":4.47,"wind_deg":220,"wind_gust":7.61,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617102000,"temp":277.81,"feels_like":273.08,"pressure":1013,"humidity":94,"dew_point":277.01,"uvi":1.82,"clouds":100,"visibility":6028,"wind_speed":4.82,"wind_deg":224,"wind_gust":8.89,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617105600,"temp":276.97,"feels_like":271.94,"pressure":1013,"humidity":96,"dew_point":276.48,"uvi":1.53,"clouds":100,"visibility":3744,"wind_speed":5.1,"wind_deg":226,"wind_gust":9.86,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617109200,"temp":277.44,"feels_like":272.46,"pressure":1012,"humidity":95,"dew_point":276.76,"uvi":1.15,"clouds":100,"visibility":10000,"wind_speed":5.11,"wind_deg":238,"wind_gust":9.89,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617112800,"temp":278.13,"feels_like":273.39,"pressure":1012,"humidity":93,"dew_point":277.22,"uvi":0.68,"clouds":100,"visibility":10000,"wind_speed":4.87,"wind_deg":246,"wind_gust":9.56,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617116400,"temp":279,"feels_like":274.29,"pressure":1012,"humidity":90,"dew_point":277.53,"uvi":0.33,"clouds":99,"visibility":10000,"wind_speed":4.93,"wind_deg":262,"wind_gust":9.24,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617120000,"temp":278.82,"feels_like":274.41,"pressure":1012,"humidity":90,"dew_point":277.34,"uvi":0.1,"clouds":95,"visibility":10000,"wind_speed":4.46,"wind_deg":268,"wind_gust":8.29,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617123600,"temp":277.67,"feels_like":273.36,"pressure":1012,"humidity":94,"dew_point":276.91,"uvi":0,"clouds":93,"visibility":10000,"wind_speed":4.18,"wind_deg":261,"wind_gust":7.31,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617127200,"temp":276.77,"feels_like":272.6,"pressure":1013,"humidity":96,"dew_point":276.33,"uvi":0,"clouds":86,"visibility":10000,"wind_speed":3.82,"wind_deg":259,"wind_gust":7.73,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617130800,"temp":276.47,"feels_like":272.31,"pressure":1013,"humidity":97,"dew_point":276.04,"uvi":0,"clouds":88,"visibility":10000,"wind_speed":3.77,"wind_deg":263,"wind_gust":7.8,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617134400,"temp":276.15,"feels_like":272.24,"pressure":1013,"humidity":97,"dew_point":275.78,"uvi":0,"clouds":92,"visibility":10000,"wind_speed":3.34,"wind_deg":260,"wind_gust":7.09,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617138000,"temp":275.71,"feels_like":271.88,"pressure":1013,"humidity":96,"dew_point":275.24,"uvi":0,"clouds":94,"visibility":10000,"wind_speed":3.08,"wind_deg":251,"wind_gust":4.83,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617141600,"temp":275.11,"feels_like":271.1,"pressure":1013,"humidity":96,"dew_point":274.55,"uvi":0,"clouds":91,"visibility":10000,"wind_speed":3.2,"wind_deg":245,"wind_gust":3.88,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617145200,"temp":275.04,"feels_like":271.02,"pressure":1013,"humidity":95,"dew_point":274.39,"uvi":0,"clouds":92,"visibility":10000,"wind_speed":3.16,"wind_deg":244,"wind_gust":4.89,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617148800,"temp":275.23,"feels_like":271.76,"pressure":1012,"humidity":94,"dew_point":274.35,"uvi":0,"clouds":94,"visibility":10000,"wind_speed":2.38,"wind_deg":247,"wind_gust":2.71,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04n"}],"pop":0},{"dt":1617152400,"temp":275.56,"feels_like":273.16,"pressure":1011,"humidity":93,"dew_point":274.61,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.9,"wind_deg":234,"wind_gust":1.23,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.7,"rain":{"1h":0.17}},{"dt":1617156000,"temp":275.48,"feels_like":272.59,"pressure":1010,"humidity":94,"dew_point":274.61,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":1.61,"wind_deg":157,"wind_gust":1.67,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.73,"rain":{"1h":0.14}},{"dt":1617159600,"temp":275.21,"feels_like":272.03,"pressure":1009,"humidity":96,"dew_point":274.71,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":2.04,"wind_deg":151,"wind_gust":2.71,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10n"}],"pop":0.86,"rain":{"1h":0.39}},{"dt":1617163200,"temp":275.21,"feels_like":272.85,"pressure":1008,"humidity":97,"dew_point":274.81,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":0.9,"wind_deg":151,"wind_gust":2.05,"weather":[{"id":500,"main":"Rain","description":"pieni sade","icon":"10d"}],"pop":0.83,"rain":{"1h":0.34}},{"dt":1617166800,"temp":275.21,"feels_like":272.45,"pressure":1008,"humidity":97,"dew_point":274.79,"uvi":0.02,"clouds":100,"visibility":10000,"wind_speed":1.47,"wind_deg":330,"wind_gust":3.51,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0.75},{"dt":1617170400,"temp":275.55,"feels_like":271.13,"pressure":1009,"humidity":94,"dew_point":274.78,"uvi":0.05,"clouds":100,"visibility":8257,"wind_speed":3.82,"wind_deg":352,"wind_gust":7.06,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0.73},{"dt":1617174000,"temp":275.48,"feels_like":271.66,"pressure":1009,"humidity":95,"dew_point":274.79,"uvi":0.14,"clouds":100,"visibility":10000,"wind_speed":2.97,"wind_deg":345,"wind_gust":6.75,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0.09},{"dt":1617177600,"temp":276.32,"feels_like":271.77,"pressure":1010,"humidity":93,"dew_point":275.3,"uvi":0.21,"clouds":100,"visibility":10000,"wind_speed":4.15,"wind_deg":313,"wind_gust":7.9,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617181200,"temp":276.55,"feels_like":270.84,"pressure":1011,"humidity":87,"dew_point":274.69,"uvi":0.27,"clouds":100,"visibility":10000,"wind_speed":5.64,"wind_deg":309,"wind_gust":9.51,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0},{"dt":1617184800,"temp":276.62,"feels_like":271.15,"pressure":1011,"humidity":82,"dew_point":273.98,"uvi":0.25,"clouds":100,"visibility":10000,"wind_speed":5.12,"wind_deg":296,"wind_gust":10.05,"weather":[{"id":804,"main":"Clouds","description":"pilvinen","icon":"04d"}],"pop":0}],"alerts":[{"sender_name":"Ilmatieteen laitos","event":"Warning for gale-force winds","start":1617008400,"end":1617073200,"description":"Wind warning for sea areas: South to southwest gale 14 m/s from noon on."}]}');
    //Comment below, when using apikey
    this.setWeatherData(data);
  }

  setWeatherData(data) {
    this.WeatherData = data;
    let currentDate =new Date();
    this.WeatherData.day = (currentDate);
    let sunriseTime = new Date(this.WeatherData.current.sunrise * 1000);
    let sunsetTime = new Date(this.WeatherData.current.sunset *1000);
    this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
    
    this.WeatherData.firstHourIcon = (this.WeatherData.hourly[0].weather[0].icon);
    this.WeatherData.firstHour_dt = (this.WeatherData.hourly[0].dt);
    this.WeatherData.firstHour_temp = (this.WeatherData.hourly[0].temp - 273.15).toFixed(0);
    this.WeatherData.firstHour_feelsLike = (this.WeatherData.hourly[0].feels_like - 273.15).toFixed(0);
    this.WeatherData.firstHour_wind = (this.WeatherData.hourly[0].wind_speed);
    //this.WeatherData.firstHour_rain = (this.WeatherData.hourly[0].rain["1h"]);
    //this.WeatherData.firstHour_description = (this.WeatherData.hourly[0].weather[0].description);

    this.WeatherData.secondHourIcon = (this.WeatherData.hourly[1].weather[0].icon);
    this.WeatherData.secondHour_dt = (this.WeatherData.hourly[1].dt);
    this.WeatherData.secondHour_temp = (this.WeatherData.hourly[1].temp - 273.15).toFixed(0);
    this.WeatherData.secondHour_feelsLike = (this.WeatherData.hourly[1].feels_like - 273.15).toFixed(0);
    this.WeatherData.secondHour_wind = (this.WeatherData.hourly[1].wind_speed);
    //this.WeatherData.secondHour_rain = (this.WeatherData.hourly[1].rain);
    //this.WeatherData.secondHour_description = (this.WeatherData.hourly[1].weather[0].description);

    this.WeatherData.thirdhHourIcon = (this.WeatherData.hourly[2].weather[0].icon);
    this.WeatherData.thirdHour_dt = (this.WeatherData.hourly[2].dt);
    this.WeatherData.thirdHour_temp = (this.WeatherData.hourly[2].temp - 273.15).toFixed(0);
    this.WeatherData.thirdHour_feelsLike = (this.WeatherData.hourly[2].feels_like - 273.15).toFixed(0);
    this.WeatherData.thirdHour_wind = (this.WeatherData.hourly[2].wind_speed);
    //this.WeatherData.thirdhHour_rain = (this.WeatherData.hourly[2].rain);
    //this.WeatherData.thirdHour_description = (this.WeatherData.hourly[2].weather[0].description);

    this.WeatherData.fourthHourIcon = (this.WeatherData.hourly[3].weather[0].icon);
    this.WeatherData.fourthHour_dt = (this.WeatherData.hourly[3].dt);
    this.WeatherData.fourthHour_temp = (this.WeatherData.hourly[3].temp - 273.15).toFixed(0);
    this.WeatherData.fourthHour_feelsLike = (this.WeatherData.hourly[3].feels_like - 273.15).toFixed(0);
    this.WeatherData.fourthHour_wind = (this.WeatherData.hourly[3].wind_speed);
    //this.WeatherData.fourthHour_rain = (this.WeatherData.hourly[3].rain);
    //this.WeatherData.fourthHour_description = (this.WeatherData.hourly[3].weather[0].description);

    this.WeatherData.fifthHourIcon = (this.WeatherData.hourly[4].weather[0].icon);
    this.WeatherData.fifthHour_dt = (this.WeatherData.hourly[4].dt);
    this.WeatherData.fifthHour_temp = (this.WeatherData.hourly[4].temp - 273.15).toFixed(0);
    this.WeatherData.fifthHour_feelsLike = (this.WeatherData.hourly[4].feels_like - 273.15).toFixed(0);
    this.WeatherData.fifthHour_wind = (this.WeatherData.hourly[4].wind_speed);
    //this.WeatherData.fifthHour_rain = (this.WeatherData.hourly[4].rain);
    //this.WeatherData.fifthHour_description = (this.WeatherData.hourly[4].weather[0].description);

    this.WeatherData.sixthHourIcon = (this.WeatherData.hourly[5].weather[0].icon);
    this.WeatherData.sixthHour_dt = (this.WeatherData.hourly[5].dt);
    this.WeatherData.sixthHour_temp = (this.WeatherData.hourly[5].temp - 273.15).toFixed(0);
    this.WeatherData.sixthHour_feelsLike = (this.WeatherData.hourly[5].feels_like - 273.15).toFixed(0);
    this.WeatherData.sixthHour_wind = (this.WeatherData.hourly[5].wind_speed);
    //this.WeatherData.sixthHour_rain = (this.WeatherData.hourly[5].rain);
    //this.WeatherData.sixthHour_description = (this.WeatherData.hourly[5].weather[0].description);

    this.WeatherData.seventhHourIcon = (this.WeatherData.hourly[6].weather[0].icon);
    this.WeatherData.seventhHour_dt = (this.WeatherData.hourly[6].dt);
    this.WeatherData.seventhHour_temp = (this.WeatherData.hourly[6].temp - 273.15).toFixed(0);
    this.WeatherData.seventhHour_feelsLike = (this.WeatherData.hourly[6].feels_like - 273.15).toFixed(0);
    this.WeatherData.seventhHour_wind = (this.WeatherData.hourly[6].wind_speed);
    //this.WeatherData.seventhHour_rain = (this.WeatherData.hourly[6].rain["1h"]);
    //this.WeatherData.seventhHour_description = (this.WeatherData.hourly[6].weather[0].description);

    this.WeatherData.eighthHourIcon = (this.WeatherData.hourly[7].weather[0].icon);
    this.WeatherData.eighthHour_dt = (this.WeatherData.hourly[7].dt);
    this.WeatherData.eighthHour_temp = (this.WeatherData.hourly[7].temp - 273.15).toFixed(0);
    this.WeatherData.eighthHour_feelsLike = (this.WeatherData.hourly[7].feels_like - 273.15).toFixed(0);
    this.WeatherData.eighthHour_wind = (this.WeatherData.hourly[7].wind_speed);
    //this.WeatherData.eighthHour_rain = (this.WeatherData.hourly[7].rain);
    //this.WeatherData.eighthHour_description = (this.WeatherData.hourly[7].weather[0].description);

    this.WeatherData.ninthHourIcon = (this.WeatherData.hourly[8].weather[0].icon);
    this.WeatherData.ninthHour_dt = (this.WeatherData.hourly[8].dt);
    this.WeatherData.ninthHour_temp = (this.WeatherData.hourly[8].temp - 273.15).toFixed(0);
    this.WeatherData.ninthHour_feelsLike = (this.WeatherData.hourly[8].feels_like - 273.15).toFixed(0);
    this.WeatherData.ninthHour_wind = (this.WeatherData.hourly[8].wind_speed);
    //this.WeatherData.ninthHour_rain = (this.WeatherData.hourly[8].rain);
    //this.WeatherData.ninthHour_description = (this.WeatherData.hourly[8].weather[0].description);

    this.WeatherData.tenthHourIcon = (this.WeatherData.hourly[9].weather[0].icon);
    this.WeatherData.tenthHour_dt = (this.WeatherData.hourly[9].dt);
    this.WeatherData.tenthHour_temp = (this.WeatherData.hourly[9].temp - 273.15).toFixed(0);
    this.WeatherData.tenthHour_feelsLike = (this.WeatherData.hourly[9].feels_like - 273.15).toFixed(0);
    this.WeatherData.tenthHour_wind = (this.WeatherData.hourly[9].wind_speed);
    //this.WeatherData.tenthHour_rain = (this.WeatherData.hourly[9].rain);
    //this.WeatherData.tenthHour_description = (this.WeatherData.hourly[9].weather[0].description);

    this.WeatherData.eleventhHourIcon = (this.WeatherData.hourly[10].weather[0].icon);
    this.WeatherData.eleventhHour_dt = (this.WeatherData.hourly[10].dt);
    this.WeatherData.eleventhHour_temp = (this.WeatherData.hourly[10].temp - 273.15).toFixed(0);
    this.WeatherData.eleventhHour_feelsLike = (this.WeatherData.hourly[10].feels_like - 273.15).toFixed(0);
    this.WeatherData.eleventhHour_wind = (this.WeatherData.hourly[10].wind_speed);
    //this.WeatherData.eleventhHour_rain = (this.WeatherData.hourly[10].rain);
    //this.WeatherData.eleventhHour_description = (this.WeatherData.hourly[10].weather[0].description);

    this.WeatherData.twelfthHourIcon = (this.WeatherData.hourly[11].weather[0].icon);
    this.WeatherData.twelfthHour_dt = (this.WeatherData.hourly[11].dt);
    this.WeatherData.twelfthHour_temp = (this.WeatherData.hourly[11].temp - 273.15).toFixed(0);
    this.WeatherData.twelfthHour_feelsLike = (this.WeatherData.hourly[11].feels_like - 273.15).toFixed(0);
    this.WeatherData.twelfthHour_wind = (this.WeatherData.hourly[11].wind_speed);
    //this.WeatherData.twelfthHour_rain = (this.WeatherData.hourly[11].rain);
    //this.WeatherData.twelfthHour_description = (this.WeatherData.hourly[11].weather[0].description);

  }

}


