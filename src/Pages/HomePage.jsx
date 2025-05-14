import React from 'react';
import RestaurantCard from '@components/RestaurantCard';
import MainLayout from '@layouts/MainLayout';
import CuisineSlider from '@components/CuisineSlider'; // Import the new component

function HomePage() {

    return (
        <MainLayout>
            <div id="landing-page-banner" className="w-[80%] mt-15 mb-9">
                <img src="/banner.png" alt="" />
            </div>

            <div id="sufraPicks" className="w-[80%] flex flex-col rounded-lg bg-[#061C1A]">
                <h1 className="m-5 text-6xl font-[Greethen] text-[#B68D67]">Sufra Picks</h1>
                <div id="restaurantCards_Container" className="rounded-lg bg-[#061C1A] flex justify-around">
                    <RestaurantCard
                        name="Pizzini"
                        location={"First New Cairo, Cairo"}
                        cuisine="Lebanese"
                        rating={5}
                        image="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                    />
                    <RestaurantCard
                        name="Mori Sushi Cfc"
                        location={"9 Palestine Street,New Maadi"}
                        cuisine="Japanese"
                        rating={1.5}
                        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/63/55/ee/indulge-your-cravings.jpg?w=600&h=-1&s=1"
                    />
                    <RestaurantCard
                        name=" Zeeyara Restaurant"
                        location={"114 Al-MuizLiDinAllah,Cairo"}
                        cuisine="Egyptian"
                        rating={4.1}
                        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ea/23/5d/zeeyara-terrace.jpg?w=1000&h=-1&s=1"
                    />
                    <RestaurantCard
                        name="La Zisa"
                        location={"9 Palestine Street,New Maadi"}
                        cuisine="Italian"
                        rating={2.5}
                        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/68/7d/la-zisa.jpg?w=1000&h=-1&s=1"
                    />
                </div>
            </div>
            <CuisineSlider />
        </MainLayout>
    );
}

export default HomePage;
