import React from "react";
import Button from "./components/Button";
import Icons from "./components/Icons";

function App() {
  return (
    <div>
      <Button small>It is a small button</Button>
      <Icons.ReactLogoIcon style={{ height: 32 }} />
    </div>
  );
}

export default App;
