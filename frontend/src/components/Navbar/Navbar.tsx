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
      <div className="bg-gray-700 w-full sticky top-0 z-50 py-4">
        <div className="container mx-auto px-12 navbar flex items-center justify-between text-white">
          <div className="logo">
            <NavLink to="/">
              <img
                className="h-8 my-2 w-auto flex-shrink-0"
                src="/assets/mhmlogo.png"
                alt="mero hostel mate logo"
              />
            </NavLink>
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
                    className="absolute top-full mt-3 -left-12 bg-white text-black p-4 rounded-md px-12"
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
            <button className="text-[--third-text-color] bg-[--btn-primary] px-6 py-2 rounded-lg font-semibold hover:text-[--primary-text-color] hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
              Login
            </button>
            <button className="text-[--third-text-color] bg-[--btn-primary] px-6 py-2 rounded-lg font-semibold hover:text-[--primary-text-color] hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
