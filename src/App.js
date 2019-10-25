import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./css/app.css";
import "./css/filter_styles.css"; //seperate stylesheet for extra styling (i.e shadowing, grid)

import logo from "./images/transparent1024-2.png";

import Home from "./browser_components/home";
import Client from "./browser_components/client";
import Get_Started from "./browser_components/get_started";

function App() {
	return (
		<Router>
			<section className="App__Container">
				<nav>
					<ul>
						<li>
							<Link to="/">
								<img src={logo} className="simple__shadow" />
							</Link>
						</li>
						<li>
							<Link to="/client">
								<span className="client__button">Client Login</span>
							</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/client">
						<Client />
					</Route>
					<Route path="/getstarted">
						<Get_Started />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</section>
		</Router>
	);
}

export default App;
