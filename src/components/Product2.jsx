import React from "react";

const Product2 = ({ backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  };

  return (
    <div className="card2" style={cardStyle}>
      <div className="card-info">
        <h1>TITLE</h1>
        <p>Descripción</p>
        <p>Precio</p>
      </div>
    </div>
  );
};

export default Product2;


