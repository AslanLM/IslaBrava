import React from "react";

const Product = ({ backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-info">
        <h1>TITLE</h1>
        <p>Descripción</p>
        <p>Precio</p>
      </div>
    </div>
  );
};

export default Product;

