import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import QuickChat from "../components/QuickChat";
import BookingRequests from "../components/BookingRequests";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthDashboard: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex p-6 space-x-6">
          <BookingRequests />
          <QuickChat />
        </div>
      </div>
    </div>
  );
};

export default AuthDashboard;
