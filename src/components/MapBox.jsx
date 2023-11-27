import { london } from '@/data/london';
import { getCenter } from 'geolib';
import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
const MapBox = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coord = london.map(res => ({
    longitude: res.longitude,
    latitude: res.latitude,
  }));
  // console.log(coord);
  const center = getCenter(coord);
  // console.log(center);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/mcrntree/clp30868k00zf01nthn4j4pcn"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={e => setViewport(e.viewState)}
    >
      {london.map(res => (
        <div key={res.longitude}>
          <Marker
            longitude={res.longitude}
            latitude={res.latitude}
            offSetLeft={-20}
            offSetTop={-10}
          >
            {' '}
            <p
              role="img"
              onClick={() => setSelectedLocation(res)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-orange-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </p>
          </Marker>

          {/* {selectedLocation.longitude === res.longitude ? (
            // <Popup
            //   onClose={() => setSelectedLocation({})}
            //   closeOnClick={true}
            //   latitude={res.latitude}
            //   longitude={res.longitude}
            // >
            //   {' '}
            //   {res.title}{' '}
            // </Popup>
          ) : (
            false
          )} */}
        </div>
      ))}
    </Map>
  );
};

export default MapBox;
