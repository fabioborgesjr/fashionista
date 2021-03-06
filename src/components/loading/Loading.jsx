import React, { useState, useEffect } from "react";
import "./Loading.scss";

export default function Loading(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="loading__container">
      <img
        className={`loading__image ${active ? `active` : ""}`}
        src="../logo/fashionista.png"
        alt="Fashionista logo"
      />
    </div>
  );
}
