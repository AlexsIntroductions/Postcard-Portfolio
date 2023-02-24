import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopProjects.css'
import uf from '../../images/ufgator.jpg'
import boids from '../../images/Boids.PNG'
import cell from '../../images/Cellular-Automata.PNG'
import CV from '../../images/OpenCV.PNG'
import portfolio from '../../images/Postcard-Portfolio.PNG'
import socw from '../../images/StackOverflowContentWidener.jpg'
import monitor from '../../images/Monitor.jpg'
import arm from '../../images/PS2Arm.mp4'

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
                        in={false}
                        contentL={"Postcard Portfolio"}
                        contentR={
                            "Development of my own portfolio website, " +
                            "created with React through create-react-app alongside the React Transition Group library for animation and React Router for page navigation. " +
                            "This project taught me the fundamentals of designing functional components with react as well as incorporating some supporting libraries to expand reacts capabilities. "
                        } />
                    <Postcard
                        type={"pictureRList"}
                        in={false}
                        url={portfolio}
                        contentL={
                            "Duration: Jan 03, 2023 - Feb 11, 2023|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Frameworks: React, Create-React-App|" +
                            "Libraries: React Transition Group, React Router, Bootstrap 4"
                        } />
                    <Postcard
                        type={"smallLink"}
                        in={false}
                        contentL={"Website Link:"}
                        link={"https://alexander-postcard-portfolio.netlify.app/"}
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Cellular Automaton"}
                        contentR={
                            "Development of a cellular automaton with user modifiable state machine settings to create unique results when ran. " +
                            "This project taught me the basics of JQuery, DOM manipulation, and how to handle user inputs. " +
                            ""
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        in={false}
                        url={cell}
                        contentR={
                            "Duration: June 9, 2022 - Sept 19, 2022|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: JQuery, Bootstrap 4"
                        }
                    />
                    <Postcard
                        type={"smallLink"}
                        in={false}
                        contentL={"Website Link:"}
                        link={"https://alexander-cellular-automaton.netlify.app/"}
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Boids Simulation"}
                        contentR={
                            "This project created a web simulation of a boid type AI. " +
                            "This was my first project involving JQuery and allowed me to use it for user inputs and some dynamic DOM manipulation. " +
                            ""
                        }
                    />
                    <Postcard
                        type={"pictureRList"}
                        in={false}
                        url={boids}
                        contentL={
                            "Duration: June 9, 2022 - June 28, 2022|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: JQuery, Bootstrap 4"
                        }
                    />
                    <Postcard
                        type={"smallLink"}
                        in={false}
                        contentL={"Website Link:"}
                        link={"https://alexander-boids.netlify.app/"}
                    />


                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Minesweeper"}
                        contentR={
                            "For one of my classes, our final project was to create Minesweeper from scratch and this was my final result. " +
                            "For graphics we were required to use SFML, a low level 2-D graphics library which was capable of displaying the 2-D sprites we needed. " +
                            "The engine was created from scratch, along with all classes and data flow required to have a fully functioning version of MineSweeper. " +
                            "Because this was early on in my coding career the code is unoptimized and very unorganized, " +
                            "I have future plans to rework this project and create an AI which is detailed further down in my In-Progress Projects section. "
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        in={false}
                        url={uf}
                        contentR={
                            "Duration: July 25, 2020 - Aug 9, 2020|" +
                            "Languages: C++|" +
                            "Libraries: SFML"
                        }
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"3-Axis Robotic Arm"}
                        contentR={
                            "One of my first Arduino Projects. " +
                            "I found a schematic for getting output from a PlayStation 2 (PS2) controller's pins and tried to connect them to a microcontroller to be used to control servos. " +
                            "I found an arduino library which allowed the PS2 controller's inputs to be read with an Arduino and wired up a 3-Axis arm using 3 servos to be controlled using it. " +
                            "I built it out of a Zaxby's take-out box and the video I have was what I sent to friends so apologies for the casual text on the video."
                        }
                    />
                    <Postcard
                        type={"videoRList"}
                        in={false}
                        url={arm}
                        contentL={
                            "Duration: Sept 21, 2022|" +
                            "Languages: Arduino/C++|" +
                            "Arduino Libraries: Servo.h, PS2lib.h|" +
                            "Hardware: Arduino, Servo Motors, PlayStation 2 Controller"
                        }
                    />



                    <Postcard
                        type={"description"}
                        in={false}
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
                        type={"pictureLList"}
                        in={false}
                        url={monitor}
                        contentR={
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
                        in={false}
                        contentL={"Minesweeper AI"}
                        contentR={
                            "For one of my classes, our final project was to create Minesweeper from scratch. " +
                            "Becasue this was early in my coding career, the code is very unoptimized. " +
                            "My plans are to refactor the code and create an AI over it which will be able to solve the board. " +
                            "The AI will use data I collect to find the safest tiles to start on and ones which result in the greatest reveal of tiles upon click. " +
                            "I plan on collecting the data using the engine I build after for analysis with a MatLab Script to create an efficient AI."
                        }
                    />
                    <Postcard
                        type={"pictureRList"}
                        in={false}
                        url={uf}
                        contentL={
                            "Duration: Dec 23, 2023 - Present|" +
                            "Languages: C++, MatLab|" +
                            "Libraries: SFML"
                        }
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Rubix Cube Solver"}
                        contentR={
                            "As an introductory to graphics programming, I wanted to create a 3-D rubix cube solver where you could input a valid cube arrangement and get steps to solve it using an AI of my own design. " +
                            "I currently use Three.js as a rendering library however I'm having a problem with JavaScript: I havent found a way to copy custom objects without reference to the original object. " +
                            "Because of this, I plan on converting this project to Unreal Engine 5 to serve as an introductory project for the software and I will be able to use C++, which has the functionality I need compared to JavaScript."
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        in={false}
                        url={uf}
                        contentR={
                            "Duration: Jan 26, 2023 - Present|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: Three.js, React|" +
                            "Future Languages: C++|" +
                            "Future Framework: Unreal Engine 5"
                        }
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Stack Overflow Content Widening Chrome Extension"}
                        contentR={
                            "At my home workstation I have a vertical monitor for easy reading of documentation and web browsing. " +
                            "In my experience using it, the main content on Stack-Overflow on chrome has two side bars which make the content annoying to read. " +
                            "To solve this problem I began to develop a chrome extension specifically for this: to remove the side element on the click of a button for easier readability on the website's main content. "
                        }
                    />
                    <Postcard
                        type={"pictureRList"}
                        in={false}
                        url={socw}
                        contentL={
                            "Duration: Dec 22, 2022 - Present|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "API: Chrome Extension API"
                        }
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Chaos Game"}
                        contentR={
                            "A Chaos Game is a mathematical method to create fractals from a shape by calculated placement of points within the shapes perimeter. " +
                            "The chaos game I'm developing takes the shape of a triangle and asks for the user to place the three points of the triangle and one starting point, then is asked to run the simulation. " +
                            "The program then will create a fractal within the bounds of the user placed triangle through an animation and the user can watch as the fractal takes shape."
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        in={false}
                        url={uf}
                        contentR={
                            "Duration: Sept 14, 2022 - Present|" +
                            "Languages: HTML, CSS, JavaScript|" +
                            "Libraries: JQuery, Bootstrap 4"
                        }
                    />



                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Camera Filter"}
                        contentR={
                            "An OpenCV project revolving around manipulating video frames in real time. " +
                            "I want to be able to create a variety of filters like random static, horizontal/vertical waves, background erasure, mood detection, contrast/hue editing, and color inversion; all in real time from custom code. " +
                            "I want to create a custom data structure and data path which will store the position/state of the filter and apply it to each frame as it passes through before being displayed"
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        in={false}
                        url={CV}
                        contentR={
                            "Duration: Nov 11, 2022 - Present|" +
                            "Languages: C++|" +
                            "Libraries: OpenCV"
                        }
                    />
                </>
                <TitleLabel content={"GITHUB"} />
                <>
                    <Postcard
                        type={"bigLink"}
                        in={false}
                        contentL={"GitHub Link:"}
                        link={"https://github.com/AlexsIntroductions"}
                    />
                </>
            </>
        );
    }
}

export { TabletopProjects };