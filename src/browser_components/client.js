import React from "react";

export default function Client() {
	return (
		<section className="client__wrapper">
			<div className="client__motd">
				<span className="large__text">WebioCoop</span>
				<p className="motd__textBody">
					A modern startup's worker cooperative assistant.
				</p>
			</div>
			<div className="login">
				<form>
					<input type="email" placeholder="Client Email" required />
					<input type="password" placeholder="Client Passphrase" required />
					<button type="submit" className="simple__shadow">
						Login
					</button>
				</form>
			</div>
		</section>
	);
}
