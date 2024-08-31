class WeatherDataModel {
    
    location;
    currentIcon;
    currentTemp;
    currentFeelsLike;
    currentPrecipitationChance;

    weeklongDataList;

    constructor(location, currentIcon, currentTemp, currentFeelsLike, currentPrecipitationChance, weeklongDataList) {
        this.location = location;
        this.currentIcon = currentIcon;
        this.currentTemp = currentTemp;
        this.currentFeelsLike = currentFeelsLike;
        this.currentPrecipitationChance = currentPrecipitationChance;

        this.weeklongDataList = weeklongDataList;
    }
}

export default WeatherDataModel;