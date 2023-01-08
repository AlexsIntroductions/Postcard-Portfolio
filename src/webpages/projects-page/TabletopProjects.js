import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopProjects.css'

class TabletopProjects extends React.Component {

    render() {
        return (
            <>
                <TitleLabel content={"PROJECTS"} />
                <>
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE ON THE PROJECTS PAGE NOW"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE ON THE PROJECTS PAGE NOW"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE ON THE PROJECTS PAGE NOW"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE ON THE PROJECTS PAGE NOW"} />
                    <Postcard type={"paragraph"} in={false} url={""} content={"YOURE ON THE PROJECTS PAGE NOW"} />
                </>
            </>
        );
    }
}

export { TabletopProjects };