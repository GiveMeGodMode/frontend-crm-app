import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function updateWindowSize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  });

  return <>{windowWidth > 1050 ? <Menu /> : <MobileMenu />}</>;
}

export default Navigation;
