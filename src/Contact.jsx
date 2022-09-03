import React, { useContext, useState } from "react";
import { AppContext } from "./App";
const Contact = () => {
    const { username, setUsername } = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <h3>Connection Ways To {username}</h3>
            <p>
                Email: Payam.Hayati@yahoo.com
                <br />
                Mobile: 0937 1464 764
            </p>
            <input
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    setUsername(newUsername);
                }}
            >
                Change Name!
            </button>
        </div>
    );
};

export default Contact;
