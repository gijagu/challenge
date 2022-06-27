import React from "react";
import Header from "./components/Header";
import GetGifts from "./components/GetGifts";
import SecondChallenge from "./containers/SecondChallenge";

const App = () => {
  return (
    <>
      <Header />
      <GetGifts />
      <hr />
      <SecondChallenge />
    </>
  );
};

export default App;
