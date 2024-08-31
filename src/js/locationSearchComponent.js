class LocationSearchComponent {

    searchFunction;

    constructor(searchFunction) {
        this.searchFunction = searchFunction;
    }

    createComponent() {
        const txtLocation = document.createElement("input");
        txtLocation.id = "txt-location";
        txtLocation.type = "text";
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

export default LocationSearchComponent;