import { useEffect } from "react";
import { useState } from "react";
import "../style/navbar.css";

const Navbar = () => {

    const [selected,SetSelected] = useState("call");

    useEffect(()=>console.log(selected),[selected]);

    return ( 
        <div className="navbar">
            <div className="navbarsafespace">
                <div className={selected === "call"?"navactive":""} onClick={()=>SetSelected("call")}> <h4 className={selected === "call"?"h4active":""}>Call Creation</h4></div>
                <div className={selected === "order"?"navactive":""} onClick={()=>SetSelected("order")}> <h4 className={selected === "order"?"h4active":""}>Orders</h4></div>
                <div className={selected === "execute"?"navactive":""} onClick={()=>SetSelected("execute")}> <h4 className={selected === "execute"?"h4active":""}>Executed</h4></div>
                <div className="icons">
                    <div className="navbaricons search"></div>
                    <div className="navbaricons notification"></div>
                    <div className="navbaricons profile"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;