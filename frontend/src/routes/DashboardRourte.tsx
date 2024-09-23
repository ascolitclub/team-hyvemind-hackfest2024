import { Routes, Route } from "react-router-dom";
import BookingRequests from "../components/AdminPages/BookingRequests"; 
import PeoplePage from "../components/AdminPages/PeoplePage"; 

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="bookings" element={<BookingRequests />} />
      <Route path="peoplePages" element={<PeoplePage />} />
    </Routes>
  );
};

export default DashboardRoutes;
