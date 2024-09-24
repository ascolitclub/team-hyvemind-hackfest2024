import { Routes, Route } from "react-router-dom";
import BookingRequests from "../components/AdminPages/BookingRequests"; 
import PeoplePage from "../components/AdminPages/PeoplePage"; 
import { AdminHome } from "../components/AdminPages/AdminHome";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="bookings" element={<BookingRequests />} />
      <Route path="/" element={<AdminHome/>}/>
      <Route path="peoplePages" element={<PeoplePage />} />
    </Routes>
  );
};

export default DashboardRoutes;
