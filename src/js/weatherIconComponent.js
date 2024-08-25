class WeatherIconComponent {

    iconDescription;

    constructor(iconDescription) {
        this.iconDescription = iconDescription;
    }

    createComponent() {
        const divWeatherIcon = document.createElement("div");
        divWeatherIcon.classList.add("weather-icon");
        divWeatherIcon.classList.add(this.iconDescription);

        return divWeatherIcon;
    }
}

export default WeatherIconComponent;