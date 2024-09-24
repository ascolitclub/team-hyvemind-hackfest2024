import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Booking {
  name: string;
  enrolledDate: string;
  email: string;
  contact: number;
  faculty: string;
  status: string;
}

export const AdminHome = () => {
  const bookings: Booking[] = [
    {
      name: "Chandra Nath Poudyal",
      enrolledDate: "2023-09-25",
      email: "2023-09-30",
      contact: 9845896520,
      faculty: "Medical",
      status: "verified",
    },
    {
      name: "Ram Shrestha",
      enrolledDate: "2023-09-26",
      email: "2023-09-28",
      contact: 9874581520,
      faculty: "Management",
      status: "verified",
    },
    {
      name: "Rohan Tiwari",
      enrolledDate: "2023-09-27",
      email: "2023-10-01",
      contact: 9871589205,
      faculty: "IT",
      status: "verified",
    },
    {
      name: "Homnath Shah",
      enrolledDate: "2023-09-27",
      email: "2023-10-01",
      contact: 9871589205,
      faculty: "Engineering",
      status: "verified",
    },
    {
      name: "Prem Kumar",
      enrolledDate: "2023-09-27",
      email: "2023-10-01",
      contact: 9871589205,
      faculty: "Hospitality",
      status: "verified",
    },
    {
      name: "Taranath Rouniyar",
      enrolledDate: "2023-09-27",
      email: "2023-10-01",
      contact: 9871589205,
      faculty: "Aryurveda",
      status: "verified",
    },
  ];

  // Calculate total students based on the length of bookings
  const [totalStudents] = useState(bookings.length);
  const [pendingStudents] = useState(13); // Set pending students to 5

  // Example: Simulate updating pending students
  useEffect(() => {
    // You can leave this empty since we're setting pendingStudents directly
  }, []);

  const totalCircle = 100; // Representing the 100% as the total circle

  // Calculating the percentage for total students and pending students
  const totalPercentage = (totalStudents / totalCircle) * 100;
  const pendingPercentage = (pendingStudents / totalStudents) * 100;

  return (
    <div className="container mx-auto p-6 h-screen flex flex-col px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Div for Total Students */}
        <div className="bg-[--primary-color] p-6 text-white rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Total Students</h2>
          <div className="relative">
            <svg width="150" height="150" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f3f3f3"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="2.5"
                strokeDasharray={`${totalPercentage}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
              {totalStudents}
            </div>
          </div>
        </div>

        {/* Second Div for Pending Students */}
        <div className="bg-[--btn-primary] p-6 text-white rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Pending Students</h2>
          <div className="relative">
            <svg width="150" height="150" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f3f3f3"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="#FF5733"
                strokeWidth="2.5"
                strokeDasharray={`${pendingPercentage}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
              {pendingStudents}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Screen Height Div */}
      <div className="flex-grow bg-gray-100 p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Enrolled Hostelers</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Enrolled Date</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Faculty</th>
              <th className="px-4 py-2">Status</th>
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
                <td className="px-4 py-2">
                  <CheckCircleIcon
                    fontSize="small"
                    style={{ color: "green" }}
                  />
                  <span className="px-2 text-black">{booking.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
