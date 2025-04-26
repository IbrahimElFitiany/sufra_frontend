import React from 'react';
import StarRatings from 'react-star-ratings';

const RestaurantCard = ({ name, location, cuisine, rating, image }) => {
    return (
        <div className="w-[355px] h-[435px] flex flex-col items-center bg-[#142A29] shadow-lg rounded-md m-4">
            <img 
                src={image} 
                alt={`${name}`} 
                className="h-[60%] w-full object-cover rounded-t-lg" 
            />

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

                <div id="Avalible Reservation" className="flex justify-between gap-x-3.5 text-white">

                    <button className="h-[38px] w-[88px] bg-[#B68D67] rounded-md mt-4 font-[InterMed] text-lg cursor-pointer 
                        transition-colors duration-300 hover:bg-[#d4a678]">
                        12:00 PM
                    </button>

                    <button className="h-[38px] w-[88px] bg-[#B68D67] rounded-md mt-4 font-[InterMed] text-lg cursor-pointer 
                        transition-colors duration-300 hover:bg-[#d4a678]">
                        1:30 PM
                    </button>

                    <button className="h-[38px] w-[88px] bg-[#B68D67] rounded-md mt-4 font-[InterMed] text-lg cursor-pointer 
                        transition-colors duration-300 hover:bg-[#d4a678]">
                        5:45 PM
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
