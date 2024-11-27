import { Card } from "../../components/Card/Card";
import "./home-page.css";
import { Pagination } from "../../components/Pagination/Pagination";

export const HomePage = ({
  characters,
  setClickedChar,
  nextPage,
  page,
  previousPage,
  setPage,
}) => {
  return (
    <>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => {
            previousPage();
          }}
        >
          Prev
        </button>
        <Pagination page={page} setPage={setPage} />
        <button onClick={() => nextPage()} disabled={page === 42}>
          Next
        </button>
      </div>
      <div className="cards-wrapper">
        {characters.map((char) => {
          return <Card character={char} setClickedChar={setClickedChar} />;
        })}
      </div>
    </>
  );
};
