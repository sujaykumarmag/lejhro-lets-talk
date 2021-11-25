import React, { useState } from "react";
import "./letstalkstyle.css";
import { useHistory } from "react-router-dom";


function LetsTalk() {
    const [help, sethelp] = useState(false);
    const [btn, setbtn] = useState(true);
    const [back, setback] = useState("Hello! How can we help You?");
    const [dir, setdir] = useState("");
    const [sales, setsales] = useState(false);
    const [support, setsupport] = useState(false);
    const [homebtn, sethomesbtn] = useState(true);
    const history = useHistory();
    function handleClickEmailSales() {
        history.push("/email-sales")
    }
    function handleClickTechSupport() {
        history.push("/get-technical-support")
    }

    function handleClicksales() {
        setdir("Home/Sales");
        setsales(true);
        setback("Select your preferred contact channel:");
        sethomesbtn(false);
    }
    function handleClicksupport() {
        setdir("Home/Support");
        setsupport(true);
        setback("Select your preferred contact channel:");
        sethomesbtn(false);
    }
    function homeDirec() {
        sethomesbtn(true);
        setsales(false);
        setsupport(false);
        setdir("");
    }
    const salesbutton =
        <>
            <button className="salesques" >
                <div>
                    <p style={{ fontFamily: "'PT Sans', sans-serif", fontSize: "20px", textAlign: "start", padding: "20px" }}  onClick={handleClickEmailSales}>Email Sales</p>
                </div>
            </button>
        </>;
    const supportbutton =
        <>
            <button className="salesques" >
                <div>
                    <p style={{ fontFamily: "'PT Sans', sans-serif", fontSize: "20px", textAlign: "start", padding: "20px" }}  onClick={handleClickTechSupport}>Get Technical Support</p>
                </div>
            </button>
        </>;

    const buttonhome =
        <>
            <button onClick={handleClicksales} className="salesques" >
                <div>
                    <p style={{ fontFamily: "'PT Sans', sans-serif", fontSize: "20px", textAlign: "start", padding: "20px" }}>I have a Sales Question</p>
                </div>
            </button>
            <button className="supportques">
                <div>
                    <p onClick={handleClicksupport} style={{ fontFamily: "'PT Sans', sans-serif", fontSize: "20px", textAlign: "start", padding: "20px" }}>I need Support</p>
                </div>
            </button>
        </>;
    const div =
        <div className="letskeep">
            <header className="letskeepheader">
                <p className="directory" onClick={homeDirec}>{dir}</p>
                <button onClick={() => {
                    sethelp(false)
                    setbtn(true)
                }} className="minimize">-
                </button>
                <p style={{ color: "white", fontSize: "25px", textAlign: "start", fontFamily: "'PT Sans', sans-serif", paddingLeft: "20px", marginTop: "-30px" }}>{back}</p>
            </header>
            {homebtn ? buttonhome : null}
            {sales ? salesbutton : null}
            {support ? supportbutton : null}
        </div>;
        
    return (
        <footor>
            {help ? div : null}
            {btn ? <button className="image-button" onClick={() => {
                sethelp(true)
                setbtn(false)
            }}>
                Lets Talk
            </button> : null}



        </footor>
    );
}

export default LetsTalk;
