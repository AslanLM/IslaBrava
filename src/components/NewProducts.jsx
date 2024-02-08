import React from "react";
import "./NewProducts.css";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="newproducts">
      <h1 className="subtitle">New Products</h1>
      <div className="product-container">
        <Slider {...settings}>
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN000CR5_KJG_HERO?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN0A7YDV_CHO_ALT4?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN000JF7_3KS_HERO?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN000CR5_KJG_HERO?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN0A7YDV_CHO_ALT4?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN000JF7_3KS_HERO?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN000CR5_KJG_HERO?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN0A7YDV_CHO_ALT4?wid=600&qlt=70" />
          <Product backgroundImage="https://images.vans.com/is/image/Vans/VN000JF7_3KS_HERO?wid=600&qlt=70" />
        </Slider>
      </div>
    </div>
  );
};

export default NewProducts;
