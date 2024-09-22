import { Link } from "react-router-dom";
import hostel1 from '/public/hostel1.jpg'
import hostel2 from '/public/hostel2.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function PopularHostel() {
    const hostelData = [
        {
        img: hostel1,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel2,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel1,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel2,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel1,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel2,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel1,
        title: 'Name',
        location:"kapan,kathmandu"
        },
        {
        img: hostel2,
        title: 'Name',
        location:"kapan,kathmandu"
        }
    ];
    return (
        <>
            <div className="h-auto w-screen container mx-auto  mb-5">
                <h2 className="text-center text-[50px] font-extrabold">Popular <span className="text-[#0cafff]">Hostel</span></h2>
                <p className="text-center mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, accusamus?</p>
                <div className="flex justify-center flex-wrap gap-5">
                    <button className="px-3 py-1 rounded-3xl bg-[#0cafff] text-white">All</button>
                    <button className="px-3 py-1 border rounded-3xl border-gray-500 hover:bg-[#0cafff] ">Boys</button>
                    <button className="px-3 py-1 border rounded-3xl border-gray-500 hover:bg-[#0cafff] ">Girls</button>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16 ">
                    {hostelData.map((hostel,index)=>(
                        <Link to={`/hostel/${hostel.title}`} key={index}>
                            <div key={index} className="border border-[#a2a2a2] rounded-2xl cursor-pointer overflow-hidden hover:bg-gray-300 hover:-translate-y-2 transition-transform"
                                style={{
                                    boxShadow: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                }}>
                                <div className="object-cover bg-red-500">
                                    <img src={hostel.img} alt={hostel.title} className="" />
                                </div>
                                <div className="px-5">
                                    <p className="text-[24px] font-bold">{hostel.title}</p>
                                    <p className="mb-4 text-[#acacac] font-medium"><LocationOnOutlinedIcon/>{hostel.location}</p>
                                    <button className='w-full flex justify-center mb-5 border border-[#515151] lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-3xl font-semibold gap-2 hover:bg-[#0cafff] hover:border-none hover:text-white transition-all'>
                                        view</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="px-4 py-2 rounded-3xl border shadow-xl bg-[#0cafff] font-semibold text-white hover:shadow-xl active:translate-y-0.5 transition-transform ">View All Products</button>
                </div>
            </div>
    </>
    )
}
