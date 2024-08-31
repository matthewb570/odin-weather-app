import LocationSearchComponent from "../component/locationSearchComponent";
import PageHeaderComponent from "../component/pageHeaderComponent";

class LocationInputPage {

    searchFunction;

    constructor(searchFunction) {
        this.searchFunction = searchFunction;
    }

    createPage() {
        const divPageHeader = new PageHeaderComponent("Weather App").createComponent();
        
        const divLocationInputPage = document.createElement("div");
        divLocationInputPage.id = "div-location-input-page";
        divLocationInputPage.classList.add("page");
        divLocationInputPage.appendChild(divPageHeader);
        divLocationInputPage.appendChild(this.createPageContent());

        return divLocationInputPage;
    }

    createPageContent() {
        const divPageContent = document.createElement("div");
        divPageContent.classList.add("page-content");
        divPageContent.appendChild(new LocationSearchComponent(this.searchFunction).createComponent());

        return divPageContent;
    }
}

export default LocationInputPage;