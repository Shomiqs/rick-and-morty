import { Card } from "../../components/Card/Card";
import "./HomePage.css";

export const HomePage = ({ characters, setClickedChar }) => {
  console.log(characters);
  return (
    <div className="cards-wrapper">
      {characters.map((char) => {
        return <Card character={char} setClickedChar={setClickedChar} />;
      })}
    </div>
  );
};
