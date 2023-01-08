import React from "react";
import { Outlet, Link } from "react-router-dom";
import { PostIt } from "./Post-it";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <>
                <header className="my-header">
                    <div className="header-container">
                        TESTING
                    </div>
                    <div className="header-container">
                        <Link to="/Home">Home</Link>
                        <Link to="/experience">Experience</Link>
                        <Link to="/education">Education</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </>
        );
    }
}

export { Navbar }