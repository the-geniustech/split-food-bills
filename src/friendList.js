export default function FriendList({ friends, selectedFriend, onSelect }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onSelect }) {
  const isOpen = selectedFriend?.id === friend.id;

  return (
    <li className={isOpen ? "selected" : ""}>
      <img src={friend.image} alt="friend" />
      <div>
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="red">
            You owe {friend.name} {friend.balance}€
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        {friend.balance < 0 && (
          <p className="green">
            {friend.name} owe you {Math.abs(friend.balance)}€
          </p>
        )}
      </div>
      <button className="button" onClick={() => onSelect(friend)}>
        {isOpen ? "Close" : "Open"}
      </button>
    </li>
  );
}
