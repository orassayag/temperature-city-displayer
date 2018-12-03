class City {
    constructor(cityName) {
        this.cityName = cityName;
        this.temperature = null;
    }
}

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getCelsiusFromKelvin = (tempKelvin) => {
    return Math.floor(tempKelvin - 273.15);
};

export const getCitiesArray = () => {
    return ['Singapore', 'Bangkok', 'London', 'Macau',
        'Shenzhen', 'Antalya', 'Paris', 'Istanbul', 'Rome', 'Dubai',
        'Guangzhou', 'Phuket', 'Mecca', 'Pattaya', 'Prague', 'Shanghai',
        'Miami', 'Barcelona', 'Moscow', 'Beijing', 'Budapest', 'Vienna',
        'Amsterdam', 'Sofia', 'Madrid', 'Orlando', 'Lima', 'Berlin', 'Tokyo', 'Warsaw',
        'Chennai', 'Cairo', 'Nairobi', 'Hangzhou', 'Milan', 'Venice', 'Dublin', 'Seoul',
        'Mugla', 'Mumbai', 'Denpasar', 'Delhi', 'Toronto',
        'Zhuhai', 'Burgas', 'Sydney', 'Djerba', 'Munich', 'Johannesburg',
        'Cancun', 'Edirne', 'Suzhou', 'Bucharest', 'Agra', 'Jaipur',
        'Brussels', 'Nice', 'Lisbon', 'Marrakech', 'Jakarta', 'Manama',
        'Hanoi', 'Honolulu', 'Manila', 'Guilin', 'Auckland', 'Sousse',
        'Amman', 'Vancouver', 'Kiev', 'Doha', 'Florence',
        'Melbourne', 'Washington', 'Riyadh', 'Christchurch', 'Frankfurt',
        'Harare', 'Kolkata', 'Nanjing'
    ].map(cityName => {
        return new City(cityName);
    });
};