import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import me from '../../images/me.jpg'
import uf from '../../images/ufgator.jpg'
import arrow from '../../images/arrow.png'
import './TabletopHome.css'

class TabletopHome extends React.Component {

    render() {
        return (
            <>
                <TitleLabel content={"HOME PAGE"} />
                <>
                    <Postcard
                        type={"pictureLSplit"}
                        in={false}
                        url={me}
                        contentL={"Hello! My name is Alexander Prokop"}
                        contentR={"Scroll down and I'll throw down more postcards about me!"}
                    />
                    <Postcard
                        type={"pictureRSplit"}
                        in={false}
                        url={uf}
                        contentL={"Welcome to my Postcard Portfolio!"}
                        contentR={"I'm a Computer Engineering student from the University of Florida. I'm expected to graduate Spring 2023 and have been keeping myself busy with several personal projects, this website being one of them."}
                    />
                    <Postcard
                        type={"paragraph"}
                        in={false}
                        url={arrow}
                        contentL={"Click on the Align Postcards button to line up the postcards in a more readable way"}
                        contentR={"Feel free to click on the Post-it notes at the top to learn more about me and my endeavors!"}
                    />
                </>
            </>
        );
    }
}

export { TabletopHome };