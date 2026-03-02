import { Link } from "react-router";

import "./styles/Navigation.css"

const Navigation = () => {

    return(
        <>
            <div className="headerDiv">
                <nav>
                    <ul className="list">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation;