// import { useState } from "react";

// export const HeroSection = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const triggerIsOpen = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <div className="h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[url(/assets/7.webp)] bg-no-repeat bg-center bg-cover">
//         <div className="Hero-section h-full container flex-col flex items-center justify-center mx-auto px-12 text-white leading-none">
//           <p className="uppercase text-lg tracking-widest">
//             Discover Your Next
//           </p>
//           <h1
//             className="text-[150px] font-extrabold uppercase tracking-wider"
//             style={{ fontFamily: "Oswald" }}
//           >
//             Perfect Stay
//           </h1>
//           <p className="w-[700px] text-center leading-loose">
//             Experience comfort and convenience with our expertly curated hostel
//             listings, designed to match students with their perfect living
//             space.
//           </p>
//         </div>
//         <div className="search absolute top-[550px] z-10 shadow-2xl box mx-72 px-8 grid items-center justify-center grid-cols-4 gap-x-12 bg-white rounded-2xl h-24 text-black font-medium">
//           <div className="">
//             <h2>Location</h2>
//             <input
//               className="outline-none py-1 rounded-md text-gray-500 font-medium"
//               type="text"
//               placeholder="Mitrapark, Chabahill"
//             />
//           </div>
//           <div>
//             <h2>Price Range</h2>
//             <select
//               className="outline-none text-gray-400"
//               name="gender"
//               id="gender"
//             >
//               <option
//                 className="text-gray-300 outline-none"
//                 value=""
//                 disabled
//                 selected
//                 hidden
//               >
//                 Choose Price
//               </option>
//               <option>5000-10000</option>
//               <option>10000-15000</option>
//               <option>15000-20000</option>
//               <option>20000-25000</option>
//               <option>25000-Above</option>
//             </select>
//           </div>
//           <div>
//             <h2>Gender</h2>
//             <select
//               className="outline-none text-gray-400"
//               name="gender"
//               id="gender"
//             >
//               <option
//                 className="text-gray-300 outline-none"
//                 disabled
//                 selected
//                 hidden
//               >
//                 Choose Gender
//               </option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <div>
//             <button className="w-full text-2xl bg-[--btn-primary] py-4 rounded-xl font-medium text-white hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
//               Search
//             </button>
//           </div>
//         </div>
//         <div className=" chatbot-part fixed right-0 bottom-0">
//           <div className="absolute bg-[--primary-color] h-20 w-20 rounded-full -z-10 animate-ping"></div>
//           <div className="chatbot-icon" onClick={triggerIsOpen}>
//             {/* <Link to={"/"}> */}
//             <img
//               className=" h-20 mr-4 mb-4"
//               src="/assets/chatbot-icon.png"
//               alt="chatbot icon"
//             />
//             {/* </Link> */}
//           </div>
//           {isOpen && (
//             <div
//               data-aos={"fade-left"}
//               data-aos-duration="100"
//               className="chatbot-message absolute bottom-24 z-50 h-96 w-72 right-0 bg-white shadow-2xl rounded-l-lg"
//             ></div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

import { useState } from "react";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[url(/assets/7.webp)] bg-no-repeat bg-center bg-cover relative">
        <div className="Hero-section h-full container flex-col flex items-center justify-center mx-auto px-12 text-white leading-none z-20">
          <p className="uppercase text-lg tracking-widest">
            Discover Your Next
          </p>
          <h1
            className="text-[150px] font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "Oswald" }}
          >
            Perfect Stay
          </h1>
          <p className="w-[700px] text-center leading-loose">
            Experience comfort and convenience with our expertly curated hostel
            listings, designed to match students with their perfect living
            space.
          </p>
        </div>
        <div className="search absolute top-[400px] z-10 shadow-2xl box mx-72 px-8 grid items-center justify-center grid-cols-4 gap-x-12 bg-white rounded-2xl h-24 text-black font-medium">
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
            <button className="w-full text-2xl bg-[--btn-primary] py-4 rounded-xl font-medium text-white hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
              Search
            </button>
          </div>
        </div>
        {/* Chatbot Part */}
        <div className="chatbot-part fixed right-0 bottom-0 z-50">
          <div className="absolute bg-[--primary-color] h-20 w-20 rounded-full -z-10 animate-ping"></div>
          <div className="chatbot-icon cursor-pointer" onClick={triggerIsOpen}>
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
              className="chatbot-message absolute bottom-24 z-50 h-96 w-max right-0 bg-white shadow-2xl rounded-l-lg"
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
        </div>
      </div>
    </>
  );
};
