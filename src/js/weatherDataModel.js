class WeatherDataModel {
    
    unitGroup;
    location;
    currentIcon;
    currentTemp;
    currentFeelsLike;
    currentPrecipitationChance;

    weeklongDataList;

    constructor(unitGroup, location, currentIcon, currentTemp, currentFeelsLike, currentPrecipitationChance, weeklongDataList) {
        this.unitGroup = unitGroup;
        this.location = location;
        this.currentIcon = currentIcon;
        this.currentTemp = currentTemp;
        this.currentFeelsLike = currentFeelsLike;
        this.currentPrecipitationChance = currentPrecipitationChance;

        this.weeklongDataList = weeklongDataList;
    }
}

export default WeatherDataModel;