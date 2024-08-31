const DAILY_WEATHER_ITEM_WIDTH = 112;

class DailyWeatherListContainerComponent {

    dailyWeatherListComponent;

    constructor(dailyWeatherListComponent) {
        this.dailyWeatherListComponent = dailyWeatherListComponent;
    }

    createComponent() {
        const divDailyWeatherList = this.dailyWeatherListComponent.createComponent();

        const btnScrollLeft = document.createElement("div");
        btnScrollLeft.classList.add("scroll-control", "icon", "left");
        btnScrollLeft.onclick = () => {
            divDailyWeatherList.scrollTo(divDailyWeatherList.scrollLeft - DAILY_WEATHER_ITEM_WIDTH, 0);
        }

        const btnScrollRight = document.createElement("div");
        btnScrollRight.classList.add("scroll-control", "icon", "right");
        btnScrollRight.onclick = () => {
            divDailyWeatherList.scrollTo(divDailyWeatherList.scrollLeft + DAILY_WEATHER_ITEM_WIDTH, 0);
        }
        
        const divDailyWeatherListContainer = document.createElement("div");
        divDailyWeatherListContainer.classList.add("daily-weather-list-container");
        divDailyWeatherListContainer.appendChild(divDailyWeatherList);
        divDailyWeatherListContainer.appendChild(btnScrollLeft);
        divDailyWeatherListContainer.appendChild(btnScrollRight);

        return divDailyWeatherListContainer;
    }
}

export default DailyWeatherListContainerComponent;