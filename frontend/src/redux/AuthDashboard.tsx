import Sidebar from '../components/AdminPages/Sidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardRoutes from '../routes/DashboardRourte'; // Import the new component

const AuthDashboard: React.FC = () => {
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
