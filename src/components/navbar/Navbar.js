import React from "react";
import { Outlet, Link } from "react-router-dom";
import { PostIt } from "./Post-it";
import { NamePlate } from "../NamePlate";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <>
                <header className="my-header">
                    <NamePlate />
                    <div className="header-container">
                        <Link onClick={() => {
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        }} className="link-style" to="/home">
                            <PostIt content={"Home"} />
                        </Link>
                        <Link onClick={() => {
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        }} className="link-style" to="/experience">
                            <PostIt content={"Education\n&\nExperience"} />
                        </Link>
                        <Link onClick={() => {
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        }} className="link-style" to="/projects">
                            <PostIt content={"Projects"} />
                        </Link>
                        <Link onClick={() => {
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        }} className="link-style" to="/contact">
                            <PostIt content={"Contact Me"} />
                        </Link>
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