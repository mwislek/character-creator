import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="background" />
      <div className="foreground">
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
