// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export const Navbar = () => {
//   const [IsHover, setIsHover] = useState(false);

//   const toggleHover = () => {
//     setIsHover(!IsHover);
//   };
//   return (
//     <>
//       <div className="bg-gray-700 w-full ">
//         <div className="container mx-auto px-12 navbar flex items-center justify-between text-white">
//           <div className="logo">
//             <img
//               className="h-14 w-auto"
//               src="/assets/mhmlogo.png"
//               alt="mero hostel mate logo"
//             />
//           </div>
//           <div className="nav-elements justify-self-end">
//             <ul className="flex gap-20 justify-between">
//               <li className="hover:text-[--secondary-color]">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive ? "text-[--primary-color]" : ""
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="hover:text-[--primary-text-color]">
//                 <NavLink
//                   to="/hostel"
//                   className={({ isActive }) =>
//                     isActive ? "text-[--primary-color]" : ""
//                   }
//                 >
//                   Hostel
//                 </NavLink>
//               </li>
//               <li className="hover:text-[--primary-text-color]">
//                 <NavLink
//                   to="/blog"
//                   className={({ isActive }) =>
//                     isActive ? "text-[--primary-color]" : ""
//                   }
//                 >
//                   Blog
//                 </NavLink>
//               </li>
//               <li className="hover:text-[--primary-text-color]">
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     isActive ? "text-[--primary-color]" : ""
//                   }
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="buttons flex gap-4">
//             <button className="text-[--third-text-color] bg-[--btn-primary] px-4 py-1 rounded-3xl font-semibold hover:text-[--primary-text-color] hover:bg-[--btn-secondary] border border-[--primary-color] transition-all active:translate-y-0.5">
//               Login
//             </button>
//             <button className="text-[--third-text-color] bg-[--btn-primary] px-4 py-1 rounded-3xl font-semibold hover:text-[--primary-text-color] hover:bg-[--btn-secondary] border border-[--primary-color] transition-all active:translate-y-0.5">
//               Book
//             </button>
//           </div>
//           <div
//             className="blog-hover-elements absolute"
//             onTouchMove={toggleHover}
//           >
//             <ul className="flex flex-col items-center gap-x-12">
//               <li>
//                 <NavLink to={"/"}>News</NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/"}>Reviews</NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/"}>FAQs</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isBlogHover, setIsBlogHover] = useState(false);

  const handleBlogMouseEnter = () => {
    setIsBlogHover(true);
  };

  const handleBlogMouseLeave = () => {
    setIsBlogHover(false);
  };

  return (
    <>
      <div className="bg-gray-700 w-full">
        <div className="container mx-auto px-12 navbar flex items-center justify-between text-white">
          <div className="logo">
            <img
              className="h-14 w-auto"
              src="/assets/mhmlogo.png"
              alt="mero hostel mate logo"
            />
          </div>
          <div className="nav-elements justify-self-end">
            <ul className="flex gap-20 justify-between">
              <li className="hover:text-[--secondary-color]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-color]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[--primary-text-color]">
                <NavLink
                  to="/hostel"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-color]" : ""
                  }
                >
                  Hostel
                </NavLink>
              </li>
              <li
                className="relative hover:text-[--primary-text-color] cursor-pointer"
                onMouseEnter={handleBlogMouseEnter}
              >
                Blog
                {isBlogHover && (
                  <div
                    onMouseLeave={handleBlogMouseLeave}
                    className="absolute top-full mt-4 -left-12 bg-white text-black p-4 rounded-md px-12"
                  >
                    <ul className="flex flex-col items-start gap-2">
                      <li className="hover:text-[--primary-color]">
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li className="hover:text-[--primary-color]">
                        <NavLink to="/reviews">Reviews</NavLink>
                      </li>
                      <li className="hover:text-[--primary-color]">
                        <NavLink to="/faqs">FAQs</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:text-[--primary-text-color]">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[--primary-color]" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="buttons flex gap-4">
            <button className="text-[--third-text-color] bg-[--btn-primary] px-4 py-1 rounded-3xl font-semibold hover:text-[--primary-text-color] hover:bg-[--btn-secondary] border border-[--primary-color] transition-all active:translate-y-0.5">
              Login
            </button>
            <button className="text-[--third-text-color] bg-[--btn-primary] px-4 py-1 rounded-3xl font-semibold hover:text-[--primary-text-color] hover:bg-[--btn-secondary] border border-[--primary-color] transition-all active:translate-y-0.5">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
