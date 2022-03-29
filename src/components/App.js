import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoreMoney from "./MoreMoney";

const API = "http://localhost:3001/sushis";

function App() {
  const [money, changeMoney] = useState(100);
  const [emptyPlates, addPlate] = useState([]);
  const [moreMoneyForm, showMoneyForm] = useState(false);

  function handleSushiEat(price, passedPlate) {
    changeMoney(money - price);
    addPlate([...emptyPlates, passedPlate]);
  }

  function handleMoreMoney(amount) {
    changeMoney(money + amount);
    showMoneyForm(false);
  }

  return (
    <div className="app">
      <SushiContainer sushiAPI={API} wallet={money} onSushiEat={handleSushiEat} />
      <Table
        onShowMoneyForm={() => showMoneyForm(true)}
        btn={moreMoneyForm}
        wallet={money}
        plates={emptyPlates}
      />
      {moreMoneyForm ? 
        <MoreMoney onMoreMoney={handleMoreMoney}/> : null
      }
    </div>
  );
}

export default App;
