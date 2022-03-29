import React, {useState} from "react";

function Sushi({sushi, wallet, onSushiEat, onRemainEaten}) {
  const [isEaten, Eat] = useState(sushi.created_at.length === 0);

  function handleEat() {
    if (!isEaten) {
      if (sushi.price <= wallet) {
        Eat(true);
        onSushiEat(sushi.price, sushi.created_at);
        onRemainEaten(sushi.id);
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={`${sushi.name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
