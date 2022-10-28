import axios from "axios";
const apiCall = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
export class ApiClient {
  // utility verifies the response was successful
  responseStatusCheck(responseObject) {
    if (responseObject.status >= 200 && responseObject.status < 300) {
      return true;
    }
    return false;
  }

  // fetches random quote
  async fetchWeather() {
    let response = await axios.get(apiCall);
    let success = await this.responseStatusCheck(response);
    if (success) {
      return response;
    }
    return false;
  }
}
