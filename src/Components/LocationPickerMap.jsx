// components/LocationPickerMap.jsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';


function MapClickHandler({ setLocation }) {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setLocation({ lat, lng });
    },
  });
  return null;
}
function SearchControl({ setLocation }) {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: {
        viewbox: '24.696,31.667,36.866,21.999',
        bounded: 4
      }
    });

    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: false,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: true,
    });

    map.addControl(searchControl);

    map.on('geosearch/showlocation', function (result) {
      const lat = result.location.y;
      const lng = result.location.x;
      setLocation({ lat, lng });
      map.setView([lat, lng], 15);
    });

    return () => map.removeControl(searchControl);
  }, [map, setLocation]);

  return null;
}

const LocationPickerMap = ({ location, setLocation }) => {
  return (
        <MapContainer center={location} zoom={13} style={{ height: '100%', width: '100%' }} maxBounds={[[21.999, 24.696], [31.667, 36.866]]} maxBoundsViscosity={1.0}>      
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'/>
        <SearchControl setLocation={setLocation} />
        <MapClickHandler setLocation={setLocation} />
        <Marker position={location}>
        <Popup>
            Latitude: {location.lat.toFixed(4)}, Longitude: {location.lng.toFixed(4)}
        </Popup>
        </Marker>
    </MapContainer>
  );
};

export default LocationPickerMap;
