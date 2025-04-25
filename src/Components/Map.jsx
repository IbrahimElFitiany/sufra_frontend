import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function Map({ setLocation }) {
  // Handle map click to set location
  function MapClickHandler() {
    const map = useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setLocation({ lat, lng });
        map.setView([lat, lng], 15);
      },
    });
    return null;
  }

  // Add GeoSearch control to map
  function SearchControl() {
    const map = useMap(); // We can safely use this to get the map instance

    useEffect(() => {
      const provider = new OpenStreetMapProvider();

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

  return (
    <div className="w-full h-60 mb-1" style={{ borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer center={{ lat: 30.0444, lng: 31.2357 }} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <SearchControl />
        <MapClickHandler />
        <Marker position={{ lat: 30.0444, lng: 31.2357 }}>
          <Popup>
            Latitude: 30.0444, Longitude: 31.2357
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
