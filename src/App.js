import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { SinglePage } from "./pages/SinglePage/SinglePage";
import { CHARACTER_URL } from "./constants";
import "./app.css";

function App() {
  const [clickedChar, setClickedChar] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(CHARACTER_URL)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  console.log(data);

  return (
    <div className="App">
      {!clickedChar ? (
        <HomePage characters={data} setClickedChar={setClickedChar} />
      ) : (
        <SinglePage clickedChar={clickedChar} setClickedChar={setClickedChar} />
      )}
    </div>
  );
}

export default App;
