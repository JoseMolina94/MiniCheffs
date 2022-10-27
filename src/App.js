import React from "react";
import { Cheff } from "./components/Cheff";
import { GameArea } from "./components/GameArea";

function App() {
  return (
    <GameArea
      h='100vh'
      w='100vw'
    >
      <Cheff />
    </GameArea>
  );
}

export default App;
