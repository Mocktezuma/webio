import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../css/app.min.css";

import storeImage from '../../media/online-store.png'

function LogIn() {

    const [open, setOpen] = useState(true);

    return (
        <section className="store-container">
        <img src={storeImage} alt="online store illistration"/>
            <div className="loginSeciton">
                <h1>Webio Coop</h1>
                <span className="largeText">Shop</span>
                <form action="" method="POST" id="logIn">
                    <label htmlFor="uesrName">User Name</label>
                    <input type="text" name="uName" id="userName" required/>

                    <label htmlFor="userPassword">Password</label>
                    <input type="password" name="uPass" id="userPassword" required/>

                    <button type="submit">Log in</button>
                    <span id="signUp" onClick={() => setOpen(!open)}>Create Account</span>
                </form>
            </div>

            <div className={open ? "signupSection-closed" : "signupSection-open"}>
                <div className="backgroundBlur"></div>
                <form action="" method="POST" id="signUp">
                <h1>Sign Up</h1> <br/>
                    <label htmlFor="userName">Display Name</label>
                    <input type="text" name="uName" id="userName" required/>

                    <label htmlFor="userEmail">Personal Email</label>
                    <input type="email" name="uEmail" id="userEmail" required/>

                    <label htmlFor="userPassword">Unique Password</label>
                    <input type="password" name="uPass" id="userPassword" required/>

                    <input type="checkbox" name="userAgreement" id="userAgreement" required/>
                    <label htmlFor="userAgreement">"I agree to the <Link to="/useragreement/">User Privacy Agreement</Link> apon creating my account."</label> <br/><br/>
                    
                    <button type="submit">Create Account</button>
                    <span id="cancel" onClick={() => setOpen(!open)}>Cancel</span>
                </form>
            </div>
        </section>
    );
}

export default LogIn;