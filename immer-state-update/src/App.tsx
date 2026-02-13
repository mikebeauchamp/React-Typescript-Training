import { useState } from "react";
import { produce } from "immer";

const UserProfile = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    role: "Administrator",
    email: "johndoe@example.com",
    dateAdded: "2024-09-17",
    address: {
      street: "123 Main St",
    },
  });

  const updateUser = () => {
    //draft is a temporary copy of the user object that we can modify
    //produce will create a new user object based on the original user and the changes made to the draft
    const updatedUser = produce(user, (draft) => {
      draft.name = "Mike Beauchamp";
      draft.email = "mikebeauchamp@example.com";
      draft.address.street = "456 Elm St";
    });

    setUser(updatedUser);

    //react way of updating the address without immer
    //setUser({ ...user, address: { ...user.address, street: "456 Elm St" } });
  };

  return (
    <>
      <h2>User Profile</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Email: {user.email}</p>
      <p>Date Added: {user.dateAdded}</p>
      <button onClick={updateUser}>Update User</button>
    </>
  );
};

export default UserProfile;
