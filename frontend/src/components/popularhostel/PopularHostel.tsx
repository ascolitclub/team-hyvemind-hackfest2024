import { Link } from "react-router-dom";
import hostel1 from "/public/hostel1.jpg";
import hostel2 from "/public/hostel2.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { RenderStar } from "../dynamic renderer/RenderStar";

export default function PopularHostel() {
  const hostelData = [
    {
      img: hostel1,
      title: "Hostel1",
      location: "kapan,kathmandu",
      rating: 5,
    },
    {
      img: hostel2,
      title: "Hostel2",
      location: "kapan,kathmandu",
      rating: 4,
    },
    {
      img: hostel1,
      title: "Hostel3",
      location: "kapan,kathmandu",
      rating: 5,
    },
    {
      img: hostel2,
      title: "Hostel4",
      location: "kapan,kathmandu",
      rating: 3,
    },
    {
      img: hostel1,
      title: "Hostel5",
      location: "kapan,kathmandu",
      rating: 5,
    },
    {
      img: hostel2,
      title: "Hostel6",
      location: "kapan,kathmandu",
      rating: 4,
    },
    {
      img: hostel1,
      title: "Hostel7",
      location: "kapan,kathmandu",
      rating: 3,
    },
    {
      img: hostel2,
      title: "Hostel8",
      location: "kapan,kathmandu",
      rating: 4,
    },
  ];
  return (
    <>
      <div className="h-auto w-screen container mx-auto mb-5">
        <div className="relative flex items-center justify-center">
          <h1
            data-aos="fade-up"
            className="text-[150px] text-gray-100 font-mono font-semibold"
            style={{ fontFamily: "Oswald" }}
          >
            HOSTELS
          </h1>
          <h2
            data-aos="fade-up"
            className="absolute tracking-widest text-center text-xl top-[47%] text-[--primary-color] font-sans uppercase"
          >
            Popular Hostels
          </h2>
        </div>
        <p data-aos="fade-up" className="text-center mb-8">
          Take a detour at our most popular hostel for this season
        </p>
        <div data-aos="fade-up" className="flex justify-center flex-wrap gap-5">
          <button className="px-3 py-1 rounded-3xl bg-[#0cafff] text-white">
            All
          </button>
          <button className="px-3 py-1 border rounded-3xl border-gray-500 hover:bg-[#0cafff] ">
            Boys
          </button>
          <button className="px-3 py-1 border rounded-3xl border-gray-500 hover:bg-[#0cafff] ">
            Girls
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16 "
        >
          {hostelData.map((hostel, index) => (
            <Link to={`/hostel/${hostel.title}`} key={index}>
              <div
                key={index}
                className="shadow-lg border border-gray-200 rounded-2xl cursor-pointer overflow-hidden hover:-translate-y-2 transition-transform"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="object-cover bg-red-500">
                  <img src={hostel.img} alt={hostel.title} className="" />
                </div>
                <div className="px-5">
                  <p className="text-xl pt-4 font-semibold ">{hostel.title}</p>
                  {RenderStar(hostel.rating)}
                  <p className="mb-4 text-[#acacac] text-sm">
                    <LocationOnOutlinedIcon
                      fontSize="small"
                      style={{ color: "var(--btn-primary)" }}
                    />
                    {hostel.location}
                  </p>
                  <button className="w-full flex justify-center mb-5 border border-gray-300 lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-lg font-semibold gap-2 hover:bg-[--btn-primary] hover:border-none hover:text-white transition-all">
                    view
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div data-aos="fade-up" className="flex justify-center">
          <button className="bg-white text-lg shadow-2xl px-6 py-3 rounded-lg font-semibold text-[--primary-color] hover:text-white hover:bg-[--btn-primary] border border-[--btn-primary] transition-all active:translate-y-0.5">
            View all Hostels
          </button>
        </div>
      </div>
    </>
  );
}
