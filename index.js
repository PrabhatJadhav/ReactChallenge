import { useEffect, useState } from "react";

export default function MidLevelChallenge() {
  const [balance, setBalance] = useState(0);
  const [users, setUsers] = useState([
    {
      name: "Piyush",
      balance: 100,
    },
    {
      name: "Sourav",
      balance: 60,
    },
  ]);

  useEffect(() => {
    let total = users.reduce((result, current) => {
      return result + parseInt(current.balance, 10);
    }, 0);
    console.log(total);
    setBalance(total);
  }, [users]);

  const handleName = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    const newState = users.map((obj, index) => {
      if (index == id) {
        return { ...obj, name: value };
      } else {
        return obj;
      }
    });
    setUsers(newState);

    // console.log(users);
  };

  const handleBal = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    const newState = users.map((obj, index) => {
      if (index == id) {
        return { ...obj, balance: value };
      } else {
        return obj;
      }
    });
    setUsers(newState);

    // console.log(users);};
  };

  const handleAddRecord = () => {
    setUsers([...users, { name: "", balance: 0 }]);
  };

  return (
    <div className="App">
      {users.map((user, index) => (
        <div key={index}>
          <input
            id={index}
            type="text"
            onChange={handleName}
            value={user.name}
          />
          <input
            id={index}
            type="number"
            onChange={handleBal}
            value={user.balance}
          />
        </div>
      ))}
      <button onClick={handleAddRecord}>Add Record</button>
      <div>
        Total balance:
        {balance.toString() == "NaN" ? <span>Invalid Input</span> : balance}
      </div>
    </div>
  );
}
