import "./Unos.css";
import { useNavigate } from "react-router-dom";

const Unos = () => {
  let txt="";

  const navigate = useNavigate();

  const prosledi = (e) => {
    e.preventDefault();
    navigate("../Aplikacija", {state: {ime: txt}});
  };

  const kupljenje = (e) => {
    if (e.target.value != null)
      txt = e.target.value;
    else
      txt = "ovde se unosi tekst";
  };

  return (
    <>
      <h1>Unos</h1>
      <form onSubmit={prosledi}>
        <div>
          <label>Tekst: </label>
          <br />
          <input type="text" placeholder="Unesite text" onChange={kupljenje} />
        </div>
        <button type="submit" className="dugme">
          Unesi
        </button>
      </form>
    </>
  );
};

export default Unos;
