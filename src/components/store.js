import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import storeImage from '../media/online-store.png'

function Store() { // store page

  const [open, setOpen] = useState(true);

    return (
      <section className="store-container">
        <img src={storeImage} alt="online store illistration"/>
            <div className="loginSeciton">
                <h1>Webio Coop</h1>
                <span className="largeText">Shop</span>
                <form action="" method="POST" id="logIn">
                    <label htmlFor="logInUserName">User Name</label>
                    <input type="text" name="uName" id="logInUserName" required/>

                    <label htmlFor="logInUserPassword">Password</label>
                    <input type="password" name="uPass" id="logInUserPassword" required/>

                    <button type="submit">Log in</button>
                    <span id="signUp" onClick={() => setOpen(!open)}>Create Account</span>
                </form>
            </div>

            <div className={open ? "signupSection-closed" : "signupSection-open"}>
                <div className="backgroundBlur"></div>
                <form action="" method="POST" id="signUp">
                <h1>Sign Up</h1> <br/>
                    <label htmlFor="signUpUserName">Display Name</label>
                    <input type="text" name="uName" id="signUpUserName" required/>

                    <label htmlFor="signUpUserEmail">Personal Email</label>
                    <input type="email" name="uEmail" id="signUpUserEmail" required/>

                    <label htmlFor="signUpUserPassword">Unique Password</label>
                    <input type="password" name="uPass" id="signUpUserPassword" required/>

                    <input type="checkbox" name="userAgreement" id="userAgreement" required/>
                    <label htmlFor="userAgreement" id="userAgreementLabel">"I agree to the <Link to="/useragreement/">User Privacy Agreement</Link> apon creating my account."</label> <br/><br/>
                    
                    <button type="submit">Create Account</button>
                    <span id="cancel" onClick={() => setOpen(!open)}>Cancel</span>
                </form>
            </div>
        </section>
    );
  }

  export default Store