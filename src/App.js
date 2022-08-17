import "./App.css";
import RandomEmoji from "./components/RandomEmoji";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Random Emoji Apps</title>
      </Helmet>
      <RandomEmoji />
    </>
  );
}

export default App;
