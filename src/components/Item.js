import { useRef } from "react";

function Item() {
  const items = useRef([
    {
      name: "30% OFF",
      description: "FOR WOMEN",
      image: "../img/content/1.svg",
    },
    {
      name: "HOT DEAL",
      description: "FOR MEN",
      image: "../img/content/2.svg",
    },
    {
      name: "NEW ARRIVALS",
      description: "FOR KIDS",
      image: "../img/content/3.svg",
    },
    {
      name: "LUXIROUS & TRENDY",
      description: "ACCESORIES",
      image: "../img/content/4.svg",
    },
  ]);
  return (
    <div className="items center">
      {items.map((item) => (
        <div className="item">
          <img className="item__img" src={item.image} alt={item.name} />
          <div className="item__row">
            <h2 className="item__subttl">{item.name}</h2>
            <h1 className="item__ttl">{item.description}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
