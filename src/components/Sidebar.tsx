import './styles/Sidebar.css';
import arrowRight from '../assets/arrow_right.png';
import { useEffect, useState } from 'react';

const getLeftValue = (width: number) => {
	if (width >= 577 && width <= 768) return '-44%';
	if (width <= 576) return '-74%';
	return '0';
};

const Sidebar = () => {
	const initialWidth = window.innerWidth;

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [sidebarOpen, setSidebarOpen] = useState(initialWidth > 768);
	const [leftValue, setLeftValue] = useState(getLeftValue(initialWidth));

	const [isOverflown, setIsOverflown] = useState(false);


	useEffect(() => {
		const handleWindowResize = () => {
			const width = window.innerWidth;
			const mobile = width <= 768;

			setIsMobile(mobile);
			setLeftValue(getLeftValue(width));
			setSidebarOpen(!mobile);
			setIsOverflown(sidebar?.scrollHeight! > window.innerHeight ? true : false);
		};

		const sidebar = document.getElementById('sidebar');
		setIsOverflown(sidebar?.scrollHeight! > window.innerHeight ? true : false);

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleSidebar = () => {
		setSidebarOpen((prev) => !prev);
	};

	return (
		<>
			<div
				className="sidebarContainer"
				data-testid="sidebarContainer"
				style={{ left: sidebarOpen ? 0 : leftValue }}
			>
				<div id='sidebar' className="sidebar" data-testid="sidebar" style={{ margin: isOverflown ? 0 : 'auto', overflowY: isOverflown ? 'scroll' : 'hidden' }}>
					<div className="skillsColumn">
						<h2>Skills</h2>
						<p className="sidebarSmallTitle">Programming</p>
						<p className="info">
							Javascript | HTML | CSS | React Native | Flutter |
							React | Python | Google Apps Script
						</p>

						<p className="sidebarSmallTitle">
							Development, Design & CMS Tools
						</p>
						<p className="info">
							Figma | WordPress | GitHub | Adobe Illustrator |
							Adobe Photoshop | Adobe InDesign
						</p>

						<p className="sidebarSmallTitle">Language</p>
						<p className="info">
							Finnish – First language <br /> English – B2/C1
						</p>
					</div>

					<div className="contactColumn">
						<h2>Contact & Socials</h2>
						<p className="sidebarSmallTitle">GitHub & Figma</p>
						<p className="info">mkytomies</p>
						<p className="sidebarSmallTitle">Email</p>
						<p className="info">moonakytomies@gmail.com</p>
					</div>
				</div>
				<div
					className="arrow"
					onClick={handleSidebar}
					style={{
						rotate: sidebarOpen ? '180deg' : '0deg',
						visibility: isMobile ? 'visible' : 'hidden',
					}}
					data-testid="arrow"
				>
					<img
						src={arrowRight}
						alt={
							sidebarOpen
								? 'Left pointing arrow'
								: 'Right pointing arrow'
						}
					/>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
