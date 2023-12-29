import React, { useContext, useState } from 'react';
import userContext from '../userContext';

const LocationGetter = () => {
    const{location, setLocation} = useContext(userContext)

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  const openInGoogleMaps = () => {
    if (location) {
      const url = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
      window.open(url, '_blank');
    }
  };

  const openInWaze = () => {
    if (location) {
      const url = `https://waze.com/ul?ll=${location.latitude},${location.longitude}&navigate=yes`;
      window.open(url, '_blank');
    }
  };

  return (
    <div>
      <button onClick={handleGetLocation}>Get My Location</button>
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <button onClick={openInGoogleMaps}>Open in Google Maps</button>
          <button onClick={openInWaze}>Open in Waze</button>
        </div>
      )}
    </div>
  );
};

export default LocationGetter;