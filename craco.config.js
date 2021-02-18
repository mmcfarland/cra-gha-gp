module.exports = {
    webpack: {
        configure: webpackConfig => {
            // Alias maplibre to mapbox-gl
            webpackConfig.resolve.alias['mapbox-gl'] = 'maplibre-gl';
            return webpackConfig;
        },
    },
};
