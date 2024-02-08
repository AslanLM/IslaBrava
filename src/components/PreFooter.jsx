import React from "react";
import "./PreFooter.css";

const PreFooter = () => {
  return (
    <div className="prefooter">
      <div className="prefooter-img1">
        <img
          src="https://images.vans.com/is/image/VansBrand/HO23_Dec_Omni_SportLow_W_KneeDown_676x778_d?$fullres$"
          alt="prefooter img1"
        />
        <div className="prefooter-img-info">
          <h1>TITLE</h1>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
      </div>
      <div className="prefooter-img2">
        <img
          src="https://images.vans.com/is/image/VansBrand/SP24%5FVANSxSPITFIRE%5FHPSecondary%5FAction%5FDesktop%5F676x778?$fullres$"
          alt="prefooter img2"
        />
        <div className="prefooter-img-info">
          <h1>TITLE</h1>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
