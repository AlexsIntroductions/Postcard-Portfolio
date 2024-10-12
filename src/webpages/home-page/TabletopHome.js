import React from 'react';
import { Postcard } from '../../components/Postcard';
import { TitleLabel } from '../../components/TitleLabel';
import me from '../../images/me.jpg'
import cats from '../../images/cats.jpg'
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
                        contentL={"Welcome! I'm Alexander Prokop and this is my website portfolio"}
                        contentR={
                            "I'm a new graduate from the University of Florida, getting my Bachelor of Science in Computer Engineering. " +
                            "I designed this website to mimic postcards/note being thrown onto a desk with my information on them. Scroll down and I'll throw down more."
                        }
                    />
                    <Postcard
                        type={"description"}
                        in={false}
                        contentL={"About Me"}
                        contentR={
                            "My interests align with my degree, being computer programming, embedded systems, and robotics. " + 
                            "I like to explore these topics through personal projects, many of which are listed on my projects page. " + 
                            "I find myself to be a lifelong learner, self-motivated to enhance my skills and foster new ones by exploring my interests through projects I’ve done and plan to do in my free time. "
                        }
                    />
                    <Postcard
                        type={"pictureRSplit"}
                        in={false}
                        url={cats}
                        contentL={
                            "I’ve recently found myself interested in graphic programming and simulations. " + 
                            "I plan on using what I learn from this to build a simulation program for a robotic arm and to explore systems/engine design."
                        }
                        contentR={
                            "When I'm not working on something or researching for a project, I like to spend time with my cats and playing games with my friends. "
                        }
                    />
                </>
            </>
        );
    }
}
export { TabletopHome };