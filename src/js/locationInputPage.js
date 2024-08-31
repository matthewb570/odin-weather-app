import PageHeaderComponent from "./pageHeaderComponent";

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
        divPageContent.appendChild(this.createLocationInputComponent());

        return divPageContent;
    }

    createLocationInputComponent() {
        const txtLocation = document.createElement("input");
        txtLocation.id = "txt-location";
        txtLocation.type="text";
        txtLocation.placeholder = "Show me the weather in...";
        
        const btnSearch = document.createElement("button");
        btnSearch.type = "button";
        btnSearch.textContent = "Search";
        btnSearch.onclick = () => this.searchFunction(txtLocation.value);

        const divLocationInputComponent = document.createElement("div");
        divLocationInputComponent.classList.add("location-search");
        divLocationInputComponent.appendChild(txtLocation);
        divLocationInputComponent.appendChild(btnSearch);

        return divLocationInputComponent;
    }
}

export default LocationInputPage;