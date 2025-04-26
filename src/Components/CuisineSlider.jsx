import React, { useState } from 'react';

const CuisineSlider = () => {
    const slides = [
        {
            title: "Italian Cuisine",
            image: "/ItalianCuisine.png",
        },
        {
            title: "Mexican Cuisine",
            image: "/MexicanCuisine.png",
        },
        {
            title: "Japanese Cuisine",
            image: "/JapaneseCuisine.png",
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div id="CuisineBanner" className="w-full flex my-10 justify-center gap-x-10 items-center relative">
            {/* Left arrow */}
            <div
                className="size-6 bg-[#B68D67] rotate-45 cursor-pointer transition-colors duration-300 hover:bg-[#DBB28C]"
                onClick={prevSlide}
            ></div>

            {/* Outer container with padding */}
            <div className="py-12 w-[80%]  border-[#B68D67] border-y-1">
                {/* Inner container for image and overlay */}
                <div className="relative flex justify-center items-center h-[350px]">
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.49)] rounded-lg"></div>

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex justify-center items-center rounded-lg">
                        <h2 className="text-[#DBB28C] text-8xl font-[Greethen]">{slides[currentSlide].title}</h2>
                    </div>

                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    
                    {/* Slide indicator bar */}
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`w-17 h-2 transition-all duration-300
                                    ${index === currentSlide ? 'bg-[#DBB28C]' : 'bg-[#9b6d3e]'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right arrow */}
            <div
                className="size-6 bg-[#B68D67] rotate-45 cursor-pointer transition-colors duration-300 hover:bg-[#DBB28C]"
                onClick={nextSlide}
            ></div>
        </div>
    );
};

export default CuisineSlider;