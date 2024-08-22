class LocationInputPage {

    searchFunction;

    constructor(searchFunction) {
        this.searchFunction = searchFunction;
    }

    createPage() {
        const divLocationInputPage = document.createElement("div");
        divLocationInputPage.id = "div-location-input-page";
        divLocationInputPage.classList.add("page");
        divLocationInputPage.appendChild(this.createPageHeader());
        divLocationInputPage.appendChild(this.createPageContent());

        return divLocationInputPage;
    }

    createPageHeader() {
        const divPageHeader = document.createElement("div");
        divPageHeader.classList.add("page-header");
        divPageHeader.appendChild(this.createPageTitle());
        
        return divPageHeader;
    }

    createPageTitle() {
        const divPageTitle = document.createElement("div");
        divPageTitle.classList.add("page-title");
        divPageTitle.textContent = "Weather App";

        return divPageTitle;
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