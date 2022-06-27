import React from "react";
import Header from "./components/Header";
import GetGifts from "./components/GetGifts";

const App = () => {
  return (
    <>
      <Header />
      <GetGifts msg="soy un componente" />
    </>
  );
};

export default App;
