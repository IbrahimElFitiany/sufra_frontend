import React from 'react';

function Footer() {
  return (
    <footer className="w-[80%] mx-auto bg-transparent text-white py-12 px-4">
      {/* Divider & Logo */}
      <div className="flex items-center justify-center space-x-4 mb-10">
        <div className="flex-1 border-t border-[#B68D67]"></div>
        <img className="w-24" src="/Sufrá.png" alt="Sufra Logo" />
        <div className="flex-1 border-t border-[#B68D67]"></div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-evenly text-sm font-[Rohesta] mb-10 borderb-1 [#B68D67]">
        <a href="#">ABOUT US</a>
        <a href="#">TERMS OF SERVICE</a>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">JOIN US ON</a>

      </div>


      {/* Footer Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-300 mb-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>📍 123 Culture St, Cairo, Egypt</p>
          <p>📞 +20 1150391406</p>
          <p>📧 support@sufra.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">About Sufrá</h3>
          <p className="text-gray-400">
            Sufrá is your gateway to a cultural dining experience.
            We celebrate food, tradition, and community.
          </p>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t border-[#B68D67] pt-4 text-center text-sm text-gray-400">
             © {new Date().getFullYear()} <span className=" text-gray-400">Sufrá</span>. All rights reserved.
            <br className="md:hidden" />
            <span className="block md:inline"> Developed by <span className="text-[#B68D67] font-medium">Ibrahim Taha</span>.</span>
        </div>
    </footer>
  );
}

export default Footer;
