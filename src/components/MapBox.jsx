import { london } from '@/data/london';
import { getCenter } from 'geolib';
import { useState } from 'react';
import Map from 'react-map-gl';
const MapBox = () => {
  const coord = london.map(res => ({ long: res.long, lat: res.lat }));
  console.log(coord);
  const center = getCenter(coord);
  console.log(center);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    lat: center.lat,
    long: center.long,
    zoom: 11,
  });
  return (
    <Map
      mapStyle="mapbox://styles/mcrntree/clp30868k00zf01nthn4j4pcn"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={e => setViewport(e.viewState)}
    ></Map>
  );
};

export default MapBox;
