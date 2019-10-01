import React, { useState } from 'react';

import Service from './child_components/service';

import style from './services.module.css';

// media imports
import strategyImage from '../../media/strategy.png';
import sourceCodeImage from '../../media/source-code.png';
import paperPlaneImage from '../../media/paper-plane.png';
import monitorImage from '../../media/monitor.png';

function Services() {
	// services page
	const [ open, setOpen ] = useState(true);
	return (
		<section className={style.wrapper}>
			<div className={style.motd}>
				<h1>OUR SERVICES</h1>
				<span className={style.largeText}>Let's Get to Work</span>
			</div>

			<section className={style.services}>
				<Service
					dynamicImage={strategyImage}
					serviceTitle="Strategy and Planning"
					serviceNotes="One of the most important steps in creating your brand or startup is making a planned out strategy for it, And It's very helpful to have more on your team to help take some of the load off, and create a stress free game plan."
				/>

				<Service
					dynamicImage={monitorImage}
					serviceTitle="Build your UI and UX"
					serviceNotes="Somethings are tougher than others, and trying to build a fluid UI design that performs the best when it comes to user experience is that something. But we love to brainstorm and throw out inevative ideas that will come together, and pave the way for something beutiful."
				/>

				<Service
					dynamicImage={sourceCodeImage}
					serviceTitle="Develop"
					serviceNotes="Developing your webapp or website can sometimes seem overwhelimg, but we have a team of eager learners ready to develop untill everyone is happy."
				/>

				<Service
					dynamicImage={paperPlaneImage}
					serviceTitle="Build and Publish"
					serviceNotes="Take your idea, and develop to perfection before finally Publishing it to the world and get your brand catching eyes all over the world. If you have plans for your startup or you just need a quick rebranding, feel free to get in contact with us and we will ask you some fun questions so we can get to know the plan and get the ball rolling!"
				/>
			</section>

			<section className={style.getStarted}>
				<p>
					If you have plans for your startup or you just need a quick rebranding, feel free to get in contact
					with us and we will ask you some fun questions so we can get to know the plan and get the ball
					rolling!
				</p>
				<form action="" method="post">
					<input type="email" name="uEmail" id="userEmail" placeholder="Business Email" required />
					<button type="submit" onClick={() => setOpen(!open)}>
						Get in Contact
					</button>
				</form>
				<h1>-or-</h1>
				<span>email us directly: email@webiocoop.com</span>
				<div className={open ? 'signupSection-closed' : 'signupSection-open'}>
					<div className="backgroundBlur" />
					<form action="" method="POST" className="signUp">
						<h1>Sign Up</h1> <br />
						<label htmlFor="signUpUserName">Display Name</label>
						<input type="text" name="uName" id="signUpUserName" required />
						<label htmlFor="signUpUserEmail">Personal Email</label>
						<input type="email" name="uEmail" id="signUpUserEmail" required />
						<label htmlFor="signUpUserPassword">Unique Password</label>
						<input type="password" name="uPass" id="signUpUserPassword" required />
						<input type="checkbox" name="userAgreement" id="userAgreement" required />
						<br />
						<br />
						<button type="submit">Create Account</button>
						<span className="cancel" onClick={() => setOpen(!open)}>
							Cancel
						</span>
					</form>
				</div>
			</section>
		</section>
	);
}

export default Services;
