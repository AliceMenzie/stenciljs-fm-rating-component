import "./App.css";
import { UiCard } from "ui-library-react";
import frontImage from "./assets/images/icon-star.svg";
import backImage from "./assets/images/illustration-thank-you.svg";

function App() {
  return (
    <div className="app">
      <UiCard imageFront={frontImage} imageBack={backImage} />
    </div>
  );
}

export default App;
