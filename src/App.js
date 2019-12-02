import React from "react";

// Seed Palette
import seedPalettes from "./seedPalettes";

// Components
import Palette from "./components/Palette";

function App() {
  return (
    <div>
      <Palette {...seedPalettes[0]} />
    </div>
  );
}

export default App;
