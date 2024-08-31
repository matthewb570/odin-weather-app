const RADIO_BUTTON_GROUP_NAME = "tempUnit";

class TempUnitSelectorComponent {
    
    radioFahrenheit;
    radioCelsius;

    constructor() {
        this.radioFahrenheit = this.createRadioButton(RADIO_BUTTON_GROUP_NAME, true, "fahrenheit");
        this.radioCelsius = this.createRadioButton(RADIO_BUTTON_GROUP_NAME, false, "celsius");
    }

    createComponent() {
        const divTempUnitSelector = document.createElement("div");
        divTempUnitSelector.classList.add("temp-unit-selector");        
        divTempUnitSelector.appendChild(this.createRadioButtonLabel(this.radioFahrenheit, "°F"));
        divTempUnitSelector.appendChild(this.createRadioButtonLabel(this.radioCelsius, "°C"));

        return divTempUnitSelector;
    }

    createRadioButtonLabel(radioButton, labelText) {
        const divLabelText = document.createElement("div");
        divLabelText.textContent = labelText;

        const lblRadioButtonLabel = document.createElement("label");
        lblRadioButtonLabel.htmlFor = radioButton.id;
        lblRadioButtonLabel.appendChild(radioButton);
        lblRadioButtonLabel.appendChild(divLabelText);

        return lblRadioButtonLabel;
    }

    createRadioButton(groupName, checked, selectedValue) {
        const radioButtonId = `radio-${selectedValue}`
        
        const radioButton = document.createElement("input");
        radioButton.id = radioButtonId;
        radioButton.type = "radio";
        radioButton.name = groupName;
        radioButton.value = selectedValue;
        radioButton.checked = checked;

        return radioButton;
    }

    isFahrenheitChecked() {
        return this.radioFahrenheit.checked;
    }

    isCelsiusChecked() {
        return this.radioCelsius.checked;
    }
}

export default TempUnitSelectorComponent;