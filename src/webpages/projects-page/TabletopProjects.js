import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopProjects.css'
import ufGator from '../../images/ufgator.jpg'
import boids from '../../images/Boids.PNG'
import cell from '../../images/Cellular-Automata.PNG'
import portfolio from '../../images/Postcard-Portfolio.PNG'
import nes from '../../images/NesTestLog.png'
import boda from '../../images/boda.mov'

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
                            "Duration: Jan 2023 - Feb 2023|" +
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
                        contentL={"Senior Design Project: Boda"}
                        contentR={"A 4-DOF robotic arm with swappable end effectors designed to be open sourced. " + 
                            "The base runs FreeRTOS on a STM32 Nucleo, with robotic motion controlled by a Bluetooth Flutter app. " + 
                            "End effectors are designed on a RP2040 and communicate through SPI and custom created command system for identification, input, and sensor data processing. " + 
                            "Custom STM32 thread controls an FSM for end effector connectivity and allows for hot swapping for changing use cases. "}
                    />
                    <Postcard
                        type={"videoRList"}
                        in={false}
                        url={boda}
                        contentL={"Duration: Aug 2023 - May 2024|" + 
                            "Languages: C/C++, Makefile|" + 
                            "Hardware: STM32 Nucleo, RP2040|" + 
                            "Protocols: SPI, UART, BLE, PWM" + 
                            ""
                        }
                    />



                    <Postcard 
                        type={"description"}
                        in={false}
                        contentL={"6502 Emulator"}
                        contentR={"A C++ 6502 Chip Emulator. " + 
                            "System designed from 6502 documentation and features all 6502 official instructions, I/O NMI’s, and validity tested through community created ROMs. " + 
                            "Validity tested with custom logging software written to log system state, internal registers, and cycle counts. " + 
                            "To be expanded into an NES Emulator. "}
                    />
                    <Postcard 
                        type={"pictureRList"}
                        in={false}
                        contentL={"Duration: May 2023 - Aug 2023|" + 
                            "Languages: C++, Makefile"
                        }
                        url={nes}
                    />


                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"FPGA MIPS CPU Architecture"}
                        contentR={"MIPS CPU architecture designed on the DE10-Lite FPGA in VHDL. " + 
                            "Replicated each element of the CPU with VHDL components and verified functionality through created testbench files used on ModelSim-Altera. " + 
                            "Features 32 32-bit general purpose registers, 2 8-bit Input buses, 1 8-bit output bus, and ability to upload MIPS code through the DE10-Lite’s RAM. "
                        }
                    />
                    <Postcard
                        type={"pictureLList"}
                        in={false}
                        url={ufGator}
                        contentR={"Duration: Nov 2023 - Dec 2023|" +
                            "Languages: VHDL|" + 
                            "Software: Quartus, ModelSim-Altera|" + 
                            "Hardware: DE10-Lite"
                        }
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
                            "Duration: Jun 2022 - Sep 2022|" +
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
                            "Duration: Jun 2022|" +
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

                    


                </>
                <TitleLabel content={"IN-PROGRESS PROJECTS"} />
                <>
                    
                </>
                <TitleLabel content={"GITHUB"} />
                <>
                    <Postcard
                        type={"smallLink"}
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