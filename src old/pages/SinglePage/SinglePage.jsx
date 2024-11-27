import "./SinglePage.css";
import Modal from "../../components/Modal/Modal";
import BasicButton from "../../components/Button/Button";

export const SinglePage = ({ clickedChar, setClickedChar }) => {
  console.log(clickedChar);
  return (
    <div className="single-page">
      <BasicButton text={"Go back"} handle={setClickedChar} />
      <div>
        <img src={clickedChar.image} alt="character" />
      </div>
      <div>
        <h2>Name: {clickedChar.name}</h2>
        <h3>Species: {clickedChar.species}</h3>
        <h3>Gender: {clickedChar.gender}</h3>
        <h3>Status: {clickedChar.status}</h3>
        <h3>Location: {clickedChar.location.name}</h3>
      </div>
      <div className="episodes">
        {clickedChar.episode.map((e) => {
          return <Modal episodeUrl={e} />;
        })}
      </div>
      <Modal />
    </div>
  );
};
