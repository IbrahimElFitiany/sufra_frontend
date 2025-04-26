import React, { useState } from 'react';

function Menu({ menus }) {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col items-center mt-10 w-[80%] h-auto mb-7 rounded-s bg-[#061C1A] p-3 text-[#B68D67]">

      {/* Title */}
      <div className="w-full">
        <div className="my-5 flex items-center justify-center space-x-4 w-full">
          <div className="flex-1 border-t border-[#B68D67]"></div>
          <h1 className="text-5xl font-[Rohesta] whitespace-nowrap px-4">MENU</h1>
          <div className="flex-1 border-t border-[#B68D67]"></div>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center w-[70%] mx-6 border border-[#B68D67] rounded-lg px-4">
        <img src="/search.png" className='size-4' alt="search" />
        <input 
          type="text" 
          placeholder="Search menu for a particular dish..." 
          className="font-[Inter] w-full px-3 py-2 rounded-xl text-[#B68D67] placeholder-[#B68D67] bg-transparent focus:outline-none"
        />
      </div>

      {/* Menu Sections and Items */}
      <div className="flex w-[90%] my-6 p-1.5 gap-x-1">

        {/* Menu Sections */}
        <div id='MenuSectionsContainer' className="w-[20%] flex flex-col shrink-1 gap-y-2.5 p-3">
          {menus.map((section, index) => (
            <button 
              key={index}
              onClick={() => toggleSection(index)} 
              className='flex justify-center w-full p-2 rounded-md bg-[#1E2928] font-[Rohesta] text-2xl hover:bg-[#273734] transition'
            >
              {section.menuSectionName}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-y-3 grow-1 w-[70%] p-3">
          {menus.map((section, index) => (
            <div 
              key={index} 
              id="menuSection" 
              className='flex flex-col gap-y-6 rounded-lg bg-[#1E2928] py-2 px-3 w-full'
            >
              {/* Section Title (non-clickable here) */}
              <h1 className='font-[Rohesta] text-3xl p-1 mb-3'>{section.menuSectionName}</h1>

              {/* Items (conditionally rendered) */}
              {openSections.includes(index) && section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  id='Item' 
                  className='bg-[#061C1A] rounded-lg border-1 border-[#7D684F] flex justify-between gap-x-3 p-3'
                >
                  <img id='ItemImage' src={item.menuItemImg} className='size-36 aspect-square rounded-lg object-cover' alt={item.name} />
                  <div id="ItemDetails" className='grow flex flex-col gap-y-2'>
                    <h1 className='w-[70%] font-[Rohesta] text-3xl'>{item.name}</h1>
                    <h1 className='w-[75%] font-[Inter] text-[#BCBCBC] text-sm'>{item.description}</h1>
                  </div>
                  <div id="price_n_Add" className='flex flex-col justify-between items-center w-[15%]'>
                    <div id="price" className='font-[Inter] text-l'>EGP {item.price}</div>
                    <div className='m-1 flex justify-center items-center bg-[#B68D67] w-8 h-8 rounded-full border-1 border-transparent hover:bg-transparent hover:border-[#B68D67] hover:text-[#B68D67] transition-all duration-300'>
                      <button className='font-serif text-white font-bold text-2xl'>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
