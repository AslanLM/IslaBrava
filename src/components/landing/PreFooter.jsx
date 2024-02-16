import React from "react";
import "./PreFooter.css";

const PreFooter = () => {
  return (
    <div className="prefooter">
      <div className="prefooter-img1">
        <img
          src="https://images.unsplash.com/photo-1611858447198-c6b3cc794943?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="prefooter img1 unsplash"
        />
        <div className="prefooter-img-info">
          <h1>TITLE</h1>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
      </div>
      <div className="prefooter-img2">
        <img
          src="https://images.unsplash.com/photo-1675163918119-fd3e38feaea2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="prefooter img2 unsplash"
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
