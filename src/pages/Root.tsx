import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

const Root = () => {
    return(
        <>
            <Sidebar data-testid="sidebar" />
            <Navigation data-testid="nav" />
            <Outlet data-testid="outlet" />
        </>
    )
}

export default Root;