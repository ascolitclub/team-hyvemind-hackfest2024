import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { RenderStar } from '../components/dynamic renderer/RenderStar';

export default function Hostel() {
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
  

  const [searchTerm, setSearchTerm] = useState('');

  const filteredHostels = hostelData.filter(hostel =>
    hostel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-20 top-0 bg-[#041E42]"></div>
      <div className="h-auto">
        <div className='bg-[#041E42]'>
            <div className='container mx-auto mb-10 py-4'>
              <h2
                className="text-[150px] text-white text-center font-mono font-semibold uppercase"
                style={{ fontFamily: "Oswald" }}
              >
                All Hostel
              </h2>
              <div className='flex justify-center items-center gap-4'>
                <input
                  type="search"
                  placeholder="Search here"
                  className="outline-none w-96 border rounded-lg px-4 py-2"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  />
                <button className='bg-[--primary-color] px-5 rounded-lg py-2 text-white'>Search</button>
              </div>
            </div>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto px-12 mb-10">
          {filteredHostels.map((hostel, index) => (
            <Link to={`/hostel/${hostel.title}`} key={index}>
              <div
                className="shadow-lg border border-gray-200 rounded-2xl cursor-pointer overflow-hidden hover:-translate-y-2 transition-transform"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="h-56">
                  <img
                    src={hostel.img}
                    alt={hostel.title}
                    className="h-full w-full object-cover"
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
      </div>
    </>
  );
}
