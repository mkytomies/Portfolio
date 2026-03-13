import ProjectTile from "../components/ProjectTile";

import reactDine from '../assets/reactDine.png';
import lockbox from '../assets/lockbox.jpg';

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
            name: "ReactDine", 
            image: reactDine, 
            imageAlt: 'Picture of ReactDine',
            description: "Description here, Description here, Description here,", 
            gitHub: "https://github.com/mkytomies/reactdine", 
            figma: "https://www.figma.com/community/file/1549140004070639607/reactdine",
        },
        {
            name: "LockBox",
            image: lockbox,
            imageAlt: 'Picture of Lockbox',
            description: "Description here, Description here, Description here,",
            gitHub: "https://github.com/rassehub/lockbox-messenger",
            figma: "https://www.figma.com/community/file/1549142127375815676/lockbox",
        },
        {
            name: "Training Tracker",
            image: lockbox,
            imageAlt: 'Picture of Training Tracker',
            description: "Description here, Description here, Description here,",
            gitHub: "https://github.com/Masuxd/TrainingTracker",
        },
    ]

    return(
        <>
            <div className="mainContainer">
                <h1>Portfolio</h1>
                {projects.map(project => (
                    <ProjectTile key={project.name} {...project}/>
                ))}
            </div>
        </>
    )
}

export default Portfolio;