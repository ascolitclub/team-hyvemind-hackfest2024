import Sidebar from "../components/AdminPages/Sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardRoutes from "../routes/DashboardRourte"; // Import the new component

const AuthDashboard: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Sidebar />

      <div className="flex p-6 space-x-6">
        <DashboardRoutes />
      </div>
    </>
  );
};

export default AuthDashboard;
