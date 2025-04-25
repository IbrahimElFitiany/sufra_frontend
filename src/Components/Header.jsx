import React from 'react';

function Header() {
  return (
    <header className="w-[80%] border-b-1 border-[#B68D67] px-6 py-4 text-white flex items-center justify-between ">
        {/* Logo */}
        <div className="flex justify-center items-center w-28 pl-2">
            <img src="/Sufrá.png" alt="" />
        </div>

        {/* Search */}
        <div className="flex-1 mx-6 border border-[#B68D67] rounded-3xl">
             <input type="text" placeholder="Search restaurants..." className="w-full max-w-md px-4 py-2 rounded-3xl text-[#B68D67] placeholder-[#B68D67] bg-transparent focus:outline-none"/>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4 font-[caughe] text-l">
            <button className="rounded-4xl bg-transparent border text-[#A07E5D] border-[#B68D67] px-4 py-2 rounded hover:bg-[#B68D67] hover:text-[white] transition">
            Login
            </button>
            <button className=" rounded-4xl bg-[#B68D67] border-1 border-[#B68D67] px-4 py-2 rounded hover:bg-transparent transition">
            Register
            </button>
        </div>
    </header>
  );
}

export default Header;
