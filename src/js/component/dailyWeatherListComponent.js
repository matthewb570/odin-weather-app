import DailyWeatherComponent from "./dailyWeatherComponent";

class DailyWeatherListComponent {

    dailyWeatherDayModelList;

    constructor(dailyWeatherList) {
        this.dailyWeatherList = dailyWeatherList;
    }

    createComponent() {
        const divDailyWeatherList = document.createElement("div");
        divDailyWeatherList.classList.add("daily-weather-list");
        this.dailyWeatherList.forEach(dailyWeatherDayModel => {
            let dailyWeatherComponent = new DailyWeatherComponent(dailyWeatherDayModel);
            divDailyWeatherList.appendChild(dailyWeatherComponent.createComponent());
        });

        return divDailyWeatherList;
    }
}

export default DailyWeatherListComponent;