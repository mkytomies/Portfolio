import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

const Root = () => {
    return(
        <>
            <Sidebar />
            <Navigation />
            <Outlet />
        </>
    )
}

export default Root;