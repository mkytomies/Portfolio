import { Link } from "react-router";
import { useEffect, useState } from "react";
import "./styles/Navigation.css";

import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState(window.location.pathname);
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    const handleActiveItem = (clickedItem: string) => {
        setActiveItem(clickedItem);
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
        setMobileNavIsOpen(prev => !prev);
    };

    return(
        <>
            <div className="headerDiv" data-cy="headerDiv">
                <nav role="navigation" style={{visibility: mobileNavIsOpen || window.innerWidth > 600 ? 'visible' : 'hidden'}}>
                    <ul className="list">
                        <li>
                            <Link
                                to={'/'}
                                onClick={() => { handleActiveItem('/') }}
                                style={{ borderBottom: activeItem === '/' ? '4px solid #5FDC0C' : 'none' }}
                                data-cy="navHomeLink"
                            >Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/projects'}
                                onClick={() => { handleActiveItem('/projects') }}
                                style={{ borderBottom: activeItem === '/projects' ? '4px solid #5FDC0C' : 'none' }}
                                data-cy="navPortfolioLink"
                            >Projects
                            </Link>
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
    )
}

export default Navigation;