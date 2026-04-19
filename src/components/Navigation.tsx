import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import './styles/Navigation.css';

import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';

const Navigation = () => {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

	const handleActiveItem = () => {
		setMobileNavIsOpen(false);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			const mobile = window.innerWidth <= 600;
			setMobileNavIsOpen(!mobile);
		};

		handleWindowResize();

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleMobileNav = () => {
		setMobileNavIsOpen((prev) => !prev);
	};

	return (
		<>
			<div className="headerDiv" data-cy="headerDiv">
				<nav
					role="navigation"
					style={{
						visibility:
							mobileNavIsOpen || window.innerWidth > 600
								? 'visible'
								: 'hidden',
					}}
				>
					<ul className="list">
						<li>
							<NavLink
								to={'/'}
								onClick={() => {
									handleActiveItem();
								}}
								style={({ isActive }) => ({
									borderBottom: isActive
										? '4px solid #5FDC0C'
										: 'none',
								})}
								data-cy="navHomeLink"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/projects'}
								onClick={() => {
									handleActiveItem();
								}}
								style={({ isActive }) => ({
									borderBottom: isActive
										? '4px solid #5FDC0C'
										: 'none',
								})}
								data-cy="navPortfolioLink"
							>
								Projects
							</NavLink>
						</li>
					</ul>
				</nav>
				<img
					onClick={handleMobileNav}
					src={mobileNavIsOpen ? close : hamburger}
					className="hamburger"
					alt={mobileNavIsOpen ? 'x icon' : 'hamburger icon'}
					data-cy="hamburger"
				/>
			</div>
		</>
	);
};

export default Navigation;
