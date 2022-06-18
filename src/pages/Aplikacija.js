import { useState } from "react";
import ValueButton from "../components/ValueButton";
import "./Aplikacija.css";
import { useLocation } from "react-router-dom";

function Aplikacija() {
    const location = useLocation();
    const [result, setResult] = useState("");

    const klikDugme = (e) => {
        setResult(result.concat(e.target.name));
    };

    const backspace = () => {
        setResult("");
    };

    const racunanjeVrednosti = () => {
        try {
            setResult(eval(result).toString());
        } catch (greska) {
            setResult("Greska pri unosu");
            setTimeout(backspace, 2000);
        }
    };

    return (
        <div className="App">
            <p className="tekstIspis">{location.state}</p>
            <h1>Aplikacija</h1>
            <div className="calculator">
                <div className="calc-out">
                    <input type="text" value={result} />
                </div>
                <div className="calc-in">
                    <div className="row">
                        <ValueButton name="7" value="7" fun={klikDugme} />
                        <ValueButton name="8" value="8" fun={klikDugme} />
                        <ValueButton name="9" value="9" fun={klikDugme} />
                        <ValueButton name="+" value="+" fun={klikDugme} />
                    </div>
                    <div className="row">
                        <ValueButton name="4" value="4" fun={klikDugme} />
                        <ValueButton name="5" value="5" fun={klikDugme} />
                        <ValueButton name="6" value="6" fun={klikDugme} />
                        <ValueButton name="-" value="-" fun={klikDugme} />
                    </div>
                    <div className="row">
                        <ValueButton name="1" value="1" fun={klikDugme} />
                        <ValueButton name="2" value="2" fun={klikDugme} />
                        <ValueButton name="3" value="3" fun={klikDugme} />
                        <ValueButton name="*" value="&times;" fun={klikDugme} />
                    </div>
                    <div className="row" id="pos">
                        <ValueButton name="0" value="0" fun={klikDugme} />
                        <ValueButton id="sirok" name="del" value="Del" fun={backspace} />
                        <ValueButton name="=" value="=" fun={racunanjeVrednosti} />
                        <ValueButton name="/" value="&divide;" fun={klikDugme} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aplikacija;
