# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### API Configuration

1. Open `src/settings/settings.development.json` for development
2. Open `src/settings/settings.production.json` for production
3. Configure the OpenWeatherMap API:
   - `api_base_url`: Base URL with API key and city placeholder
   - Replace `#city#` placeholder with actual city name at runtime
   - Default API key is included (for demo purposes only)

**Important**: For production use, obtain your own API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys)

### City List Configuration

1. Open `src/utils/textUtils.js`
2. Modify the array in `getCitiesArray()` function
3. Add or remove city names as needed
4. City names must match OpenWeatherMap API format

### Display Timing

1. Open `src/containers/TemperatureDisplayerContainer/TemperatureDisplayerContainer.jsx`
2. Locate the `changeCityHandler()` method
3. Adjust the `setTimeout` value (default: 3000ms = 3 seconds)

## Running the Application

### Development Mode
Runs the app with hot-reloading:
```bash
npm start
```

The page will reload when you make changes. You'll see linting errors in the console.

### Production Build
Creates an optimized production build:
```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

### Running Tests
Launches the test runner:
```bash
npm test
```

## Project Structure

```
temperature-city-displayer/
├── public/                 # Static files
├── scripts/               # Build and start scripts
├── config/                # Webpack configuration
├── src/
│   ├── api/              # API integration
│   │   └── routes/       # API route handlers
│   ├── components/       # Presentational components
│   │   └── Temperature/  # Temperature display component
│   ├── containers/       # Container components with logic
│   │   ├── App/         # Main app container
│   │   └── TemperatureDisplayerContainer/
│   ├── hoc/             # Higher-order components
│   ├── settings/        # Environment-specific settings
│   ├── utils/           # Utility functions
│   ├── index.jsx        # Application entry point
│   └── index.less       # Global styles
└── package.json
```

## How It Works

### Data Flow

1. **Initialization**: `TemperatureDisplayerContainer` loads on mount
2. **City Selection**: Random city is selected from the list (avoiding consecutive repeats)
3. **Data Fetching**: 
   - Checks if temperature data is cached in state
   - If cached, displays immediately
   - If not cached, fetches from OpenWeatherMap API
4. **Display**: Shows city name and temperature with fade animation
5. **Cycling**: After 3 seconds, selects a new random city and repeats

### Component Hierarchy

```
App
└── TemperatureDisplayerContainer (logic & state)
    └── TemperatureDisplayer (presentation)
```

### API Integration

The application uses Axios to make HTTP requests to OpenWeatherMap API:
- Endpoint: `http://api.openweathermap.org/data/2.5/weather`
- Parameters: City name and API key
- Response: Weather data including temperature in Kelvin
- Conversion: Kelvin to Celsius (K - 273.15)

### Caching Strategy

Temperature data is cached in the component state after the first fetch:
- Reduces API calls
- Improves performance
- Maintains data across city cycling

## Styling

The application uses LESS for styling:
- **Global styles**: `src/index.less`
- **Component styles**: Co-located with components (e.g., `TemperatureDisplayer.less`)
- **Animations**: Fade-in and fade-out transitions for smooth city changes

## Browser Support

The application supports:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE is not supported (as per browserslist configuration)
- Mobile browsers

## Environment Detection

The application automatically detects the environment:
- Uses `process.env.NODE_ENV` to determine development vs production
- Loads appropriate settings file
- See `src/utils/coreUtils.js` for environment detection logic

## Troubleshooting

### API Errors
- Check if the API key is valid
- Verify city names match OpenWeatherMap format
- Check network connectivity
- Review browser console for error messages

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf build`
- Update dependencies: `npm update`

### Display Issues
- Check browser console for JavaScript errors
- Verify LESS compilation
- Test in different browsers
- Check component PropTypes warnings

## Deployment

### Build for Production
```bash
npm run build
```

The build folder contains optimized static files ready for deployment to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### Deployment Notes
- Ensure API key is properly configured for production
- Set appropriate CORS headers if needed
- Consider rate limiting for API calls
- Use environment variables for sensitive configuration

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
