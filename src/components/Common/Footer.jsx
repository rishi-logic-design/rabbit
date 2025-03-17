import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">Be the first to hear about new products, exclusive events, and special online offers.</p>
          <p>Sign up and get 10% off your first Order.</p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-2 w-full"
            />
            <button className="bg-black text-white px-4">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
