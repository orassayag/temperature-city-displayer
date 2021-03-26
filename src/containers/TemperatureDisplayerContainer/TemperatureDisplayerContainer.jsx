import React, { Component } from 'react';
import { TemperatureDisplayer } from '../../components/Temperature';
import { getTemperatureDataByCityName } from '../../api/routes/temperatures';
import * as textUtils from '../../utils/textUtils';

class TemperatureDisplayerContainer extends Component {
    state = {
        display: false,
        currentCity: null,
        currentCityIndex: 0,
        temperatureCitiesArray: textUtils.getCitiesArray()
    };

    componentDidMount() {
        this.handleCityData();
    }

    handleCityData() {
        this.setState({ display: false });
        const self = this;
        const { state } = this;

        // Get a random city name, different from last display.
        let selectedCity = textUtils.getRandomNumber(0, state.temperatureCitiesArray.length);
        while (selectedCity === state.currentCityIndex) {
            selectedCity = textUtils.getRandomNumber(0, state.temperatureCitiesArray.length);
        }
        this.setState({ currentCityIndex: selectedCity });

        // Check if the data already fetched from API. If not, fetch and save the data in a state array to save next time call.
        if (state.temperatureCitiesArray[selectedCity].temperature) {
            this.setState({ currentCity: state.temperatureCitiesArray[selectedCity], display: true });
            this.changeCityHandler();
        }
        else {
            getTemperatureDataByCityName(state.temperatureCitiesArray[selectedCity].cityName)
                .then((response) => {
                    const cities = [...state.temperatureCitiesArray];
                    const city = {
                        ...cities[selectedCity],
                        temperature: textUtils.getCelsiusFromKelvin(response.data.main.temp)
                    };
                    cities[selectedCity] = city;
                    self.setState({ temperatureCitiesArray: cities, currentCity: city, display: true });
                    this.changeCityHandler();
                })
                .catch((err) => {
                    this.changeCityHandler();
                });

        }
    }

    changeCityHandler() {
        setTimeout(() => {
            this.handleCityData();
        }, 3000);
    }

    render() {
        const { state } = this;

        if (!state.currentCity) {
            return null;
        }

        return (
            <TemperatureDisplayer display={state.display}
                cityName={state.currentCity.cityName}
                temperature={state.currentCity.temperature} />
        );
    }
}

export default TemperatureDisplayerContainer;