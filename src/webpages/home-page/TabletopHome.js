import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import me from '../../images/me.jpg'
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
                        contentL={"Hi! I'm Alexander Prokop"}
                        contentR={
                            "This is my Website Portfolio! If you scroll down more postcards will be thrown down detailing my career and experiences! " +
                            "If you press the 'Align Postcards' button all my information will align in a more readable way. " +
                            "Scroll down to learn more about me!"
                        }
                    />
                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"About Me"}
                        contentR={
                            "I am a Senior Computer Engineering Student at the University of Florida. " +
                            "I'm interested in almost all aspects of Programming and have been exploring many avenues to find the direction I'd like to specialize in. " +
                            "I built this website to explore UX/UI design using React, and I have future projects to explore server side programming, data science and analysis, machine learning, and AI; All of which are showcased in my projects page! "
                        }
                    />
                    <Postcard
                        type={"paragraph"}
                        in={false}
                        contentL={
                            "My goals for my career are to become a roboticist and work in the prosthetics field. " +
                            "Most of my robotics experience involves Arduino and the Raspberry PI and I have some of my robotics related projects in my projects page. " +
                            "I'm also currently a part of a prosthetics club at my university detailed in my education page. "
                        }
                        contentR={
                            "Until I gain the experience to fulfil that, I plan to dedicate my time to computer engineering research at the University of Florida." +
                            "Currently I am a part of a research project and I have detailed my experience in my education page!"
                        }
                    />
                </>
            </>
        );
    }
}
export { TabletopHome };