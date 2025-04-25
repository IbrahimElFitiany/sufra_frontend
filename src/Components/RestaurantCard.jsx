import React, { useState, useEffect } from 'react';

function RestaurantCard({restaurant}) {

    if (restaurant === null) {
      return <div>Loading...</div>; 
    }
    
    if (!restaurant || Object.keys(restaurant).length === 0) {
      return <div className="text-center text-red-500 mt-10">Restaurant not found.</div>;
    }



  return (
    <div className="mt-10 w-[80%] h rounded-s overflow-hidden bg-[#061C1A] p-3 text-[#B68D67]">
      {/* Image */}
      <div className="h-[350px] w-full">
        <img
          src={restaurant.imgUrl}
          alt="Restaurant"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Restaurant Info & Reservation */}
      <div className="flex justify-between pb-1 border-b-1">
        {/* Restaurant Info */}
        <div className="flex flex-col justify-between items-start p-4">

          {/* Basic Info */}
          <div id='Basic Info' className="font-[rohesta]">
            <h1 className="text-5xl">{restaurant.name}</h1> {/* Dynamic Name */}
            <p className="text-xl text-[#BCBCBC]">{restaurant.address}</p> {/* Dynamic Address */}
          </div>

          {/* Details */}
          <div id='Details' className="w-full text-xs flex flex-col gap-y-8 mt-10 font-[Inter]">
            <div id="details">
              <h3 className="font-[#E5C7AA]">About this Restaurant:</h3>
              <p className="text-[#BCBCBC] max-w-lg">{restaurant.description}</p>
            </div>

            {/* More Details */}
            <div id="detailsAktridk" className="flex gap-x-11 font-bold">

              <div id="Cuisine" className='flex justify-center items-end gap-x-1'>
                <img src="/cuisine.png" className='size-5' alt="" />
                <h1>{capitalize(restaurant.cuisine)}</h1> {/* Dynamic Cuisine ID */}
              </div>

              <div id="PhoneNum" className='flex justify-center items-end gap-x-1'>

                <img src="/phone.png" className='size-5' alt="" />
                <h1>{restaurant.phone}</h1> {/* Dynamic Phone Number */}
              </div>

              <div id="District" className="flex justify-center items-end gap-x-1">
                <img src="/location.png" className='size-5' alt="" />
                <h1 className=''>{`${restaurant.district}`}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation */}
        <div className="flex flex-col justify-center items-center bg-transparent border-1 h-[100%] w-sm border-[#B68D67] mt-4 px-4 py-2 rounded-lg">
          <div id="title" className="font-bold">
            BOOK A TABLE
          </div>

          <select id="dropdown" name="options" className="w-[100%] my-2 p-1 border-1 rounded-lg">
            <option value="profile">4 people</option>
            <option value="settings">5 people</option>
            <option value="logout">6 people</option>
          </select>

          <div className="flex w-[100%]">
            {/* Date Picker */}
            <input
              type="date"
              className="mr-1 w-full my-2 p-1 border rounded-lg bg-[#061C1A] text-[#B68D67] focus:outline-none"
            />

            {/* Time Picker */}
            <input
              type="time"
              className="ml-1 w-full my-2 p-1 border rounded-lg bg-[#061C1A] text-[#B68D67] focus:outline-none"
            />
          </div>

          <button className="my-2 w-[100%] h-8 bg-[#B68D67] text-[white] font-bold rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;






//function 34an a captalize
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}