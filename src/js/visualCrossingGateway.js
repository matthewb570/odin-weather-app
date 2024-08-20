class VisualCrossingGateway {
    
    VISUAL_CROSSING_ROOT_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";
    API_KEY = "6G2CTR2E9EYLGHFKKQKRNRBDU"; // Inserting key on the front end for simplicity; definitely not a good idea for a production app

    async timeline(location) {
        let locationUrlEncoded = encodeURIComponent(location);

        let response = await fetch(`${this.VISUAL_CROSSING_ROOT_URL}/timeline/${locationUrlEncoded}?unitGroup=us&key=${this.API_KEY}&contentType=json`);
        let responseJson = await response.json();
        return responseJson;
    }
}

export default VisualCrossingGateway;