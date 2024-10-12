import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopExperience.css'

class TabletopExperience extends React.Component {

    render() {
        return (
            <>
                <TitleLabel content={"EDUCATION"} />
                <>
                    <Postcard
                        type={"title"}
                        in={false}
                        contentL={"Bachelor of Science in\nComputer Engineering:\nUniversity of Florida"}
                        contentR={"Graduation: Fall 2024 | GPA: 2.70"}
                    />
                    <Postcard
                        type={"title"}
                        in={false}
                        contentL={"Associate of Arts: Santa Fe Community College"}
                        contentR={"Completed: April 2020 | GPA: 3.31"}
                    />
                </>

                <TitleLabel content={"WORK EXPERIENCE"} />
                <>
                    <Postcard
                        type={"title"}
                        in={false}
                        url={""}
                        contentL={"IT Desktop Support: \nUniversity of Florida"}
                        contentR={"November 2021 - Present"}
                    />
                    <Postcard
                        type={"list"}
                        in={false}
                        contentL={"RESPONSIBILITIES"}
                        contentR={
                            "Participate and present in daily scrum meetings to identify and prioritize tasks|" + 
                            "Deploy institute's custom windows image to incoming hardware|" +
                            "Write documentation and SOPs for knowledge base, researchers, staff, and students|" +
                            "Concisely determine and explain encountered hardware or software problems to those affected|" +
                            "Schedule service meetings around researchers and students' schedules without distrupting their workflow"
                        }
                    />
                    <Postcard
                        type={"title"}
                        in={false}
                        url={""}
                        contentL={"Back of House Crew Member: \nChick-fil-A"}
                        contentR={"October 2020 - October 2021"}
                    />
                    <Postcard
                        type={"list"}
                        in={false}
                        contentL={"RESPONSIBILITIES"}
                        contentR={
                            "Communicate with all stations to ensure the kitchen is running effectively and efficiently|" +
                            "Boost team morale through encouragement and mentorship while assisting if falling behind|" +
                            "Train new crew members on basic procedures for each station and monitor progress for improvement|" +
                            "Properly stock and timestamp product to provide fresh ingredients for customers|" +
                            "Maintain a properly cleaned and sanitized environment and workstation|" +
                            "Follow proper closing procedures to maintain store cleanliness for opening crew"
                        }
                    />
                </>
                <TitleLabel content={"ACTIVITIES"} />
                <>
                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Undergraduate Research Assistant"}
                        contentR={
                            "Assisted UF PhD candidate in his dissertation research to create a paradigm for teaching underprivileged youth computer science concepts."
                        }
                    />
                    <Postcard 
                        type={"description"}
                        in={false}
                        contentL={"GRiP: ExoGlove"}
                        contentR={
                            "GRiP, General Relief in Prosthetics, is an organization dedicated to teach students computer and material sciences through helping members of their community by creating prosthetics for those in need. " +
                            "My role was as a programmer on the ExoGlove team. " +
                            "Our team is tasked with creating the circuitry and programming of an Exoskeletal Glove designed to give our recipient with muscular dystrophy better grip strength in their affected hand. "
                        }
                    />
                </>
            </>
        );
    }
}

export { TabletopExperience };