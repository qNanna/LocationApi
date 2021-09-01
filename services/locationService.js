import fetch from 'node-fetch';

import config from '../config/index';

class LocationService {
  async transferLocation(data) {
    const [result] = await this.sendRequest(data);
    return result;
  }

  async sendRequest(el) {
    const url = config.locationLqAPIUrl.replace('*KEY', config.locationLqAPIKey).replace('*ADRESS', el);
    const data = await fetch(url);
    return data.json();
  }
}

export default new LocationService();
