import React from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';

const Map = () => {
    // Viewport settings
    const INITIAL_VIEW_STATE = {
        longitude: -122.51669,
        latitude: 47.5853,
        zoom: 8,
        pitch: 0,
        bearing: 0,
    };

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={[]}
        >
            <StaticMap
                mapStyle={
                    'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
                }
            ></StaticMap>
        </DeckGL>
    );
};

export default Map;
