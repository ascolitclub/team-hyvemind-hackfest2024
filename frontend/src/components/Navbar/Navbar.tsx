import { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, NavLink } from "react-router-dom";
import Login from "../../pages/Login";

export const Navbar = () => {
  const [isBlogHover, setIsBlogHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control login popup
  const blogRef = useRef<HTMLLIElement>(null);

  const triggerBlogHover = () => {
    setIsBlogHover(!isBlogHover);
  };

  const triggerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight * 0.01;
      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        blogRef.current &&
        !blogRef.current.contains(event.target as Node) &&
        isBlogHover
      ) {
        setIsBlogHover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBlogHover]);

  return (
    <>
      <div
        className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-12 py-2 navbar flex items-center justify-between">
          {isScrolled ? (
            <div className="scrolled-logo">
              <NavLink to="/">
                <img
                  className="h-12 my-2 w-auto flex-shrink-0"
                  src="/assets/mhmlogo_Black.png"
                  alt="Scrolled logo"
                />
              </NavLink>
            </div>
          ) : (
            <div className="hero-logo">
              <NavLink to="/">
                <img
                  className="h-12 my-2 w-auto flex-shrink-0"
                  src="/assets/mhmlogo_White.png"
                  alt="Hero logo"
                />
              </NavLink>
            </div>
          )}

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
                  <div className="absolute top-full mt-3 z-50 -left-12 bg-white text-black p-4 shadow-xl rounded-b-md px-12">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="hover:text-[--primary-color]">
                        <NavLink to="/news">News</NavLink>
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
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="buttons flex gap-4">
            <button
              onClick={() => setIsLoginOpen(true)} // Open login popup
              className="text-white text-lg bg-[--btn-primary] px-6 py-2 rounded-lg font-semibold hover:bg-[--btn-secondary] transition-all active:translate-y-0.5"
            >
              Login
            </button>
            <Link to={"/hostel"}>
              <button className="text-white text-lg bg-[--btn-primary] px-6 py-2 rounded-lg font-semibold hover:bg-[--btn-secondary] transition-all active:translate-y-0.5">
                Book
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Login onClose={() => setIsLoginOpen(false)} />{" "}
          {/* Pass close function */}
        </div>
      )}

      <div className="chatbot-part fixed right-0 bottom-0 z-30">
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
      </div>
    </>
  );
};
