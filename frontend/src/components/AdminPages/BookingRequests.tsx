import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
interface Booking {
  name: string;
  enrolledDate: string;
  email: string;
  contact: number;
  faculty: string;
  status: string;
}

const BookingRequests: React.FC = () => {
  const bookings: Booking[] = [
    {
      name: "Ram Lal Mukunda",
      enrolledDate: "2023-09-25",
      email: "ramlal.mukunda@example.com",
      contact: 9845896520,
      faculty: "Medical",
      status: "pending",
    },
    {
      name: "Mukunde Prasad",
      enrolledDate: "2023-09-26",
      email: "mukunde.prasad@example.com",
      contact: 9874581520,
      faculty: "Management",
      status: "pending",
    },
    {
      name: "Jhalkman Bohora",
      enrolledDate: "2023-09-27",
      email: "jhalkman.bohora@example.com",
      contact: 9871589205,
      faculty: "IT",
      status: "pending",
    },
    {
      name: "Tankeshowr Yadav",
      enrolledDate: "2023-09-28",
      email: "tankeshowr.yadav@example.com",
      contact: 9845120302,
      faculty: "Law",
      status: "pending",
    },
    {
      name: "Hari Bahadur",
      enrolledDate: "2023-09-29",
      email: "hari.bahadur@example.com",
      contact: 9800595655,
      faculty: "Engineering",
      status: "pending",
    },
    {
      name: "Birendra Adhikari",
      enrolledDate: "2023-09-30",
      email: "birendra.adhikari@example.com",
      contact: 9845098655,
      faculty: "Management",
      status: "pending",
    },
    {
      name: "Suman Thapa",
      enrolledDate: "2023-10-01",
      email: "suman.thapa@example.com",
      contact: 9812095632,
      faculty: "Law",
      status: "pending",
    },
    {
      name: "Ramesh Poudel",
      enrolledDate: "2023-10-02",
      email: "ramesh.poudel@example.com",
      contact: 9801234567,
      faculty: "IT",
      status: "pending",
    },
    {
      name: "Bhuwan Dahal",
      enrolledDate: "2023-10-03",
      email: "bhuwan.dahal@example.com",
      contact: 9841234567,
      faculty: "Medical",
      status: "pending",
    },
    {
      name: "Ganesh Rajbhandari",
      enrolledDate: "2023-10-04",
      email: "ganesh.rajbhandari@example.com",
      contact: 9856098541,
      faculty: "Engineering",
      status: "pending",
    },
    {
      name: "Madhav Karki",
      enrolledDate: "2023-10-05",
      email: "madhav.karki@example.com",
      contact: 9841237589,
      faculty: "Medical",
      status: "pending",
    },
    {
      name: "Subarna Chhetri",
      enrolledDate: "2023-10-06",
      email: "subarna.chhetri@example.com",
      contact: 9810012345,
      faculty: "Management",
      status: "pending",
    },
    {
      name: "Sandesh Gurung",
      enrolledDate: "2023-10-07",
      email: "sandesh.gurung@example.com",
      contact: 9800678921,
      faculty: "IT",
      status: "pending",
    },
  ];

  return (
    <div className="flex-1 rounded-md container mx-auto px-8">
      <div className="flex items-center justify-center my-4 mb-12">
        <h2 className="text-5xl font-medium" style={{ fontFamily: "Oswald" }}>
          Booking Requests
        </h2>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Enrolled Date</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Faculty</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{booking.name}</td>
              <td className="px-4 py-2">{booking.enrolledDate}</td>
              <td className="px-4 py-2">{booking.email}</td>
              <td className="px-4 py-2">{booking.contact}</td>
              <td className="px-4 py-2">{booking.faculty}</td>
              <td className="px-4 py-2 flex items-center justify-center mt-7">
                <CachedOutlinedIcon
                  fontSize="small"
                  style={{ color: "gray" }}
                />
                <span className="px-2 text-black">{booking.status}</span>
              </td>
              <td className="px-4 py-2">
                <button className="px-2 py-1 mr-2 w-full mb-2 active:translate-y-0.5 transition-all bg-green-500 text-white rounded">
                  Accept
                </button>
                <button className="px-2 py-1 w-full bg-red-500 active:translate-y-0.5 transition-all text-white rounded">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingRequests;
