import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

interface Booking {
  name: string;
  checkIn: string;
  checkOut: string;
  room: string;
  guests: number;
  status: string;
}

const BookingRequests: React.FC = () => {
  const bookings: Booking[] = [
    {
      name: "John Doe",
      checkIn: "2023-09-25",
      checkOut: "2023-09-30",
      room: "Dorm",
      guests: 1,
      status: "pending",
    },
    {
      name: "Jane Smith",
      checkIn: "2023-09-26",
      checkOut: "2023-09-28",
      room: "Private",
      guests: 2,
      status: "pending",
    },
    {
      name: "Bob Johnson",
      checkIn: "2023-09-27",
      checkOut: "2023-10-01",
      room: "Dorm",
      guests: 1,
      status: "pending",
    },
    {
      name: "Alice Brown",
      checkIn: "2023-09-28",
      checkOut: "2023-10-02",
      room: "Private",
      guests: 3,
      status: "pending",
    },
    {
      name: "Charlie Wilson",
      checkIn: "2023-09-29",
      checkOut: "2023-10-03",
      room: "Dorm",
      guests: 1,
      status: "pending",
    },
  ];

  return (
    <div className="bg-white p-2 rounded-md shadow-md overflow-y-hidden container  mx-12 px-4">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-5xl font-semibold tracking-widest px-4 py-2" style={{fontFamily:"Oswald"}}>Booking Requests</h2>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Check-in</th>
            <th className="px-4 py-2">Check-out</th>
            <th className="px-4 py-2">Room Type</th>
            <th className="px-4 py-2">Guests</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{booking.name}</td>
              <td className="px-4 py-2">{booking.checkIn}</td>
              <td className="px-4 py-2">{booking.checkOut}</td>
              <td className="px-4 py-2">{booking.room}</td>
              <td className="px-4 py-2">{booking.guests}</td>
              <td className="px-4 py-2 flex items-center mt-6 cursor-pointer">
                <AutorenewOutlinedIcon/>
                <span className="px-2 py-1 bg-black text-white rounded">
                  {booking.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <button className="px-2 py-1 mb-2 mr-2 w-full bg-green-500 text-white rounded">
                  Accept
                </button>
                <button className="px-2 py-1 bg-red-500 w-full text-white rounded">
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
