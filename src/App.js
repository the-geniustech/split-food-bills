import { useState } from "react";
import AddFriend from "./addFriend";
import FriendList from "./friendList";
import SplitBill from "./splitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Hakeem",
    image: "img/genius_pic.jpg",
    balance: -7,
  },
  {
    id: 933372,
    name: "Yusuf",
    image: "img/yusuf.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Olaitan",
    image: "img/olaitan.jpg",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleOnSelect(friend) {
    setSelectedFriend((curfriend) =>
      curfriend?.id === friend.id ? null : friend
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelect={handleOnSelect}
        />
        <AddFriend onAddFriend={setFriends} />
        <button className="button">close</button>
      </div>
      {selectedFriend && (
        <SplitBill
          key={selectedFriend.id}
          friend={selectedFriend}
          onSplit={setFriends}
          onAddBalance={setSelectedFriend}
        />
      )}
    </div>
  );
}

export default App;
