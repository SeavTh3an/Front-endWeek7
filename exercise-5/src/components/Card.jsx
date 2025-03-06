import React from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <h4>{card.title}</h4>
      <small>{card.subtitle}</small>
      <p>{card.description}</p>
      <img src={card.image} alt={card.title} />
    </div>
  );
}