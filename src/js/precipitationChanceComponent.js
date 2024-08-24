class PrecipitationChanceComponent {

    precipitationChance;

    constructor(precipitationChance) {
        this.precipitationChance = precipitationChance;
    }

    createComponent() {
        const divPrecipitationIcon = document.createElement("div");
        divPrecipitationIcon.classList.add("icon");
        divPrecipitationIcon.classList.add("precipitation");
        
        const divPrecipitationPercent = document.createElement("div");
        divPrecipitationPercent.classList.add("percent");
        divPrecipitationPercent.textContent = `${Math.round(this.precipitationChance)}%`;

        const divPrecipitationChance = document.createElement("div");
        divPrecipitationChance.classList.add("precipitation-chance");
        divPrecipitationChance.appendChild(divPrecipitationIcon);
        divPrecipitationChance.appendChild(divPrecipitationPercent);

        return divPrecipitationChance;
    }
}

export default PrecipitationChanceComponent;