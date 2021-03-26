import axios from 'axios';
import settings from '../../settings/settings';

// Handle the call to the API to get the temperature data by city name.
export const getTemperatureDataByCityName = (cityName) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(settings.api_base_url.replace('#city#', cityName)).then((response) => {
                resolve(response);

            }).catch((error) => {
                reject(error);
            });

        } catch (error) {
            reject(error);
        }
    });
};