import WeatherDataModel from "./weatherDataModel";
import WeatherDataDayModel from "./weatherDataDayModel";

class WeatherDataModelMapper {

    map(visualCrossingJson, unitGroup) {
        let weatherDataModel = new WeatherDataModel();
        
        weatherDataModel.unitGroup = unitGroup;
        weatherDataModel.location = visualCrossingJson.resolvedAddress;
        weatherDataModel.currentIcon = visualCrossingJson.currentConditions.icon;
        weatherDataModel.currentTemp = visualCrossingJson.currentConditions.temp;
        weatherDataModel.currentFeelsLike = visualCrossingJson.currentConditions.feelslike;
        weatherDataModel.currentPrecipitationChance = visualCrossingJson.currentConditions.precipprob;
        weatherDataModel.weeklongDataList = visualCrossingJson.days.map(visualCrossingJsonDay => this.generateDailyData(visualCrossingJsonDay));

        return weatherDataModel;
    }

    generateDailyData(visualCrossingJsonDay) {
        let weatherDataDayModel = new WeatherDataDayModel();
        
        weatherDataDayModel.date = new Date(`${visualCrossingJsonDay.datetime}T00:00:00`); // Adding a timestamp has the date constructor assume the date is in the current timezone; otherwise, UTC timezone is assumed, which is not desired (ie, without "T00:00:00", "2024-01-01" is converted to 2023-12-31 at 7:00 pm CT)
        weatherDataDayModel.icon = visualCrossingJsonDay.icon;
        weatherDataDayModel.highTemp = visualCrossingJsonDay.tempmax;
        weatherDataDayModel.lowTemp = visualCrossingJsonDay.tempmin;
        weatherDataDayModel.precipitationChance = visualCrossingJsonDay.precipprob;

        return weatherDataDayModel;
    }
}

export default WeatherDataModelMapper;