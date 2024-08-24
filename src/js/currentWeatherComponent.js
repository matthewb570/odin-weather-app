import PrecipitationChanceComponent from "./precipitationChanceComponent";

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
        const divCurrentWeatherIcon = document.createElement("div");
        divCurrentWeatherIcon.classList.add("icon");
        divCurrentWeatherIcon.classList.add(this.weatherDataModel.currentIcon);

        const divCurrentTemperature = document.createElement("div");
        divCurrentTemperature.classList.add("temperature");
        divCurrentTemperature.textContent = `${Math.round(this.weatherDataModel.currentTemp)}°`;
        
        const divPrimaryWeatherInfo = document.createElement("div");
        divPrimaryWeatherInfo.classList.add("primary-weather-info");
        divPrimaryWeatherInfo.appendChild(divCurrentWeatherIcon);
        divPrimaryWeatherInfo.appendChild(divCurrentTemperature);

        return divPrimaryWeatherInfo;
    }

    createSecondaryWeatherInfo() {
        const divCurrentFeelsLike = document.createElement("div");
        divCurrentFeelsLike.classList.add("temperature");
        divCurrentFeelsLike.textContent = `Feels like ${Math.round(this.weatherDataModel.currentFeelsLike)}°`;
        
        const divHighLow = document.createElement("div");
        divHighLow.classList.add("temperature");
        divHighLow.textContent = `${Math.round(this.weatherDataModel.weeklongDataList[0].highTemp)}° / ${Math.round(this.weatherDataModel.weeklongDataList[0].lowTemp)}°`;

        const precipitationChanceComponent = new PrecipitationChanceComponent(this.weatherDataModel.currentPrecipitationChance);

        const divSecondaryWeatherInfo = document.createElement("div");
        divSecondaryWeatherInfo.classList.add("secondary-weather-info");
        divSecondaryWeatherInfo.appendChild(divCurrentFeelsLike);
        divSecondaryWeatherInfo.appendChild(divHighLow);
        divSecondaryWeatherInfo.appendChild(precipitationChanceComponent.createComponent());

        return divSecondaryWeatherInfo;
    }

    createPrecipitationChance() {
        
    }
}

export default CurrentWeatherComponent;