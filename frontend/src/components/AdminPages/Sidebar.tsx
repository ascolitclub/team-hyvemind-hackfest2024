import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isLogOut, setLogOut] = useState(false);
  const navigate = useNavigate(); // Import useNavigate for redirection

  const LogOut = () => {
    setLogOut(!isLogOut);
    navigate("/"); // Redirect to the login page or any other route
  };

  return (
    <>
      <div className=" bg-[#041E42] py-4">
        <div className="w-full  container mx-auto px-12 shadow-2xl  justify-between flex items-center">
          <div>
            <Link to={"/dashboard/"}>
              <div className="text-3xl tracking-wide font-extrabold">
                <img
                  className="h-12 w-full"
                  src="/assets/mhmlogo_White.png"
                  alt="logo"
                />
              </div>
            </Link>
          </div>
          <div className="font-medium text-lg text-white">
            <ul className=" flex items-center gap-8 w-full">
              <li>
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/peoplePages"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  People
                </NavLink>
              </li>
            </ul>
          </div>
          <div onClick={LogOut}>
            <button className="logout border border-[--primary-color] rounded-md bg-[--primary-color] px-4 py-2 active:translate-y-0.5 transition-all">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
