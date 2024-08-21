class WeatherDataModel {
    
    currentIcon;
    currentTemp;
    currentFeelsLike;
    currentPrecipitationChance;

    weeklongDataList;

    constructor(currentIcon, currentTemp, currentFeelsLike, currentPrecipitationChance, weeklongDataList) {
        this.currentIcon = currentIcon;
        this.currentTemp = currentTemp;
        this.currentFeelsLike = currentFeelsLike;
        this.currentPrecipitationChance = currentPrecipitationChance;

        this.weeklongDataList = weeklongDataList;
    }
}

export default WeatherDataModel;