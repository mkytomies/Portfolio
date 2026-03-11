import './styles/Sidebar.css';
import arrowRight from '../assets/arrow_right.png';
import { useEffect, useState } from 'react';


const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const handleWindowResize = () => {
            const mobile = window.innerWidth <= 600;
            setSidebarOpen(!mobile);
        };

        handleWindowResize();

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <>
            <div className="sidebarContainer" data-testid='sidebarContainer' style={{left: sidebarOpen ? 0 : "-74%"}}>
                <div className="sidebar" data-testid='sidebar'>
                    <div className='skillsColumn'>
                        <h2>Skills</h2>
                        <p className="sidebarSmallTitle">Programming</p>
                        <p className='info'>Javascript | HTML | CSS | React Native | Flutter | React | Python | Google Apps Script </p>

                        <p className="sidebarSmallTitle">Development, Design & CMS Tools</p>
                        <p className='info'>Figma | WordPress | GitHub | Adobe Illustrator | Adobe Photoshop | Adobe InDesign</p>

                        <p className="sidebarSmallTitle">Language</p>
                        <p className='info'>Finnish – First language <br/> English – B2/C1</p>
                    </div>
                    
                    <div className='contactColumn'>
                        <h2>Contact <br />& Socials</h2>
                        <p className="sidebarSmallTitle">GitHub</p>
                        <p className='info'>mkytomies</p>
                        <p className="sidebarSmallTitle">Figma</p>
                        <p className='info'>mkytomies</p>
                        <p className="sidebarSmallTitle">Email</p>
                        <p className='info'>moonakytomies@gmail.com</p>
                    </div>
                </div>
                <div className="green" />
                <div className='arrow' 
                    onClick={handleSidebar} 
                    style={{
                        rotate: sidebarOpen ? '180deg' : '0deg',
                        visibility: innerWidth < 600 ? 'visible' : 'hidden'
                    }}
                    data-testid='arrow'
                >
                    <img src={arrowRight} alt={sidebarOpen ? "Left pointing arrow" : "Right pointing arrow"} />
                </div>
            </div>
        </>
    )
}

export default Sidebar;