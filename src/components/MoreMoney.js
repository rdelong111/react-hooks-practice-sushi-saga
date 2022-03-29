import React, {useState} from "react";

function MoreMoney({onMoreMoney}) {
  const [amount, changeAmount] = useState(0);

  function handleMoneySubmit(e) {
    e.preventDefault();
    onMoreMoney(amount);
  }

  return (
    <form onSubmit={handleMoneySubmit}>
      ADD MORE MONEY 
      <input
        onChange={(e) => changeAmount(parseInt(e.target.value))}
        type="number"
        name="Money"
        placeholder="Enter Amount"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MoreMoney;