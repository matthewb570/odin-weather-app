class CurrentConditionsMapper {
    
    map(currentIcon) {        
        switch (currentIcon) {
            case "partly-cloudy-day":
            case "clear-day":
                return "sunny-theme";
            case "snow":
            case "snow-showers-day":
            case "thunder-rain":
            case "thunder-showers-day":
            case "rain":
            case "showers-day":
            case "fog":
            case "wind":
            case "cloudy":
                return "cloudy-theme";
            default:
                return "night-theme";
        }
    }
}

export default CurrentConditionsMapper;