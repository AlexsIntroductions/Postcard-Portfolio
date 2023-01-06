import React, {memo} from 'react';
import { CSSTransition } from "react-transition-group";
import './Postcard.css';

//-INPUT-//
//Text to put on card
//Title?
//type of card
//photo on back
//-OUTPUT-//
//picture on back is centered on x and y axis
//rotated at a random angle
//text is separated 



class Postcard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.startAnimation = this.startAnimation.bind(this);
        this.state = {
            type: this.props.type,
            content: this.props.content,
            url: this.props.url,
            in: this.props.in
        }
    }

    startAnimation(){
        this.setState({in: !this.state.in});
        console.log(this.state.in)
        this.render();
    }

    componentDidUpdate(props){
        this.setState({in: props.in});
        console.log(this.state.in);
        this.render();
    }

    render() {
        //use width = window.innerWidth to detect if a postcard needs to be displayed differently
        let width = window.innerWidth * (6 / 7);
        if (width > 1240) {
            width = 1240;
        }
        let height = width * 0.6;

        //create random angle
        let angle = Math.random() * 40 - 20;

        //Upon scrolling into view it will activate the animation by setting 'in' state to true;

        if (this.state.type === "paragraph") {
            return (
                <>
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard' style={{ width: width, height: height, transform: 'rotate(' + angle + 'deg)' }}>
                            <div>
                                <p className='postcard-paragraph'>{this.state.content}</p>
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div>
                                <p className='postcard-paragraph'>{this.state.content}</p>
                            </div>
                        </div>
                    </CSSTransition>
                </>
            )
        }
        else if (this.state.type === "picture") {
            return (
                //<CSSTransition>
                <div className='postcard' style={{ width: width, height: height, transform: 'rotate(' + angle + 'deg)' }}>
                    <div>
                        <img ref="image" src={this.state.url} alt="Its Cats"></img>
                    </div>
                    <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                    <div>
                        <p className='postcard-paragraph'>{this.state.content}</p>
                    </div>
                </div>
                //</CSSTransition>
            )
        }
    }
}

export { Postcard }