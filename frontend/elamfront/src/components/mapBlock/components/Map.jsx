import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { coordinates } from "../../../store";

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: 43.244394,
  lng: 76.888000,
};

const adaptCoordinates = (coordinates) => {
  return coordinates.map((coordinate, index) => ({
    key: index,
    position: coordinate,
  }));
};

const Map = () => {
  const [coordinatesHook, setCoordinatesHook] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    setCoordinatesHook(coordinates);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBrj-SUGKWx-O9g1zG3XMcZUhLAIw_JisM',
    libraries,
  });

  const handleMarkerClick = (coordinate) => {
    setSelectedMarker(coordinate);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
        {adaptCoordinates(coordinatesHook).map(({ key, position }) => (
          <MarkerF
            key={key}
            position={position}
            onClick={() => handleMarkerClick(position)}
            title='Marker'
          >
            {selectedMarker === position && (
              <InfoWindowF onCloseClick={handleInfoWindowClose}>
                <div style={{color: "black"}}>
                  <h3>Location Details</h3>
                  <p>Latitude: {position.lat}</p>
                  <p>Longitude: {position.lng}</p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
