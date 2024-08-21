class WeatherDataModel {
    
    currentIcon;
    currentTemp;
    currentFeelsLike;
    currentPrecipitationChance;
    currentDescription;

    weeklongDataList;

    constructor(currentIcon, currentTemp, currentFeelsLike, currentPrecipitationChance, currentDescription, weeklongDataList) {
        this.currentIcon = currentIcon;
        this.currentTemp = currentTemp;
        this.currentFeelsLike = currentFeelsLike;
        this.currentPrecipitationChance = currentPrecipitationChance;
        this.currentDescription = currentDescription;

        this.weeklongDataList = weeklongDataList;
    }
}

export default WeatherDataModel;