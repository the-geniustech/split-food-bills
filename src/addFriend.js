import { useState } from "react";

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState();
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    if (!name) return;
    const newFriend = { id: Date.now(), name, image, balance: 0 };

    onAddFriend((friends) => [...friends, newFriend]);
  }
  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>👬 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📸 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">Add Friend</button>
    </form>
  );
}
