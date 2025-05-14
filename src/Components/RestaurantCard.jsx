import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ id , name, location, cuisine, rating, image }) => {
    const reservationSlots = getNextThreeTimeSlots();

    return (
        <Link to={`/restaurant/${id}`} className="no-underline text-inherit">

            <div className="w-[355px] h-[435px] flex flex-col items-center bg-[#142A29] shadow-lg rounded-md my-4 mx-2">
                {/* el image 3ady */}
                <img 
                    src={image} 
                    alt={`${name}`} 
                    className="h-[60%] w-full object-cover rounded-t-lg" 
                />
                {/* el card details */}
                <div id="restaurant-card__details" className="px-4 py-1 w-full">
                    <h2 className="font-[Rohesta] text-[#B68D67] text-4xl truncate" title={`${name}`}>{name}</h2>
                    <h1 className="text-[#A1A1A1] font-medium truncate">{location}</h1>

                    <div id="Cuisine & Rating" className="flex justify-between text-[#B68D67] font-[InterMed] text-md mt-2">
                        <div className="flex items-center gap-x-1">
                            <StarRatings
                                rating={rating}
                                starRatedColor="#F0A252"
                                starEmptyColor="#838383"
                                numberOfStars={5}
                                starDimension="24px"
                                starSpacing="2px"
                            />
                        </div>
                        <div className="flex items-baseline gap-x-1">
                            <img src="/cuisine1.png" alt={`${name}`} className="size-4 transform scale-x-[-1]" />
                            <p>{cuisine}</p>
                        </div>
                    </div>

                    <div id="Reservations" className="flex justify-between gap-x-3.5 text-white">
                        {reservationSlots.map((slot, idx) => (
                            <button
                                key={idx}
                                className="h-[38px] w-[100px] bg-[#B68D67] rounded-md mt-4 p-1 font-[InterMed] text-lg cursor-pointer 
                                    transition-colors duration-300 hover:bg-[#d4a678]"
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

const getNextThreeTimeSlots = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes > 0 && minutes <= 30) {
    minutes = 30;
  } else if (minutes > 30) {
    minutes = 0;
    hours += 1;
  }

  const slots = [];
  for (let i = 0; i < 3; i++) {
    const slot = new Date(now);
    slot.setHours(hours);
    slot.setMinutes(minutes + i * 30);
    slots.push(slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
  }

  return slots;
};
export default RestaurantCard;
