const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold">Hostel Booking Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-md focus:outline-none focus:ring"
      />
    </header>
  );
};

export default Header;
