import "./Unos.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Unos = () => {
   const [txt, setTxt] = useState("");

    const navigate = useNavigate();

    const prosledi = e => {
        e.preventDefault();
        navigate("/", { state: txt });
    };

    const kupljenje = e => {
        setTxt(e.target.value);
        //setState({...state, [e.target.name]: e.target.value});
        //let polje = document.querySelector('input').value;
        //setTxt(polje);
    };


    return (
        <>
            <h1>Unos</h1>
            <form onSubmit={prosledi}>
                <div>
                    <label>Tekst: </label>
                    <br />
                    <input name="tekst" type="text" placeholder="Unesite text" onChange={kupljenje} />
                </div>
                <input type="submit" className="dugme" value="Potvrdi" />
            </form>
        </>
    );
};

export default Unos;
