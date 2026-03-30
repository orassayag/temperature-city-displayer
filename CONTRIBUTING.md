# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/temperature-city-displayer/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Browser and Node version
   - Screenshots (if applicable)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **React.js** with class components
- **ESLint** for code quality
- **PropTypes** for component validation
- **LESS** for styling

Before submitting:
```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Test the application
npm start

# Build for production
npm build
```

### Coding Standards

1. **Component structure**: Use functional components for presentational components, class components for containers
2. **PropTypes**: All components must define PropTypes and defaultProps
3. **API calls**: Place all API logic in `src/api/routes/`
4. **Utilities**: Shared logic goes in `src/utils/`
5. **Styling**: Use LESS files co-located with components
6. **No inline styles**: Keep all styles in LESS files

### Adding New Features

When adding new features:
1. Create appropriate components in `src/components/`
2. Add container logic in `src/containers/`
3. Update API routes in `src/api/routes/` if needed
4. Add utility functions in `src/utils/`
5. Update styling in corresponding LESS files
6. Test thoroughly in different browsers

### Adding New Cities

To add cities to the temperature display:
1. Open `src/utils/textUtils.js`
2. Add city names to the array in `getCitiesArray()` function
3. Ensure city names match OpenWeatherMap API format

### API Key Management

When working with the OpenWeatherMap API:
1. Never commit real API keys to the repository
2. Use environment variables for production
3. Update settings files in `src/settings/` for different environments

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
