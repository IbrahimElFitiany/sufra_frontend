import React, { useState, useEffect } from 'react';
import MainLayout from '@layouts/MainLayout';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function RestaurantRegistration() {
  const [location, setLocation] = useState({ lat: 30.0444, lng: 31.2357 });
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    name: '',
    phone: '',
    cuisineId: 1,
    imgUrl: '',
    description: '',
    address: '',
    districtId: 1,
  });

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

  function SearchControl({ setLocation }) {
    const map = useMap();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      restaurantManager: {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
      },
      restaurant: {
        imgUrl: formData.imgUrl,
        name: formData.name,
        phone: formData.phone,
        cuisineId: Number(formData.cuisineId),
        description: formData.description,
        latitude: location.lat,
        longitude: location.lng,
        address: formData.address,
        districtId: Number(formData.districtId),
        status: false
      }
    };

    try {
      const response = await fetch("http://localhost:5272/api/Restaurant/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log("Server Response:", data);
      alert("Registration Successful!");

    } catch (err) {
      console.error("Error registering restaurant:", err);
      alert("Registration Failed!");
    }
  };

  return (
    <MainLayout>
      <h1 className='text-[#B68D67] font-[Greethen] text-6xl mt-8'>join Sufrá Today</h1>
      <div className="flex flex-col items-center m-6 rounded-2xl p-6 gap-y-5 bg-[#061C1A] w-[40%]">
        <h1 className="text-[#BCBCBC] text-xs">
          A member of our team will reach out shortly to discuss your needs and if you’d like, give you a platform demo
        </h1>

        <div className="w-full p-5 pt-9 rounded-xl border-1 border-[#B68D67]">
          <form onSubmit={handleSubmit} className="flex flex-col text-[#B68D67] font-[Inter]">
            <label className='mx-1 mb-1'>First Name:</label>
            <input name="fname" onChange={handleChange} value={formData.fname} type="text" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Last Name:</label>
            <input name="lname" onChange={handleChange} value={formData.lname} type="text" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Email:</label>
            <input name="email" onChange={handleChange} value={formData.email} type="email" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Password:</label>
            <input name="password" onChange={handleChange} value={formData.password} type="password" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Restaurant Name:</label>
            <input name="name" onChange={handleChange} value={formData.name} type="text" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Restaurant Phone:</label>
            <input name="phone" onChange={handleChange} value={formData.phone} type="text" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Restaurant Address:</label>
            <input name="address" onChange={handleChange} value={formData.address} type="text" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Cuisine:</label>
            <select name="cuisineId" onChange={handleChange} value={formData.cuisineId} className="border border-[#B68D67] rounded-lg p-2 mb-4" required>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>

            <label className='mx-1 mb-1'>Restaurant Img For test:</label>
            <input name="imgUrl" onChange={handleChange} value={formData.imgUrl} type="text" className="border border-[#B68D67] rounded-lg p-2 mb-4" required />

            <label className='mx-1 mb-1'>Description:</label>
            <textarea name="description" onChange={handleChange} value={formData.description} className="h-44 border border-[#B68D67] rounded-lg p-2 mb-4 text-sm" required />
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full h-60 mb-1" style={{ borderRadius: '8px', overflow: 'hidden' }}>
          <MapContainer center={location} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <SearchControl setLocation={setLocation} />
            <MapClickHandler />
            <Marker position={location}>
              <Popup>
                Latitude: {location.lat.toFixed(4)}, Longitude: {location.lng.toFixed(4)}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div>
          <button type="submit" onClick={handleSubmit} className="py-2 px-3.5 font-[Rohesta] bg-[#B68D67] text-white text-lg rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default RestaurantRegistration;
