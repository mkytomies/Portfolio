import ProjectTile from '../components/ProjectTile';

import portfolio from '../assets/portfolio.png';
import reactDine from '../assets/reactDine.png';
import lockbox from '../assets/lockbox.jpg';
import comingSoon from '../assets/coming-soon.png';

type Project = {
	name: string;
	image: string;
	imageAlt: string;
	description: string;
	gitHub: string;
	figma?: string;
};

const Portfolio = () => {
	const projects: readonly Project[] = [
		{
			name: 'Portfolio',
			image: portfolio,
			imageAlt: 'Picture of Portfolio',
			description:
				'Portfolio is my thesis project that you are currently on. I built it using React and TypeScript. Component and integration testing was done using Jest and RTL and E2E testing using Cypress. It is hosted on GitHub pages and CI/CD pipelines run on GitHub Actions.',
			gitHub: 'https://github.com/mkytomies/Portfolio',
			figma: 'https://www.figma.com/community/file/1623305769059810923/portfolio',
		},
		{
			name: 'ReactDine',
			image: reactDine,
			imageAlt: 'Picture of ReactDine',
			description:
				'ReactDine is a frontend school Project made using React. It’s a mock restaurant page where users can place orders. ',
			gitHub: 'https://github.com/mkytomies/reactdine',
			figma: 'https://www.figma.com/community/file/1549140004070639607/reactdine',
		},
		{
			name: 'LockBox',
			image: lockbox,
			imageAlt: 'Picture of Lockbox',
			description:
				'LockBox is a school project, where I did the frontend using React Native. Users can create an account, send and receive messages, add contacts and manage their account settings.',
			gitHub: 'https://github.com/rassehub/lockbox-messenger',
			figma: 'https://www.figma.com/community/file/1549142127375815676/lockbox',
		},
		{
			name: 'Training Tracker',
			image: comingSoon,
			imageAlt: 'Picture of Training Tracker',
			description:
				'Training Tracker is a school project, where I did the frontend using Flutter. Users can track their workouts in the app.',
			gitHub: 'https://github.com/Masuxd/TrainingTracker',
		},
	];

	return (
		<>
			<div className="mainContainer">
				<h1>Projects</h1>
				{projects.map((project) => (
					<ProjectTile key={project.name} {...project} />
				))}
			</div>
		</>
	);
};

export default Portfolio;
