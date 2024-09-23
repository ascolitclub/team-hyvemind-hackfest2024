import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const PeoplePage = () => {
  const people = [
    { name: "Alice Johnson", icon: "fas fa-user" },
    { name: "Charlie Brown", icon: "fas fa-user" },
    { name: "Diana Prince", icon: "fas fa-user" },
    { name: "Fiona Apple", icon: "fas fa-user" },
    { name: "Hannah Montana", icon: "fas fa-user" },
    { name: "Ian McKellen", icon: "fas fa-user" },
    { name: "Kevin Bacon", icon: "fas fa-user" },
    { name: "Liam Neeson", icon: "fas fa-user" },
    { name: "Natalie Portman", icon: "fas fa-user" },
    { name: "Orlando Bloom", icon: "fas fa-user" },
    { name: "Bob Smith", icon: "fas fa-user-slash" },
    { name: "Ethan Hunt", icon: "fas fa-user-slash" },
    { name: "George Lucas", icon: "fas fa-user-slash" },
    { name: "Julia Roberts", icon: "fas fa-user-slash" },
    { name: "Meryl Streep", icon: "fas fa-user-slash" },
    { name: "Penelope Cruz", icon: "fas fa-user-slash" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full container mx-12 px-12 ">
      <div className="grid grid-cols-4 gap-x-4 gap-y-12 ">
        {people.map((person, index) => (
          <div key={index} className="flex flex-col items-center gap-2 border py-4 rounded-md ">
            <AccountCircleOutlinedIcon style={{ fontSize: 50, color:"gray" }} />
            <span className="text-lg font-semibold">{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
