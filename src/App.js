import React from "react";
import { Cheff } from "./components/Cheff";
import { GameArea } from "./components/GameArea";
import GameContextProvider from "./contexts/GameContext";

function App() {
  return (
    <GameContextProvider>
      <GameArea
        h='100vh'
        w='100vw'
      >
        {({ size }) => (
          <Cheff />
        )}
      </GameArea>
    </GameContextProvider>
  );
}

export default App;
