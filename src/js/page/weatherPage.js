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
        const currentConditionsClass = this.currentConditionsMapper.map(this.weatherDataModel.currentIcon);
        
        const divLocationSearch = new LocationSearchComponent(this.searchFunction).createComponent();
        
        const divWeatherPage = document.createElement("div");
        divWeatherPage.id = "div-weather-page";
        divWeatherPage.classList.add("page");
        divWeatherPage.appendChild(new PageHeaderComponent("Weather App", divLocationSearch).createComponent());
        divWeatherPage.appendChild(this.createPageContent(currentConditionsClass));
        divWeatherPage.appendChild(this.createPageFooter(currentConditionsClass));

        return divWeatherPage;
    }

    createPageContent(currentConditionsClass) {
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

    createPageFooter(currentConditionsClass) {
        const divIconAcknowledgementMessage = document.createElement("div");
        divIconAcknowledgementMessage.textContent = "Weather icons provided by ";
        
        const linkIconAcknowledgementLink = document.createElement("a");
        linkIconAcknowledgementLink.href = "https://icons8.com";
        linkIconAcknowledgementLink.textContent = "Icons8";

        const divPageFooter = document.createElement("div");
        divPageFooter.classList.add("page-footer", currentConditionsClass);
        divPageFooter.appendChild(divIconAcknowledgementMessage);
        divPageFooter.appendChild(linkIconAcknowledgementLink);

        return divPageFooter;
    }
}

export default WeatherPage;