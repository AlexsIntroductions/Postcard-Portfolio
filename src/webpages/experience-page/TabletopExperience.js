import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopExperience.css'

class TabletopExperience extends React.Component {

    render() {
        return (
            <>
                <TitleLabel content={"WORK EXPERIENCE"} />
                <>
                    <Postcard type={"paragraph"} in={false} url={""} contentL={"YOURE IN EXPERIENCE"} contentR={"Welcome"} />
                </>
            </>
        );
    }
}

export { TabletopExperience };