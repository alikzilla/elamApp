import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
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

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
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
        {coordinatesHook.map((coordinate, index) => (
          <MarkerF
            key={index}
            position={coordinate}
            onClick={() => handleMarkerClick(coordinate)}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;