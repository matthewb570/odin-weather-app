import CurrentWeatherComponent from "./currentWeatherComponent";
import DailyWeatherListComponent from "./dailyWeatherListComponent";
import DailyWeatherListContainerComponent from "./dailyWeatherListContainerComponent";
import LocationSearchComponent from "./locationSearchComponent";
import PageHeaderComponent from "./pageHeaderComponent";

class WeatherPage {

    weatherDataModel;
    searchFunction;

    constructor(weatherDataModel, searchFunction) {
        this.weatherDataModel = weatherDataModel;
        this.searchFunction = searchFunction;
    }

    createPage() {
        const divLocationSearch = new LocationSearchComponent(this.searchFunction).createComponent();
        
        const divWeatherPage = document.createElement("div");
        divWeatherPage.id = "div-weather-page";
        divWeatherPage.classList.add("page");
        divWeatherPage.appendChild(new PageHeaderComponent("Weather App", divLocationSearch).createComponent());
        divWeatherPage.appendChild(this.createPageContent());

        return divWeatherPage;
    }

    createPageContent() {
        let currentWeatherComponent = new CurrentWeatherComponent(this.weatherDataModel);

        let dailyWeatherListComponent = new DailyWeatherListComponent(this.weatherDataModel.weeklongDataList);
        let dailyWeatherListContainerComponent = new DailyWeatherListContainerComponent(dailyWeatherListComponent);
        
        const divPageContent = document.createElement("div");
        divPageContent.classList.add("page-content");
        divPageContent.appendChild(currentWeatherComponent.createComponent());
        divPageContent.appendChild(dailyWeatherListContainerComponent.createComponent());

        return divPageContent;
    }
}

export default WeatherPage;