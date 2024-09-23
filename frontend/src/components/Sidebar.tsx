const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white p-4 shadow-md">
      <div className="text-lg font-semibold mb-6">
        Hostel Booking Admin Dashboard
      </div>
      <button className="w-full p-2 mb-4 bg-black text-white rounded">
        + New
      </button>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2">
          <span>📋</span> <span>Bookings</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <span>👥</span> <span>People</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
