import "../css/styles.css";
import VisualCrossingGateway from "./visualCrossingGateway";
import WeatherDataModelMapper from "./weatherDataModelMapper";
import LocationInputPage from "./locationInputPage";
import WeatherPage from "./weatherPage";

function searchFunction(searchValue) {
    
    let visualCrossingGateway = new VisualCrossingGateway();
    
    visualCrossingGateway.timeline(searchValue).then(json => {
        
        let weatherDataModelMapper = new WeatherDataModelMapper();

        let weatherDataModel = weatherDataModelMapper.map(json);
        
        while(document.body.lastChild) {
            document.body.removeChild(document.body.lastChild);
        }

        const weatherPage = new WeatherPage(weatherDataModel, searchFunction);
        document.body.appendChild(weatherPage.createPage());
    });
}

let locationInputPage = new LocationInputPage(searchFunction);
document.body.appendChild(locationInputPage.createPage());