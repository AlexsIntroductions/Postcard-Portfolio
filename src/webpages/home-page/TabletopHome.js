import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import './TabletopHome.css'

class TabletopHome extends React.Component {

    render() {
        return (
            <>
                <TitleLabel content={"HOME PAGE"} />
                <>
                    <Postcard type={"paragraph"} in={false} url={""} contentL={"YOURE ON THE HOME PAGE"} contentR={"Welcome"}/>
                </>
            </>
        );
    }
}

export { TabletopHome };