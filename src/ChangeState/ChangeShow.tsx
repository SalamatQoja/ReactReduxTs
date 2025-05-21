import type React from "react";
import { useState } from "react";


interface NewChangeShow {
    value: string,
}

const ChangeShow: React.FC<NewChangeShow> = () => {
    const [update, setUpdate] = useState("");

    const changeTitle = () => {
        switch (update) {
            case "liquid":
                return "Wattery"
            case "gas":
                return "like Vapor"
            case "solid":
                return "ice ice"
            default:
                return "in Between"
        }
    };

    return (
        <div className="changeshow">
            <h1 className="change" >Change State</h1>
            <div style={{
                width: "250px", display: "flex", flexDirection: "row",
                justifyContent: "space-around", marginLeft: "40px", marginTop: "50px"
            }}>
                <button onClick={() => setUpdate("liquid")}  className="changebtn">Liquid</button>
                <button onClick={() => setUpdate("gas")} className="changebtn">Gas</button>
                <button onClick={() => setUpdate("solid")}  className="changebtn">Solid</button>
            </div>

            <h2>H20 is feeling..</h2>
            <h2>{changeTitle()}</h2>

            <div style={{ width: "200px", height: "30px" }}>
            </div>
        </div>
    );
}

export default ChangeShow;