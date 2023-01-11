import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopEducation.css'

class TabletopEducation extends React.Component {
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
                        type={"list"}
                        in={false}
                        contentL={"testing"}
                    />
                    <Postcard
                        type={"title"}
                        in={false}
                        contentL={"Associate of Arts: Santa Fe Community College"}
                        contentR={"Completed: April 2020 | GPA: 3.31"}
                    />
                </>
            </>
        );
    }
}

export { TabletopEducation };