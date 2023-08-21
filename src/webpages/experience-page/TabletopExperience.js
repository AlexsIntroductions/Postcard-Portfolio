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
                        contentL={"Bachelor of Science in Computer Engineering: University of Florida"}
                        contentR={"Expected Graduation: Spring 2023 | GPA: 2.55"}
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
                            "Responsible for assignment and management of service tickets in our system|" +
                            "Manage, update, and add to knowledge base|" +
                            "Write detailed SOP’s to be sent to researchers, staff, and students of all levels|" +
                            "Schedule service meetings with researchers for updates/upgrades without disrupting their workflow|" +
                            "Effectively communicate causes and solutions to problems and give reasonable estimates for service time|" +
                            "Inspect incoming hardware for flaws and install software to researchers requests|" +
                            "Analyze in-place systems for unoptimizations regarding setup and outdated hardware or software|" +
                            "Manage and update system images for quick deployment"
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
                            "Troubleshoot various Henny Penny brand machines and legacy ticketing system|" +
                            "Properly stock and timestamp product to provide fresh ingredients for customers|" +
                            "Maintain a properly cleaned and sanitized environment and workstation|" +
                            "Follow proper closing procedures to maintain store cleanliness for opening crew"
                        }
                    />
                </>
                <TitleLabel content={"EXTRA-CURRICULARS"} />
                <>
                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"Undergraduate Research Assistant"}
                        contentR={
                            "Assisting PhD candidate Joseph Isaac in his dissertation of creating a paradigm for teaching black youth computer science concepts titled \"Black Boy Joy\". " +
                            "My role is as an educator, Joesph is in charge of teaching the lessons and present activities for the students to do. " +
                            "While the students are doing activities it is my job to help the students when they get stuck, or teach them if they are unsure of what to do. " +
                            "I am also expected to gather data on students progress and log it daily for each group we teach."
                        }
                    />
                    <Postcard 
                        type={"description"}
                        in={false}
                        contentL={"GRiP: ExoGlove"}
                        contentR={
                            "GRiP, or General Relief in Prosthetics, is an organization dedicated to teach students computer and material sciences through helping members of their community by creating prosthetics for those in need. " +
                            "My role is lead programmer on the ExoGlove team. " +
                            "Our team is tasked with creating the circuitry and programming of an Exoskeletal Glove designed to give our recipient with muscular dystrophy better grip strength in their affected hand/s. " +
                            ""
                        }
                    />
                </>
            </>
        );
    }
}

export { TabletopExperience };