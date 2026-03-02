import { Link } from 'react-router';

import './styles/ProjectTile.css';

type ProjectTileProps = {
    name: string;
    image: string;
    description: string;
    gitHub: string;
    figma?: string;
};

const ProjectTile = ({name, image, description, gitHub, figma}: ProjectTileProps) => {

    return(
        <>
            <div className="projectTile">
                <img className='projectImage' src={image}/>
                <div className='projectDetails'>
                    <h2 className='projectName'>{name}</h2>
                    <p className='projectDescription'>{description}</p>
                    <div className='buttons'>
                        <Link className='button' to={gitHub}>GitHub</Link>
                        {figma ? <Link className='button' to={figma}>Figma</Link> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectTile;