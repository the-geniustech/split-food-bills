import { useState } from "react";

export default function SplitBill({ friend, onSplit, onAddBalance }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoPays, setWhoPays] = useState("user");

  const friendExpense = bill - userExpense;
  const newBal =
    whoPays === "user"
      ? friend.balance + -friendExpense
      : friend.balance + userExpense;

  function handleSplitBill(e) {
    e.preventDefault();

    if (!bill) return;

    onSplit((friends) =>
      friends.map((el) =>
        el.id === friend.id ? { ...el, balance: newBal } : el
      )
    );

    onAddBalance((friend) => ({ ...friend, balance: newBal }));
    setBill("");
    setUserExpense("");
    setWhoPays("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>split bill with {friend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="number"
        id="bill"
        name="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="user-expense">🧍🏽‍♂️ Your expense</label>
      <input
        type="number"
        id="user-expense"
        name="user-expense"
        value={userExpense}
        onChange={(e) => setUserExpense(Number(e.target.value))}
      />
      <label htmlFor="friend-expense">👫 {friend.name}'s expense</label>
      <input
        type="number"
        id="friend-expense"
        name="friend-expense"
        readOnly
        defaultValue={friendExpense ? friendExpense : ""}
      />
      <label htmlFor="who-pays">💰 Who is paying the bill?</label>
      <select
        type="select"
        id="who-pays"
        name="who-pays"
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
