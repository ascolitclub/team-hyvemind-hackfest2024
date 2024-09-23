import { useState } from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { RenderStar } from "../dynamic renderer/RenderStar";

export default function PopularHostel() {
  const hostelData = [
    {
      img: "/public/hostel1.jpg",
      title: "Hostel1",
      location: "Thamel, Kathmandu",
      rating: 5,
      type: "Male",
    },
    {
      img: "/public/hostel2.jpg",
      title: "Hostel2",
      location: "Thamel, Kathmandu",
      rating: 3,
      type: "Female",
    },
    {
      img: "/public/hostel3.jpg",
      title: "Hostel3",
      location: "Thamel, Kathmandu",
      rating: 4,
      type: "Male",
    },
    {
      img: "/public/hostel4.jpg",
      title: "Hostel4",
      location: "Thamel, Kathmandu",
      rating: 4,
      type: "Female",
    },
    {
      img: "/public/hostel5.jpg",
      title: "Hostel5",
      location: "Jorpati, Kathmandu",
      rating: 3,
      type: "Male",
    },
    {
      img: "/public/hostel6.jpg",
      title: "Hostel6",
      location: "Jorpati, Kathmandu",
      rating: 4,
      type: "Female",
    },
    {
      img: "/public/hostel7.jpg",
      title: "Hostel7",
      location: "Jorpati, Kathmandu",
      rating: 2,
      type: "Male",
    },
    {
      img: "/public/hostel8.jpg",
      title: "Hostel8",
      location: "Jorpati, Kathmandu",
      rating: 5,
      type: "Female",
    },
    {
      img: "/public/hostel9.jpg",
      title: "Hostel9",
      location: "Kapan, Kathmandu",
      rating: 4,
      type: "Male",
    },
    {
      img: "/public/hostel10.jpg",
      title: "Hostel10",
      location: "Kapan, Kathmandu",
      rating: 5,
      type: "Female",
    },
    {
      img: "/public/hostel11.jpg",
      title: "Hostel11",
      location: "Kapan, Kathmandu",
      rating: 4,
      type: "Male",
    },
    {
      img: "/public/hostel12.jpg",
      title: "Hostel12",
      location: "Kapan, Kathmandu",
      rating: 3,
      type: "Female",
    },
    {
      img: "/public/hostel13.jpg",
      title: "Hostel13",
      location: "Chabhil, Kathmandu",
      rating: 5,
      type: "Male",
    },
    {
      img: "/public/hostel14.jpg",
      title: "Hostel14",
      location: "Chabhil, Kathmandu",
      rating: 4,
      type: "Female",
    },
    {
      img: "/public/hostel15.jpg",
      title: "Hostel15",
      location: "Chabhil, Kathmandu",
      rating: 3,
      type: "Male",
    },
    {
      img: "/public/hostel16.jpg",
      title: "Hostel16",
      location: "Chabhil, Kathmandu",
      rating: 2,
      type: "Female",
    },
    {
      img: "/public/hostel17.jpg",
      title: "Hostel17",
      location: "Mitrapark, Kathmandu",
      rating: 4,
      type: "Male",
    },
    {
      img: "/public/hostel18.jpg",
      title: "Hostel18",
      location: "Mitrapark, Kathmandu",
      rating: 3,
      type: "Female",
    },
    {
      img: "/public/hostel19.jpg",
      title: "Hostel19",
      location: "Mitrapark, Kathmandu",
      rating: 5,
      type: "Male",
    },
    {
      img: "/public/hostel20.jpg",
      title: "Hostel20",
      location: "Mitrapark, Kathmandu",
      rating: 4,
      type: "Female",
    },
    {
      img: "/public/hostel21.jpg",
      title: "Hostel21",
      location: "Gaushala, Kathmandu",
      rating: 4,
      type: "Male",
    },
    {
      img: "/public/hostel22.jpg",
      title: "Hostel22",
      location: "Gaushala, Kathmandu",
      rating: 5,
      type: "Female",
    },
    {
      img: "/public/hostel23.jpg",
      title: "Hostel23",
      location: "Gaushala, Kathmandu",
      rating: 3,
      type: "Male",
    },
    {
      img: "/public/hostel24.jpg",
      title: "Hostel24",
      location: "Gaushala, Kathmandu",
      rating: 2,
      type: "Female",
    },
    {
      img: "/public/hostel20.jpg",
      title: "Hostel25",
      location: "Mitrapark, Kathmandu",
      rating: 5,
      type: "Male",
    },
    {
      img: "/public/hostel20.jpg",
      title: "Hostel26",
      location: "Mitrapark, Kathmandu",
      rating: 3,
      type: "Female",
    },
  ];
  

  const sortedHostels = [...hostelData].sort((a, b) => b.rating - a.rating);

  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 hostels
  const [filterType, setFilterType] = useState("All");
  const [hasClickedShowMore, setHasClickedShowMore] = useState(false); // New state

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, 8)); // Show 4 more but max is 8
    setHasClickedShowMore(true); // Set to true when button is clicked
  };

  const handleFilterChange = (hostelFilter:string) => {
    setFilterType(hostelFilter);
    setVisibleCount(4); // Reset the visible count when the filter changes
    setHasClickedShowMore(false); // Reset the show more button state
  };

  const filteredHostels = sortedHostels.filter((hostel) => {
    if (filterType === "All") return true;
    return filterType === "Boys" ? hostel.type === "Male" : hostel.type === "Female";
  });

  return (
    <>
      <div className="h-auto w-screen container mx-auto mb-5">
        <div className="relative flex flex-col items-center justify-center ">
          <h1
            data-aos="fade-up"
            className="text-[150px] text-gray-200 font-mono font-semibold uppercase"
            style={{ fontFamily: "Oswald" }}
          >
            HOSTELS
          </h1>
          <h2
            data-aos="fade-up"
            className="absolute tracking-widest text-center text-xl top-[47%] text-[--primary-color] font-sans uppercase"
          >
            popular hostels
          </h2>
        </div>
        <div data-aos="fade-up" className="flex justify-center flex-wrap gap-5">
          <button
            className={`px-3 py-1 rounded-3xl ${
              filterType === "All"
                ? "bg-[#0cafff] text-white"
                : "border border-gray-500 hover:bg-[#0cafff]"
            }`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded-3xl ${
              filterType === "Boys"
                ? "bg-[#0cafff] text-white"
                : "border border-gray-500 hover:bg-[#0cafff]"
            }`}
            onClick={() => handleFilterChange("Boys")}
          >
            Boys
          </button>
          <button
            className={`px-3 py-1 rounded-3xl ${
              filterType === "Girls"
                ? "bg-[#0cafff] text-white"
                : "border border-gray-500 hover:bg-[#0cafff]"
            }`}
            onClick={() => handleFilterChange("Girls")}
          >
            Girls
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16 "
        >
          {filteredHostels.slice(0, visibleCount).map((hostel, index) => (
            <Link to={`/hostel/${hostel.title}`} key={index}>
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
                <div className="h-56">
                  <img
                    src={hostel.img}
                    alt={hostel.title}
                    className="h-full w-full"
                  />
                </div>
                <div className="px-5">
                  <p className="text-xl pt-4 font-semibold">{hostel.title}</p>
                  {RenderStar(hostel.rating)}
                  <p className="mb-4 text-[#acacac] text-sm">
                    <LocationOnOutlinedIcon
                      fontSize="small"
                      style={{ color: "var(--btn-primary)" }}
                    />
                    {hostel.location}
                  </p>
                  <button className="w-full flex justify-center mb-5 border border-gray-300 lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-lg font-semibold gap-2 hover:bg-[#0cafff] hover:border-none hover:text-white transition-all">
                    View
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!hasClickedShowMore && visibleCount < filteredHostels.length && (
          <div data-aos="fade-up" className="flex justify-center">
            <button
              className="bg-[--btn-primary] text-lg shadow-2xl px-6 py-3 rounded-lg font-semibold text-white hover:bg-[--btn-secondary] transition-all active:translate-y-0.5"
              onClick={handleShowMore}
            >
              View more hostels
            </button>
          </div>
        )}
      </div>
    </>
  );
}
