import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopProjects.css'
import uf from '../../images/ufgator.jpg'

/*
Projects Completed:
    Postcard Portfolio
        Languages: HTML, CSS, JS
        Frameworlks: React, Create-React-App
        Libraries: React Transitition Group, React Router, Bootstrap 4
    Cellular Automaton
        Langauges: HTML, CSS, JS
        Frameworks: JQuery, Bootstrap 4
    Boids
        Langauges: HTML, CSS, JS
        Libraries: JQuery, Bootstrap 4
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
                <TitleLabel content={"COMPLETED PROJECTS"} />
                <>
                    <Postcard
                        type={"description"}
                        contentL={"Postcard Portfolio"}
                        contentR={
                            "Development of my own portfolio website, " +
                            "created with React through create-react-app alongside the React Transition Group library for animation and React Router for page navigation. " +
                            "This project taught me the fundamentals of designing functional components with react as well as incorporating some supporting libraries to expand reacts capabilities. "
                        } />
                    <Postcard
                        type={"pictureRList"}
                        url={uf}
                        contentL={
                            "Duration: Jan 03, 2023 - Feb 11, 2023|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Frameworks: React, Create-React-App|" +
                            "Libraries: React Transition Group, React Router, Bootstrap 4"
                        } />



                    <Postcard
                        type={"description"}
                        contentL={"Cellular Automaton"}
                        contentR={
                            "Development of a cellular automaton with user modifiable state machine settings to create unique results when ran. " +
                            "This project taught me the basics of JQuery, DOM manipulation, and how to handle user inputs. " +
                            ""
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        url={uf}
                        contentR={
                            "Duration: June 9, 2022 - Sept 19, 2022|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: JQuery, Bootstrap 4"
                        }
                    />



                    <Postcard
                        type={"description"}
                        contentL={"Boids Simulation"}
                        contentR={
                            "This project created a web simulation of a boid type AI. " +
                            "This was my first project involving JQuery and allowed me to use it for user inputs and some dynamic DOM manipulation. " +
                            ""
                        }
                    />
                    <Postcard
                        type={"pictureRList"}
                        url={uf}
                        contentL={
                            "Duration: June 9, 2022 - June 28, 2022|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: JQuery, Bootstrap 4"
                        }
                    />



                    <Postcard
                        type={"description"}
                        contentL={"Homemade Monitor"}
                        contentR={
                            "Creation of a monitor for my home workstation from recycled parts. " +
                            "The LED screen was ripped from an old laptop and display is connected through a compatible part thrifted from eBay. " +
                            "The frame is created from scotch tape and up-cycled cardboard while the stand was created from a piece of styrofoam I had lying around. " +
                            "The project was light so I threw in a polished rock to increase stability. " +
                            "This project taught me to believe in myself."
                        }
                    />
                    <Postcard
                        type={"pictureRList"}
                        url={uf}
                        contentL={
                            "Duration: An Afternoon|" +
                            "Languages: en-us|" +
                            "Frameworks: Cardboard, Scotch Tape|" +
                            "Libraries: Styrofoam, A Cool Rock"
                        }
                    />
                </>


                <TitleLabel content={"IN-PROGRESS PROJECTS"} />
                <>
                    <Postcard
                        type={"description"}
                        contentL={"Minesweeper AI"}
                        contentR={
                            "For one of my classes, our final project was to create Minesweeper from scratch. " +
                            "Becasue this was early in my coding career, the code is very unoptimized. " +
                            "My plans are to refactor the code and create an AI over it which will be able to solve the board. " +
                            "The AI will use data I collect to find the safest tiles to start on and ones which result in the greatest reveal of tiles upon click. " +
                            "I plan on collecting the data using the engine I build after refactoring for analysis to create an efficient AI."
                        }
                    />
                    <Postcard
                        type={"pictureRList"}
                        url={uf}
                        contentL={
                            "Duration: Dec 23, 2023 - Present|" +
                            "Languages: C++|" +
                            "Libraries: SFML"
                        }
                    />



                    <Postcard
                        type={"description"}
                        contentL={"Chaos Game"}
                        contentR={
                            "A Chaos Game is a mathematical method to create fractals from a shape by calculated placement of points within the shapes perimeter. " +
                            "The chaos game I'm developing takes the shape of a triangle and asks for the user to place the three points of the triangle and one starting point, then is asked to run the simulation. " +
                            "The program then will create a fractal within the bounds of the user placed triangle through an animation and the user can watch as the fractal takes shape."
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        url={uf}
                        contentR={
                            "Duration: Sept 14, 2022 - Present|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: JQuery, Bootstrap 4"
                        }
                    />



                    <Postcard
                        type={"description"}
                        contentL={"Camera Filter"}
                        contentR={
                            "An OpenCV project revolving around manipulating video frames in real time. " +
                            "I want to be able to create a variety of filters like random static, horizontal/vertical waves, background erasure, mood detection, contrast/hue editing, and color inversion; all in real time from custom code. " +
                            "I want to create a custom data structure and data path which will store the position/state of the filter and apply it to each frame as it passes through before being displayed"
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        url={uf}
                        contentR={
                            "Duration: Nov 11, 2022 - Present|" +
                            "Languages: C++|" +
                            "Libraries: OpenCV"
                        }
                    />


                </>
            </>
        );
    }
}

export { TabletopProjects };