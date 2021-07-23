import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);
  console.log("Markerting Compoenent is loaded!");

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
