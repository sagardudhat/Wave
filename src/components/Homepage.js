// src/Home.js
import React, {useState} from 'react';
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../services/googleConfig";

function HomePage() {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        }).catch((e) => {
            console.log(e)
        });
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    Google Firebase Auth
                </div>
                <div className="card-body">
                    {!value ? (
                        <button className="g-button" onClick={handleClick}>
                            Sign in with Google
                        </button>
                    ) : (
                        <div className="g-button">Welcome, {value}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
