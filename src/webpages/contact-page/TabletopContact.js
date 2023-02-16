import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopContact.css'

class TabletopContact extends React.Component {

    render() {
        return (
            <>
                <TitleLabel content={"CONTACT ME"} />
                <>
                    <Postcard
                        type={"smallCard"}
                        in={false}
                        contentL={"Personal Email"}
                        contentR={"alexprokoplpa@gmail.com"}
                    />
                    <Postcard
                        type={"smallCard"}
                        in={false}
                        contentL={"Phone Number"}
                        contentR={"772-353-0028"}
                    />
                    <Postcard
                        type={"smallCard"}
                        in={false}
                        contentL={"Work Email"}
                        contentR={"alexanderprokop@ufl.edu"}
                    />
                    <Postcard
                        type={"smallLink"}
                        in={false}
                        contentL={"LinkedIn"}
                        link={"https://www.linkedin.com/in/alexander-prokop/"}
                    />
                    <Postcard
                        type={"smallLink"}
                        in={false}
                        contentL={"GitHub"}
                        link={"https://github.com/AlexsIntroductions"}
                    />
                </>
            </>
        );
    }
}

export { TabletopContact };