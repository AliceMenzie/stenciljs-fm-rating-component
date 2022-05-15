import "./App.css";
import { UiCard } from "ui-library-react";
import logo from "./assets/images/icon-star.svg";
// import { setAssetPath } from "ui-library-react/dist/components";

// setAssetPath(document.currentScript.src);

function App() {
  return (
    <div className="App">
      <UiCard image={logo} />
    </div>
  );
}

export default App;
