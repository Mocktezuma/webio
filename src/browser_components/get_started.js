import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import house from "../images/House.svg";
import shop from "../images/Shop.svg";
import Corperation from "../images/Corperation.svg";

export default function Get_Started() {
	const currentURL = window.location.href;
	const urlCheck = ["item1", "item2", "item3"];

	function GetStarted() {
		let itemNum = urlCheck[0];
		let index = currentURL.indexOf(itemNum);

		if (index !== -1) {
			// have this be rendered if subtext is found in url!
			var itemName = "Startup";
			var itemDesc =
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		} else if (index === -1) {
			let itemNum = urlCheck[1];
			let index = currentURL.indexOf(itemNum);

			if (index !== -1) {
				var itemName = "Small Shop";
				var itemDesc =
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			} else {
				let itemNum = urlCheck[2];
				let index = currentURL.indexOf(itemNum);

				if (index !== -1) {
					var itemName = "Enterprise";
					var itemDesc =
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
				}
			}
		}

		return (
			<section className="getStarted__wrapper">
				<div className="getStarted__left">
					<span className="large__text">{itemName}</span>
					<p>{itemDesc}</p>
				</div>
				<div className="getStarted__right">
					<form name="getStarted" id="getStarted__form" method="POST">
						<input
							type="text"
							name="uName"
							id="grid__a"
							className="simple__shadow"
							placeholder="Name"
						/>
						<input
							type="email"
							name="uEmail"
							id="grid__b"
							className="simple__shadow"
							placeholder="Business email"
						/>
						<textarea
							name="uNote"
							id="grid__c"
							className="simple__shadow"
							placeholder="Notes"
							maxLength="1024"
						/>
						<button type="submit" id="grid__d" className="simple__shadow">
							Get Started!
						</button>
					</form>
				</div>
				<div className="getStarted__footer">
					<span>WebioCoop &copy; 2019</span>
					<hr />
					<ul>
						<li>
							<Link to="/policy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/client">Client Login</Link>
						</li>
					</ul>
				</div>
			</section>
		);
	}

	return (
		<section className="get__started">
			<GetStarted />
		</section>
	);
}
