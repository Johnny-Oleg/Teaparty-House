import React from 'react';

import './Footer.css';

const Footer = () => {
	const yearDate = new Date().getFullYear().toString();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<p className="footer__text">Powered by</p>
					<div className="footer__logos">
						<a
							className="footer__link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="footer__img" src="./images/react-logo.svg" alt="react" />
						</a>
						<a
							className="footer__link"
							href="https://redux.js.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="footer__img" src="./images/redux-logo.svg" alt="redux" />
						</a>
					</div>
					<div className="footer__copy">
						<p className="footer__text">&copy; Johnny Neojiny {yearDate}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;