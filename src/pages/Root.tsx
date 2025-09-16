import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

const Root = () => {
    return(
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Root;