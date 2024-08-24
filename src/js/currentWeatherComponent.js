import HighLowTempComponent from "./highLowTempComponent";
import PrecipitationChanceComponent from "./precipitationChanceComponent";
import WeatherIconComponent from "./weatherIconComponent";

class CurrentWeatherComponent {

    weatherDataModel;

    constructor(weatherDataModel) {
        this.weatherDataModel = weatherDataModel;
    }

    createComponent() {
        const divCurrentWeather = document.createElement("div");
        divCurrentWeather.classList.add("current-weather");
        divCurrentWeather.appendChild(this.createPrimaryWeatherInfo());
        divCurrentWeather.appendChild(this.createSecondaryWeatherInfo());

        return divCurrentWeather;
    }

    createPrimaryWeatherInfo() {
        const weatherIconComponent = new WeatherIconComponent(this.weatherDataModel.currentIcon);

        const divCurrentTemperature = document.createElement("div");
        divCurrentTemperature.classList.add("temperature");
        divCurrentTemperature.textContent = `${Math.round(this.weatherDataModel.currentTemp)}°`;
        
        const divPrimaryWeatherInfo = document.createElement("div");
        divPrimaryWeatherInfo.classList.add("primary-weather-info");
        divPrimaryWeatherInfo.appendChild(weatherIconComponent.createComponent());
        divPrimaryWeatherInfo.appendChild(divCurrentTemperature);

        return divPrimaryWeatherInfo;
    }

    createSecondaryWeatherInfo() {
        const divCurrentFeelsLike = document.createElement("div");
        divCurrentFeelsLike.classList.add("temperature");
        divCurrentFeelsLike.textContent = `Feels like ${Math.round(this.weatherDataModel.currentFeelsLike)}°`;
        
        const highLowTempComponent = new HighLowTempComponent(this.weatherDataModel.weeklongDataList[0].highTemp, this.weatherDataModel.weeklongDataList[0].lowTemp);

        const precipitationChanceComponent = new PrecipitationChanceComponent(this.weatherDataModel.currentPrecipitationChance);

        const divSecondaryWeatherInfo = document.createElement("div");
        divSecondaryWeatherInfo.classList.add("secondary-weather-info");
        divSecondaryWeatherInfo.appendChild(divCurrentFeelsLike);
        divSecondaryWeatherInfo.appendChild(highLowTempComponent.createComponent());
        divSecondaryWeatherInfo.appendChild(precipitationChanceComponent.createComponent());

        return divSecondaryWeatherInfo;
    }
}

export default CurrentWeatherComponent;