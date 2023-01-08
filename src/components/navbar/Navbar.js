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
                        <Link className="link-style" to="/Home"><PostIt content={"Home"}/></Link>
                        <Link className="link-style" to="/experience"><PostIt content={"Experience"}/></Link>
                        <Link className="link-style" to="/education"><PostIt content={"Education"}/></Link>
                        <Link className="link-style" to="/projects"><PostIt content={"Projects"}/></Link>
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