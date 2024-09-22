import { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isBlogHover, setIsBlogHover] = useState(false);
  const blogRef = useRef<HTMLLIElement>(null);

  // Toggle the dropdown on clicking the "Blog"
  const triggerBlogHover = () => {
    setIsBlogHover(!isBlogHover);
  };

  // Close the dropdown if clicked outside the "Blog" or dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        blogRef.current &&
        !blogRef.current.contains(event.target as Node) &&
        isBlogHover
      ) {
        setIsBlogHover(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBlogHover]);

  return (
    <>
      <div className="bg-white shadow-xl w-full sticky top-0 z-50 py-4">
        <div className="container mx-auto px-12 navbar flex items-center justify-between">
          <div className="logo">
            <NavLink to="/">
              <img
                className="h-10 my-2 w-auto flex-shrink-0"
                src="/assets/mhmlogo.png"
                alt="mero hostel mate logo"
              />
            </NavLink>
          </div>
          <div className="nav-elements justify-self-end">
            <ul className="flex gap-12 justify-between">
              <li className="hover:text-[--primary-color]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[--primary-color] border-b-2 border-[--primary-color] transition-all"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[--primary-color]">
                <NavLink
                  to="/hostel"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[--primary-color] border-b-2 border-[--primary-color] transition-all"
                      : ""
                  }
                >
                  Hostel
                </NavLink>
              </li>
              <li className="hover:text-[--primary-color]">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[--primary-color] border-b-2 border-[--primary-color] transition-all"
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li
                ref={blogRef}
                className="relative hover:text-[--primary-color] cursor-pointer flex gap-1"
                onClick={triggerBlogHover}
              >
                Blog
                {!isBlogHover && <KeyboardArrowDownIcon />}
                {isBlogHover && <KeyboardArrowUpIcon />}
                {isBlogHover && (
                  <div className="absolute  top-full mt-3 -left-12 bg-white text-black p-4 shadow-xl rounded-b-md px-12">
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
              <li className="hover:text-[--primary-color]">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[--primary-color] border-b-2 border-[--primary-color] transition-all"
                      : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="buttons flex gap-4">
            <NavLink to={"/login"}>
              <button className="text-white text-lg bg-[--btn-primary] px-6 py-2 rounded-lg font-semibold  hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
                Login
              </button>
            </NavLink>
            <button className="text-white text-lg bg-[--btn-primary] px-6 py-2 rounded-lg font-semibold  hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
