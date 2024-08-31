import "../css/styles.css";
import VisualCrossingGateway from "./gateway/visualCrossingGateway";
import WeatherDataModelMapper from "./mapper/weatherDataModelMapper";
import LocationInputPage from "./page/locationInputPage";
import WeatherPage from "./page/weatherPage";

/*
TODOs:
1. (DONE) Add ability to toggle between F and C
2. Change background color based on current weather conditions
*/

function searchFunction(searchValue, unitGroup) {
    
    let visualCrossingGateway = new VisualCrossingGateway();
    
    visualCrossingGateway.timeline(searchValue, unitGroup).then(json => {
        
        let weatherDataModelMapper = new WeatherDataModelMapper();

        let weatherDataModel = weatherDataModelMapper.map(json, unitGroup);
        
        while(document.body.lastChild) {
            document.body.removeChild(document.body.lastChild);
        }

        const weatherPage = new WeatherPage(weatherDataModel, searchFunction);
        document.body.appendChild(weatherPage.createPage());
    });
}

let locationInputPage = new LocationInputPage(searchFunction);
document.body.appendChild(locationInputPage.createPage());