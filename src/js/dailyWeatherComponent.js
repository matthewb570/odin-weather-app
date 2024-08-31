import HighLowTempComponent from "./highLowTempComponent";
import PrecipitationChanceComponent from "./precipitationChanceComponent";
import WeatherIconComponent from "./weatherIconComponent";

import moment from "moment";

class DailyWeatherComponent {

    weatherDataDayModel;

    constructor(weatherDataDayModel) {
        this.weatherDataDayModel = weatherDataDayModel;
    }

    createComponent() {

        const weatherIconComponent = new WeatherIconComponent(this.weatherDataDayModel.icon);

        const highLowTempComponent = new HighLowTempComponent(this.weatherDataDayModel.highTemp, this.weatherDataDayModel.lowTemp);

        const precipitationChanceComponent = new PrecipitationChanceComponent(this.weatherDataDayModel.precipitationChance);

        const divDailyWeather = document.createElement("div");
        divDailyWeather.classList.add("daily-weather");
        divDailyWeather.appendChild(this.createDate());
        divDailyWeather.appendChild(weatherIconComponent.createComponent());
        divDailyWeather.appendChild(highLowTempComponent.createComponent());
        divDailyWeather.appendChild(precipitationChanceComponent.createComponent());

        return divDailyWeather;
    }

    createDate() {
        const divDayOfWeek = document.createElement("div");
        divDayOfWeek.textContent = moment(this.weatherDataDayModel.date).format("ddd");

        const divMonthAndDay = document.createElement("div");
        divMonthAndDay.textContent = moment(this.weatherDataDayModel.date).format("MM/DD");
        
        const divDate = document.createElement("div");
        divDate.classList.add("date");
        divDate.appendChild(divDayOfWeek);
        divDate.appendChild(divMonthAndDay);
        
        return divDate;
    }
}

export default DailyWeatherComponent;