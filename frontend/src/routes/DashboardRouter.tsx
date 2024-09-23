import { Routes, Route } from "react-router-dom";
import BookingRequests from "../components/AdminPage/BookingRequests";
import PeoplePage from "../components/AdminPage/PeoplePage";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="bookings" element={<BookingRequests />} />
      <Route path="peoplePages" element={<PeoplePage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default DashboardRoutes;
