import { Link } from 'react-router';

import './styles/ProjectTile.css';

import reactDine from '../assets/reactDine.png';
import lockbox from '../assets/lockbox.jpg';
import trainingTracker from '../assets/trainingTracker-placeholder.png';

const ProjectTile = () => {
    return(
        <>
            <div className="projectTile">
                <img className='projectImage' src={reactDine}/>
                <div className='projectDetails'>
                    <h2 className='projectName'>ReactDine</h2>
                    <p className='projectDescription'>Description here, Description here, Description here,</p>
                    <div className='buttons'>
                        <Link className='button' to={''}>GitHub</Link>
                        <Link className='button' to={''}>Figma</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectTile;