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
                        type={"bigLink"}
                        in={false}
                        contentL={"LinkedIn"}
                        link={"https://www.linkedin.com/in/alexander-prokop/"}
                    />
                    <Postcard
                        type={"bigLink"}
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