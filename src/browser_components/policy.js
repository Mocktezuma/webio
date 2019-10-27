import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Policy() {
	return (
		<section className="policy__wrapper text__center">
			<span className="large__text">Policy</span>
			<section className="policy__body text__left simple__shadow">
				<h1>Header</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</section>
			<div className="app__footer">
				<h4>WebioCoop &copy; 2019</h4>
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
