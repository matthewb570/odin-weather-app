import TempUnitSelectorComponent from "./tempUnitSelectorComponent";
import { UNIT_GROUP_METRIC, UNIT_GROUP_US } from "../constants/visualCrossingUnitGroupConstants";

class LocationSearchComponent {

    searchFunction;
    tempUnitSelectorComponent;

    constructor(searchFunction) {
        this.searchFunction = searchFunction;
        this.tempUnitSelectorComponent = new TempUnitSelectorComponent();
    }

    createComponent() {
        const txtLocation = document.createElement("input");
        txtLocation.id = "txt-location";
        txtLocation.type = "text";
        txtLocation.placeholder = "Show me the weather in...";
        
        const btnSearch = document.createElement("button");
        btnSearch.type = "button";
        btnSearch.textContent = "Search";
        btnSearch.onclick = () => this.searchFunction(txtLocation.value,
            this.tempUnitSelectorComponent.isFahrenheitChecked() ? UNIT_GROUP_US : UNIT_GROUP_METRIC);

        const divLocationInputComponent = document.createElement("div");
        divLocationInputComponent.classList.add("location-search");
        divLocationInputComponent.appendChild(this.tempUnitSelectorComponent.createComponent());
        divLocationInputComponent.appendChild(txtLocation);
        divLocationInputComponent.appendChild(btnSearch);

        return divLocationInputComponent;
    }
}

export default LocationSearchComponent;