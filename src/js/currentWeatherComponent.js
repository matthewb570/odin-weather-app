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
        divCurrentTemperature.textContent = this.weatherDataModel.currentTemp;
        
        const divPrimaryWeatherInfo = document.createElement("div");
        divPrimaryWeatherInfo.classList.add("primary-weather-info");
        divPrimaryWeatherInfo.appendChild(divCurrentWeatherIcon);
        divPrimaryWeatherInfo.appendChild(divCurrentTemperature);

        return divPrimaryWeatherInfo;
    }

    createSecondaryWeatherInfo() {
        const divCurrentFeelsLike = document.createElement("div");
        divCurrentFeelsLike.classList.add("temperature");
        divCurrentFeelsLike.textContent = `Feels like ${this.weatherDataModel.currentFeelsLike}`;
        
        const divHighLow = document.createElement("div");
        divHighLow.classList.add("temperature");
        divHighLow.textContent = `${this.weatherDataModel.weeklongDataList[0].highTemp} / ${this.weatherDataModel.weeklongDataList[0].lowTemp}`;

        const divSecondaryWeatherInfo = document.createElement("div");
        divSecondaryWeatherInfo.classList.add("secondary-weather-info");
        divSecondaryWeatherInfo.appendChild(divCurrentFeelsLike);
        divSecondaryWeatherInfo.appendChild(this.createPrecipitationChance());
        divSecondaryWeatherInfo.appendChild(divHighLow);

        return divSecondaryWeatherInfo;
    }

    createPrecipitationChance() {
        const divPrecipitationIcon = document.createElement("div");
        divPrecipitationIcon.classList.add("icon");
        divPrecipitationIcon.classList.add("precipitation");
        
        const divPrecipitationPercent = document.createElement("div");
        divPrecipitationPercent.classList.add("percent");
        divPrecipitationPercent.textContent = `${this.weatherDataModel.currentPrecipitationChance}%`;

        const divPrecipitationChance = document.createElement("div");
        divPrecipitationChance.classList.add("precipitation-chance");
        divPrecipitationChance.appendChild(divPrecipitationIcon);
        divPrecipitationChance.appendChild(divPrecipitationPercent);

        return divPrecipitationChance;
    }
}

export default CurrentWeatherComponent;