import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// const PeoplePage = () => {
//   const people = [
//     { name: "Alice Johnson" },
//     { name: "Charlie Brown" },
//     { name: "Diana Prince" },
//     { name: "Fiona Apple" },
//     { name: "Hannah Montana" },
//     { name: "Ian McKellen" },
//     { name: "Kevin Bacon" },
//     { name: "Liam Neeson" },
//     { name: "Natalie Portman" },
//     { name: "Orlando Bloom" },
//     { name: "Bob Smith" },
//     { name: "Ethan Hunt" },
//     { name: "George Lucas" },
//     { name: "Julia Roberts" },
//     { name: "Meryl Streep" },
//     { name: "Penelope Cruz" },
//   ];

//   return (
//     <div className="flex h-screen w-full">
//       <div className="bg-white rounded-lg shadow p-4">
//         <h2 className="text-xl font-semibold mb-4">People</h2>
//         <div className="grid grid-cols-4 gap-4 w-full">
//           {people.map((person, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-2 flex-col justify-center border"
//             >
//               <AccountCircleOutlinedIcon />
//               <span className="text-sm text-gray-700">{person.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeoplePage;

const PeoplePage = () => {
  const people = [
    { name: "Alice Johnson" },
    { name: "Charlie Brown" },
    { name: "Diana Prince" },
    { name: "Fiona Apple" },
    { name: "Hannah Montana" },
    { name: "Ian McKellen" },
    { name: "Kevin Bacon" },
    { name: "Liam Neeson" },
    { name: "Natalie Portman" },
    { name: "Orlando Bloom" },
    { name: "Bob Smith" },
    { name: "Ethan Hunt" },
    { name: "George Lucas" },
    { name: "Julia Roberts" },
    { name: "Meryl Streep" },
    { name: "Penelope Cruz" },
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
              <AccountCircleOutlinedIcon style={{ fontSize: 60, color:"gray"}}  />
              <span className="text-lg text-black ">{person.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
