interface Chat {
  name: string;
  message: string;
}

const QuickChat: React.FC = () => {
  const chats: Chat[] = [
    { name: "Gilbert", message: "Hello, I have a question." },
    { name: "Abena", message: "Can I change my check-in date?" },
    { name: "Bayo", message: "Is breakfast included?" },
    { name: "Muhammad", message: "Do you have parking?" },
  ];

  return (
    <div className="w-72 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Chat</h2>
      <ul>
        {chats.map((chat, idx) => (
          <li key={idx} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{chat.name}</span>
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                !
              </span>
            </div>
            <p className="text-sm">{chat.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickChat;
