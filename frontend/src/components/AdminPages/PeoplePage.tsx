import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const PeoplePage = () => {
  const people = [
    { name: "Suman Sharma", status: true },
    { name: "Aashish Thapa", status: false },
    { name: "Binita Adhikari", status: true },
    { name: "Pradeep Khadka", status: false },
    { name: "Ritu Poudel", status: true },
    { name: "Sarita Basnet", status: false },
    { name: "Deepa Tamang", status: true },
    { name: "Sneha Sapkota", status: false },
    { name: "Sunita Gautam", status: true },
    { name: "Santosh Bhandari", status: false },
    { name: "Nabin Maharjan", status: true },
    { name: "Kiran Rai", status: false },
  ];

  return (
    <div className=" h-screen w-full container mx-auto px-8">
      <div className=" rounded-lg p-4 w-full ">
        <div className="grid grid-cols-4 gap-4 w-full">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex items-center gap-2 flex-col justify-center rounded-md border p-2 py-12"
            >
              <AccountCircleIcon
                style={{
                  fontSize: 60,
                  color: "gray",
                  border: person.status ? "3px solid green" : "none", // Dynamic border based on status
                  borderRadius: "50%",
                }}
              />
              <span className="text-lg text-black">{person.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
