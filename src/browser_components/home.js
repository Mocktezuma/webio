import React from "react";
import lax from "lax.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import house from "../images/House.svg";
import shop from "../images/Shop.svg";
import corperation from "../images/Corperation.svg";

export default function Home() {
	window.onload = function() {
		lax.setup(); // init

		const updateLax = () => {
			lax.update(window.scrollY);
			window.requestAnimationFrame(updateLax);
		};

		window.requestAnimationFrame(updateLax);
	};

	return (
		<section className="home__wrapper">
			<div className="motd lax" data-lax-opacity="0 1, 100 1, 400 0">
				<span className="large__text">WebioCoop</span>
				<p className="motd__textBody">
					A modern startup's worker cooperative assistant.
				</p>
				<div className="cta__container">
					<a href="#services__wrapper" className="button__medium">
						Services
					</a>
					<Link to="/client">
						<span className="client__button">Client Login</span>
					</Link>
				</div>
			</div>
			<About />
			<Services />
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

// About section

function About() {
	return (
		<section className="about__wrapper">
			<div className="motd lax" data-lax-opacity="0 1, 2160 1, 2500 0">
				<span className="large__text">About Us</span>

				<div className="about__textBody">
					<h1>Our Mission</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>

				<div className="about__textBody">
					<h1>What is "Worker Cooperative"</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>

				<div className="about__textBody">
					<h1>How we build together</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</section>
	);
}

// Services section

function Services() {
	return (
		<section id="services__wrapper">
			<span className="large__text">Services</span>
			<div className="services">
				<Service_Item
					service__image={house}
					service__name="Startup"
					service__details="For the smaller, garage startups that need to get a quick website and brand up and running."
					service__number="/getstarted?item1"
				/>

				<Service_Item
					service__image={shop}
					service__name="Small Shop"
					service__details="You already have something started, but you just need a website to help make shopping at your store more simple."
					service__number="/getstarted?item2"
				/>

				<Service_Item
					service__image={corperation}
					service__name="Enterprise"
					service__details="Not liking your old design or brand? then let us help you get a fresh start!"
					service__number="/getstarted?item3"
				/>
			</div>
		</section>
	);
}

function Service_Item({
	service__name,
	service__details,
	service__image,
	service__number
}) {
	return (
		<div className="service__item simple__shadow">
			<div className="item__head">
				<img src={service__image} />
				<h1>{service__name}</h1>
			</div>
			<p>{service__details}</p>
			<Link to={service__number}>
				<span className="button__medium">Get Started</span>
			</Link>
		</div>
	);
}
