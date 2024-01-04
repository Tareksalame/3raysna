import React, { useContext, useState } from 'react';
import userContext from '../userContext';
import { useNavigate } from 'react-router-dom';

const LocationGetter = () => {
    const{location, setLocation,setTakeAwayOrShipping,setDistance} = useContext(userContext)
    const nav = useNavigate()

    const [restaurantLocation, setRestaurantLocation] = useState({
        latitude: 40.7128, // Replace with the actual latitude of the restaurant
        longitude: -74.0060, // Replace with the actual longitude of the restaurant
      });


    const calculateDistance = () => {
        if (location && restaurantLocation) {
          const R = 6371; // Radius of the Earth in kilometers
          const lat1 = location.latitude;
          const lon1 = location.longitude;
          const lat2 = restaurantLocation.latitude;
          const lon2 = restaurantLocation.longitude;
    
          const dLat = toRadians(lat2 - lat1);
          const dLon = toRadians(lon2 - lon1);
    
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
          setDistance(R * c); // Distance in kilometers
    
        }
      };
    
      const toRadians = (angle) => {
        return (angle * Math.PI) / 180;
      };







  const handleGetLocation = () => {
    alert('الرجاء الموافقة على استخدام موقعك لاغراض التوصيل')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({latitude, longitude });
          setTakeAwayOrShipping('shipping')
            nav('/Menu')
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
    <div style={{marginTop:'5%'}}>
      <button onClick={handleGetLocation}>بدي توصيل للبيت</button>


      {/* {location && ( */}
         {/* <div> */}
          {/* <p>Latitude:  {location.latitude}</p> */}
          {/* <p>Longitude: {location.longitude}</p> */}

          {/* <p>takeAwayOrShipping: {takeAwayOrShipping}</p> */}

          {/* <button onClick={openInGoogleMaps}>Open in Google Maps</button> */}
          {/* <button onClick={openInWaze}>Open in Waze</button> */}
         {/* </div> */}
       {/* )} */}
    </div>
  );
};

export default LocationGetter;