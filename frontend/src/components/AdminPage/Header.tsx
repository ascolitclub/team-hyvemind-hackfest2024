const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[--accent-color] shadow-sm pr-6 pl-6">
      <h1 className="text-3xl font-bold">Hostel Booking Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-md outline-none"
      />
    </header>
  );
};

export default Header;
