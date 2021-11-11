import React, { useState } from "react";
import "./navbarstyle.css";


function Navbar() {

    const [navstyle, setnavstyle] = useState("navlink1");
    const [name, setname] = useState("namelejhro1");


    window.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
        const curscrollpos = window.pageYOffset;
        if (curscrollpos >= 11) {
            setname("namelejhro2")
            setnavstyle("navlink2")
        }

    })
   
    return (
        <div>
            <header className="lejhro">
                <div className={name}>
                    <h1>L</h1>
                    <h1>E</h1>
                    <h1>J</h1>
                    <h1>H</h1>
                    <h1>R</h1>
                    <h1>O</h1>
                </div>
                <div className={navstyle}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                </div> 
            </header>
        </div>

    );
}

export default Navbar;
