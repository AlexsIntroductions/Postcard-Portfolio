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
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE IN EDUCATION"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE IN EDUCATION"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE IN EDUCATION"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE IN EDUCATION"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE IN EDUCATION"} />
                </>
            </>
        );
    }
}

export { TabletopEducation };