import React from 'react';
import BookATable from './BookATable'; // Make sure the path is correct

function RestaurantBannerCard({ restaurant }) {
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
          <div id="Basic Info" className="font-[rohesta]">
            <h1 className="text-5xl">{restaurant.name}</h1>
            <p className="text-xl text-[#BCBCBC]">{restaurant.address}</p>
          </div>

          <div id="Details" className="w-full text-xs flex flex-col gap-y-8 mt-10 font-[Inter]">
            <div>
              <h3 className="font-[#E5C7AA]">About this Restaurant:</h3>
              <p className="text-[#BCBCBC] max-w-lg">{restaurant.description}</p>
            </div>

            <div id="detailsAktridk" className="flex gap-x-11 font-bold">
              <div className="flex justify-center items-end gap-x-1">
                <img src="/cuisine.png" className="size-5" alt="" />
                <h1>{capitalize(restaurant.cuisine)}</h1>
              </div>

              <div className="flex justify-center items-end gap-x-1">
                <img src="/phone.png" className="size-5" alt="" />
                <h1>{restaurant.phone}</h1>
              </div>

              <div className="flex justify-center items-end gap-x-1">
                <img src="/location.png" className="size-5" alt="" />
                <h1>{restaurant.district}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation Component */}
        <BookATable />
      </div>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default RestaurantBannerCard;
