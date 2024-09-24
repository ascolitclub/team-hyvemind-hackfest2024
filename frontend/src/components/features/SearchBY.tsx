import { Link, useLocation } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { RenderStar } from "../dynamic renderer/RenderStar";

export const SearchBY = () => {
  // Retrieve hostelData passed via state from the previous page
  const location = useLocation();
  const { hostelData } = location.state; // hostelData should be an array of hostel objects

  return (
    <>
      {/* Container for the hostel cards */}
      <div
        data-aos="fade-up"
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16"
      >
        {/* Map over the hostelData array and display each hostel card */}
        {hostelData.map((hostel) => (
          <Link to={`/hostel/${hostel._id}`} key={hostel._id}>
            <div
              className="shadow-lg border border-gray-200 rounded-2xl cursor-pointer overflow-hidden hover:-translate-y-2 transition-transform"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0px 4px 8px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Hostel image */}
              <div className="object-cover bg-red-500">
                <img
                  src={hostel.img}
                  alt={hostel.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Hostel information section */}
              <div className="px-5">
                {/* Hostel title */}
                <p className="text-lg py-2 font-semibold">{hostel.title}</p>

                {/* Hostel rating rendered using the RenderStar component */}
                {RenderStar(hostel.rating)}

                {/* Hostel location */}
                <p className="mb-4 text-[#acacac] text-sm mt-1">
                  <LocationOnOutlinedIcon
                    fontSize="small"
                    style={{ color: "var(--btn-primary)" }}
                  />
                  {hostel.location}
                </p>

                {/* View button */}
                <button className="w-full flex justify-center mb-5 border border-gray-300 lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-lg font-semibold gap-2 hover:bg-[--btn-primary] hover:border-none hover:text-white transition-all">
                  View
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
