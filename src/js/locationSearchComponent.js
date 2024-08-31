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
        divLocationInputComponent.appendChild(this.createTempUnitSelector());
        divLocationInputComponent.appendChild(txtLocation);
        divLocationInputComponent.appendChild(btnSearch);

        return divLocationInputComponent;
    }

    createTempUnitSelector() {
        const radioButtonGroupName = "tempUnit";

        const divTempUnitSelector = document.createElement("div");
        divTempUnitSelector.classList.add("temp-unit-selector");        
        divTempUnitSelector.appendChild(this.createRadioButton(radioButtonGroupName, true, "fahrenheit", "°F"));
        divTempUnitSelector.appendChild(this.createRadioButton(radioButtonGroupName, false, "celsius", "°C"));

        return divTempUnitSelector;
    }

    createRadioButton(groupName, checked, selectedValue, labelText) {
        const radioButtonId = `radio-${selectedValue}`
        
        const radioButton = document.createElement("input");
        radioButton.id = radioButtonId;
        radioButton.type = "radio";
        radioButton.name = groupName;
        radioButton.value = selectedValue;
        radioButton.checked = checked;

        const divLabelText = document.createElement("div");
        divLabelText.textContent = labelText;

        const lblRadioButtonLabel = document.createElement("label");
        lblRadioButtonLabel.htmlFor = radioButtonId;
        lblRadioButtonLabel.appendChild(radioButton);
        lblRadioButtonLabel.appendChild(divLabelText);

        return lblRadioButtonLabel;
    }
}

export default LocationSearchComponent;