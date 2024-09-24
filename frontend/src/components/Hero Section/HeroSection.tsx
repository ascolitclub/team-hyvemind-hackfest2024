import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchCard {
  id?: number; // Optional in case you want to use it later
  location: string;
  priceRange: string;
  faculty: string;
}

export const HeroSection = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [showDiv, setShowDiv] = useState("search1"); // Set default to "search1"

  // State to store search inputs
  const [searchData, setSearchData] = useState<SearchCard>({
    location: "",
    priceRange: "",
    faculty: "",
  });

  // const triggerIsOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  // Handle form changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearchBY = () => {
    // Navigate to the SearchBY page, passing the searchData in the state
    navigate("/searchby", { state: { searchData } });
  };

  // Function to handle button clicks for toggling between search options
  const handleSearchClick = (searchType: string) => {
    setShowDiv(searchType);
  };

  return (
    <>
      <div className="h-[100vh] w-full flex items-center flex-col justify-center overflow-hidden bg-[url(/assets/7.webp)] bg-no-repeat bg-center bg-cover relative">
        <div className="bg-black/35 absolute h-full w-full"></div>
        <div className="Hero-section mt-12 h-full container flex-col flex items-center justify-center mx-auto px-12 text-white leading-none z-10">
          <p className="uppercase text-lg tracking-widest">
            Discover Your Next
          </p>
          <h1
            className="text-[150px] font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "Oswald" }}
          >
            Perfect Stay
          </h1>
          <p className="w-[700px] text-center leading-loose pb-16">
            Experience comfort and convenience with our expertly curated hostel
            listings, designed to match students with their perfect living
            space.
          </p>

          {/* Search 1 and Search 2 buttons */}
          <div className="flex space-x-4">
            <div
              className={`text-lg font-medium cursor-pointer ${
                showDiv === "search1"
                  ? "text-[--primary-color] border-b-2 border-b-[--primary-color]"
                  : "text-white"
              }`}
              onClick={() => handleSearchClick("search1")}
            >
              <h3>By Preference</h3>
            </div>
            <div
              className={`text-lg font-medium cursor-pointer ${
                showDiv === "search2"
                  ? "text-[--primary-color] border-b-2 border-b-[--primary-color]"
                  : "text-white"
              }`}
              onClick={() => handleSearchClick("search2")}
            >
              <h3>By Nearby</h3>
            </div>
          </div>

          {/* Render additional divs based on the search button clicked */}
          {showDiv === "search1" && (
            <div className="text-white">
              {/* The Search box div */}
              <div className="search shadow-2xl z-20 w-[900px] box mx-72 px-4 grid items-center justify-center grid-cols-4 gap-x-12 bg-white rounded-2xl h-24 text-black font-medium mt-4">
                <div className="flex flex-col">
                  <h2 className="mb-1">Location</h2>
                  <input
                    className="outline-none py-1 rounded-md text-gray-500 font-medium"
                    type="text"
                    placeholder="Mitrapark, Chabahill"
                    name="location"
                    value={searchData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Price Range</h2>
                  <select
                    className="outline-none text-gray-400"
                    name="priceRange"
                    value={searchData.priceRange}
                    onChange={handleInputChange}
                  >
                    <option
                      className="text-gray-300 outline-none"
                      value=""
                      disabled
                      hidden
                    >
                      Choose Price
                    </option>
                    <option value="5000-10000">5000-10000</option>
                    <option value="10000-15000">10000-15000</option>
                    <option value="15000-20000">15000-20000</option>
                    <option value="20000-25000">20000-25000</option>
                    <option value="25000-Above">25000-Above</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Faculty</h2>
                  <select
                    className="outline-none text-gray-400"
                    name="faculty"
                    value={searchData.faculty}
                    onChange={handleInputChange}
                  >
                    <option
                      className="text-gray-300 outline-none"
                      disabled
                      hidden
                    >
                      Choose Faculty
                    </option>
                    <option value="IT">IT</option>
                    <option value="Medical">Medical</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Management">Management</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={handleSearchBY}
                    className="w-full text-2xl bg-[--btn-primary] py-4 rounded-xl font-medium text-white hover:bg-[--btn-secondary] transition-all active:translate-y-0.5"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
          {showDiv === "search2" && (
            <div className="text-white">
              {/* The Search 2 box div */}
              <div className="search shadow-2xl z-20 w-[900px] box mx-72 px-4 grid items-center justify-center grid-cols-3 gap-x-12 bg-white rounded-2xl h-24 text-black font-medium mt-4">
                <div className="flex flex-col">
                  <h2 className="mb-1">Location</h2>
                  <input
                    className="outline-none py-1 rounded-md text-gray-500 font-medium"
                    type="text"
                    placeholder="Mitrapark, Chabahill"
                    name="location"
                    value={searchData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Faculty</h2>
                  <select
                    className="outline-none text-gray-400"
                    name="faculty"
                    value={searchData.faculty}
                    onChange={handleInputChange}
                  >
                    <option
                      className="text-gray-300 outline-none"
                      disabled
                      hidden
                    >
                      Choose Faculty
                    </option>
                    <option value="IT">IT</option>
                    <option value="Medical">Medical</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Management">Management</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={handleSearchBY}
                    className="w-full text-2xl bg-[--btn-primary] py-4 rounded-xl font-medium text-white hover:bg-[--btn-secondary] transition-all active:translate-y-0.5"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <div className="chatbot-part fixed right-0 bottom-0 z-30">
          <div className="absolute bg-[--primary-color] h-20 w-20 rounded-full -z-10 animate-ping"></div>
          <div
            className="chatbot-icon cursor-pointer z-30"
            onClick={triggerIsOpen}
          >
            <img
              className="h-20 mr-4 mb-4"
              src="/assets/chatbot-icon.png"
              alt="chatbot icon"
            />
          </div>
          {isOpen && (
            <div
              data-aos={"fade-left"}
              data-aos-duration="100"
              className="chatbot-message absolute bottom-24 z-40 h-96 w-max right-0 bg-white shadow-2xl rounded-l-lg"
            >
              <iframe
                style={{ borderRadius: "7px 0" }}
                width="350"
                height="380"
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/fe6de2a4-52e7-4e5e-9256-0e40eb65f87c"
              ></iframe>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};
