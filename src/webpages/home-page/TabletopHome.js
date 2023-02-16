import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import me from '../../images/me.jpg'
import uf from '../../images/ufgator.jpg'
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
                        contentL={"*welcoming introduction*"}
                        contentR={"*short description of website*"}
                    />
                    <Postcard 
                        type={"description"}
                        in={false}
                        contentL={"About Me"}
                        contentR={
                            "I am a Senior Computer Engineering Student at the University of Florida. " +
                            "I'm interested in almost all aspects of Programming and have been exploring many avenues to find the direction I'd like to specialize in. " +
                            "I built this website to explore UX/UI design using React, and I have future projects to explore server side programming, data science and analysis, machine learning, and AI; All of which are showcased in my projects page! " +
                            "*something about school*" +
                            "*extension of my career goals*"
                        }
                    />
                    <Postcard
                        type={"paragraph"}
                        in={false}
                        contentL={""}
                        contentR={""}
                    />
                </>
            </>
        );
    }
}
export { TabletopHome };