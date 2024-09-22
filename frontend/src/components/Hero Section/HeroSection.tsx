import { useState } from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[url(/assets/7.webp)] bg-no-repeat bg-center bg-cover">
        <div className="Hero-section h-full container flex-col flex items-center justify-center mx-auto px-12 text-white leading-tight">
          <p className="uppercase">Discover Your Next</p>
          <h1 className="text-[150px] font-extrabold uppercase ">
            Perfect Stay
          </h1>
          <p className="w-[700px] text-center leading-loose">
            Experience comfort and convenience with our expertly curated hostel
            listings, designed to match students with their perfect living
            space.
          </p>
        </div>
        <div className="search absolute top-[550px] shadow-2xl box mx-72 px-8 grid items-center justify-center grid-cols-4 gap-x-12 bg-white rounded-2xl h-24 text-black font-medium">
          <div className="">
            <h2>Location</h2>
            <input
              className="outline-none py-1 rounded-md text-gray-500 font-medium"
              type="text"
              placeholder="Mitrapark, Chabahill"
            />
          </div>
          <div>
            <h2>Price Range</h2>
            <select
              className="outline-none text-gray-400"
              name="gender"
              id="gender"
            >
              <option
                className="text-gray-300 outline-none"
                value=""
                disabled
                selected
                hidden
              >
                Choose Price
              </option>
              <option>5000-10000</option>
              <option>10000-15000</option>
              <option>15000-20000</option>
              <option>20000-25000</option>
              <option>25000-Above</option>
            </select>
          </div>
          <div>
            <h2>Gender</h2>
            <select
              className="outline-none text-gray-400"
              name="gender"
              id="gender"
            >
              <option
                className="text-gray-300 outline-none"
                disabled
                selected
                hidden
              >
                Choose Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <button className="w-full text-[--third-text-color] bg-[--btn-primary] py-5 rounded-xl font-semibold text-white hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
              Search
            </button>
          </div>
        </div>
        <div className=" chatbot-part fixed right-0 bottom-0">
          <div className="absolute bg-[--primary-color] h-20 w-20 rounded-full -z-10 animate-ping"></div>
          <div className="chatbot-icon" onClick={triggerIsOpen}>
            <Link to={"/"}>
              <img
                className=" h-20 mr-4 mb-4"
                src="/assets/chatbot-icon.png"
                alt="chatbot icon"
              />
            </Link>
          </div>
          {isOpen && (
            <div
              data-aos={"fade-left"}
              data-aos-duration="100"
              className="chatbot-message absolute bottom-24 z-50 h-96 w-72 right-0 bg-white shadow-2xl rounded-l-lg"
            ></div>
          )}
        </div>
      </div>
    </>
  );
};
