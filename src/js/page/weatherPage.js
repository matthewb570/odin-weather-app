import CurrentWeatherComponent from "../component/currentWeatherComponent";
import DailyWeatherListComponent from "../component/dailyWeatherListComponent";
import DailyWeatherListContainerComponent from "../component/dailyWeatherListContainerComponent";
import LocationSearchComponent from "../component/locationSearchComponent";
import PageHeaderComponent from "../component/pageHeaderComponent";
import CurrentConditionsMapper from "../mapper/currentConditionsMapper";

class WeatherPage {

    currentConditionsMapper;
    weatherDataModel;
    searchFunction;

    constructor(weatherDataModel, searchFunction) {
        this.currentConditionsMapper = new CurrentConditionsMapper();
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
        const currentConditionsClass = this.currentConditionsMapper.map(this.weatherDataModel.currentIcon);
        
        const divLocation = document.createElement("div");
        divLocation.classList.add("location");
        divLocation.textContent = this.weatherDataModel.location;
        
        let currentWeatherComponent = new CurrentWeatherComponent(this.weatherDataModel);

        let dailyWeatherListComponent = new DailyWeatherListComponent(this.weatherDataModel.weeklongDataList);
        let dailyWeatherListContainerComponent = new DailyWeatherListContainerComponent(dailyWeatherListComponent, currentConditionsClass);
        
        const divPageContent = document.createElement("div");
        divPageContent.classList.add("page-content", currentConditionsClass);
        divPageContent.appendChild(divLocation);
        divPageContent.appendChild(currentWeatherComponent.createComponent());
        divPageContent.appendChild(dailyWeatherListContainerComponent.createComponent());

        return divPageContent;
    }
}

export default WeatherPage;