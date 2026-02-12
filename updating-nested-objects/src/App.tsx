import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "John",
    role: "Admin",
    contact: {
      mobile: "123-456-7890",
      cell: "098-765-4321",
      email: "john.doe@example.com",
    },
  });

  const handleUpdate = () => {
    {
      setUser({
        ...user,
        contact: { ...user.contact, email: "new.email@example.com" },
      });
    }
  };

  return (
    <>
      <div>
        <span>User: {user.name}</span>
        <br />
        <span>Role: {user.role}</span>
        <br />
        <span>
          <strong>Contact Information:</strong>
        </span>
        <br />
        <span>Mobile: {user.contact.mobile}</span>
        <br />
        <span>Cell: {user.contact.cell}</span>
        <br />
        <span>Email: {user.contact.email}</span>
        <br />
        <button onClick={handleUpdate}>Update User</button>
      </div>
    </>
  );
};

export default App;
