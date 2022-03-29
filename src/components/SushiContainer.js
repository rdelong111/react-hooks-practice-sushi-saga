import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiAPI, wallet, onSushiEat}) {
  const [sushis, changeSushi] = useState([]);
  const [isLoaded, changeLoaded] = useState(false);
  const [shownSushi, changeShown] = useState([0, 4]);

  useEffect(() => {
    fetch(sushiAPI)
      .then((r) => r.json())
      .then((theSushi) => {
        changeSushi(theSushi);
        changeLoaded(true);
      });
  }, [sushiAPI]);

  const fourSushi = sushis.slice(shownSushi[0], shownSushi[1]).map((sushi) => (
    <Sushi
      key={sushi.id}
      sushi={sushi}
      wallet={wallet}
      onSushiEat={onSushiEat}
      onRemainEaten={handleRemainEaten}
    />
  ))

  function handleMore() {
    if (shownSushi[1] === 100) {
      changeShown([0, 4])
    }
    else {
      changeShown([shownSushi[0] + 4, shownSushi[1] + 4]);
    }
  }

  function handleRemainEaten(ID) {
    const newList = sushis.map((sushi) => {
      if (sushi.id === ID) {
        return {
          id: sushi.id,
          name: sushi.name,
          img_url: sushi.img_url,
          price: sushi.price,
          created_at: ''
        }
      }
      else return sushi;
    })
    changeSushi(newList);
  }

  if (!isLoaded) return <h3>Loading...</h3>
  return (
    <div className="belt">
      {fourSushi}
      <MoreButton onMoreBtn={handleMore} />
    </div>
  );
}

export default SushiContainer;
