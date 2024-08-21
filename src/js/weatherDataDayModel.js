class WeatherDataDayModel {
    
    icon;
    highTemp;
    lowTemp;
    precipitationChance;

    constructor(icon, highTemp, lowTemp, precipitationChance) {
        this.icon = icon;
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
        this.precipitationChance = precipitationChance;
    }
}

export default WeatherDataDayModel;