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
                            "Help Researchers\n"
                            + "Inspect and Test Dated Hardware for Flaws\n"
                            + "Install Systems/Parts\n"
                            + "Replace Systems/Parts\n"
                            + "Create System Images\n"
                            + "Maintenance of Legacy Systems\n"
                            + "Upgrade and Update Systems\n"
                            + "Abuse Admin Privileges\n"
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
                        contentR={"work\nwork\nwork\n"}
                    />
                </>
            </>
        );
    }
}

export { TabletopExperience };