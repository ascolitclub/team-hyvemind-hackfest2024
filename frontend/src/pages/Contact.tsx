import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '@mui/icons-material/Call';

export const Contact = () => {
  return (
    <>
      <div className="w-full h-20  top-0  bg-[#041E42]"></div>
        <div className="bg-[#041E42] text-center leading-tight py-8 mb-8 text-white">
          <h2 className="text-[150px] font-extrabold uppercase tracking-wider"
            style={{ fontFamily: "Oswald" }}>
              Contact Us 
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis velit, placeat unde ducimus perferendis.</p>
        </div>
      <div className="container mx-auto px-12">
        {/* contact form */}
        <div className="grid grid-cols-12 gap-8 mb-10">
          <form className="grid col-span-8 flex-col gap-4 px-5 py-5" action="">
            <div className="flex gap-3">
              <input 
                className="w-full bg-gray-400 px-2 py-2 rounded-lg outline-none placeholder-gray-500" 
                type="email" 
                placeholder="Email"
              />
              <input 
                className="w-full bg-gray-400 px-2 py-2 rounded-lg outline-none placeholder-gray-500" 
                type="number" 
                placeholder="Phone"
              />
            </div>
            <input 
              className="bg-gray-400 px-2 py-2 rounded-lg outline-none placeholder-gray-500" 
              type="text" 
              placeholder="Name"
            />
            <textarea 
              className="bg-gray-400 px-2 py-2 rounded-lg outline-none placeholder-gray-500" 
              placeholder="Message"
            ></textarea>
            <button className="bg-[--primary-color] text-white py-2 text-lg rounded-lg">
              Submit
            </button>
          </form>
          <div className="grid col-span-4 px-4 py-6">
            <div className="bg-[url(/public/news1.jpeg)] bg-no-repeat bg-cover rounded-lg">
            <div className="backdrop-blur-sm px-6 py-8 flex flex-col gap-4 ">
              <h3 className="text-xl font-semibold">Our NewsLetters</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda magnam delectus, deserunt porro quas natus!</p>
              <input className="rounded-lg px-2 py-2 outline-none" type="email" placeholder="Email"/>
              <button className="bg-black text-white py-2 rounded-lg">Submit</button>
            </div>
            </div>
          </div>
        </div>
        {/* contact directly section */}
        <div className="grid grid-cols-3 gap-8 px-5 py-8">
          <div className="bg-gray-400 py-8 px-4 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 gap-1 flex"><CallIcon/>+01 11223344</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet?</p>
          </div>
          <div className="bg-gray-300 py-8 px-4 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 gap-1 flex"><MailOutlineOutlinedIcon/>info@merohostelmate.com</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet?</p>
          </div>
          <div className="bg-gray-200 py-8 px-4 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 gap-1 flex"><LocationOnOutlinedIcon/>Chabahil, kathmandu</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet?</p>
          </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1586790206043!2d85.34202191101448!3d27.712386576080362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970a9ff7041%3A0xfcaa45db29104458!2sTexas%20International%20College!5e0!3m2!1sen!2snp!4v1727062217264!5m2!1sen!2snp" width="600" height="450" style={{border:"0",width:"100%",padding:"20px",borderRadius:"35px"}} loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
}
