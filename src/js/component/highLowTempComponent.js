class HighLowTempComponent {

    highTemp;
    lowTemp;

    constructor(highTemp, lowTemp) {
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
    }

    createComponent() {
        const divHighLow = document.createElement("div");
        divHighLow.classList.add("temperature");
        divHighLow.textContent = `${Math.round(this.highTemp)}° / ${Math.round(this.lowTemp)}°`;

        return divHighLow;
    }
}

export default HighLowTempComponent;