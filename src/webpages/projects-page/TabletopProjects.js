import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopProjects.css'
import uf from '../../images/ufgator.jpg'

/*
Projects Completed:
    Postcard Portfolio
        Languages: HTML, CSS, JS
        Frameworlks: React, Create-React-App, React Transititions, React Router, Bootstrap 4
    Cellular Automaton
        Langauges: HTML, CSS, JS
    Boids
        Langauges: HTML, CSS, JS
    Minesweeper
        Languages: C++
        Frameworks/Libraries: SFML
    PS2 Controlled 3-Axis robotic arm
        Languages: Arduino/C++
        Frameworks: PS2lib
Projects In Progress
    Rubix Cube Solver : Going to migrate to Unreal Engine for more applicable graphics programming experience
        Languages: HTML, CSS, JS
        Frameworks: three.js, create-react-app
    Stack-Overflow-Content-Widener
        Languages: HTML, CSS, JS
        Frameworks: Chrome-Extension
    Minesweeper AI / Minesweeper Refactored
        Languages: C++
        Frameworks: SFML
    Camera Filter:
        Languages: C++
        Frameworks: OpenCV
*/

class TabletopProjects extends React.Component {

    /*
    Project Display Template:
        Title
        Description
        List of things i used? + important aspects of it.
    */
    render() {
        return (
            <>
                <TitleLabel content={"PROJECTS"} />
                <>
                    <Postcard
                        type={"description"}
                        contentL={"Postcard Portfolio"}
                        contentR={"Development of my own portfolio website. Created with the React Framework using create-react-app alongside React Transitions for animation and React Router for page navigation."
                        } />
                    <Postcard
                        type={"pictureRList"}
                        url={uf}
                        contentL={"Languages: HTML, CSS, JavaScript|" +
                            "Frameworks: React, Create-React-App, React Transitions, React Router, Bootstrap 4"
                            } />
                </>
            </>
        );
    }
}

export { TabletopProjects };