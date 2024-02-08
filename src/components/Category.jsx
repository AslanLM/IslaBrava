import React from "react";
import "./NewProducts.css";
import Product2 from "./Product2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className="category">
      <h1 className="subtitle">Other Collection</h1>
      <div className="product-container">
        <Slider {...settings}>
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN000CR5_KJG_HERO?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN0A7YDV_CHO_ALT4?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN000JF7_3KS_HERO?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN000CR5_KJG_HERO?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN0A7YDV_CHO_ALT4?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN000JF7_3KS_HERO?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN000CR5_KJG_HERO?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN0A7YDV_CHO_ALT4?wid=600&qlt=70" />
          <Product2 backgroundImage="https://images.vans.com/is/image/Vans/VN000JF7_3KS_HERO?wid=600&qlt=70" />
        </Slider>
      </div>
    </div>
  );
};

export default Category;
