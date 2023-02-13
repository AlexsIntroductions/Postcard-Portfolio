import React from 'react';
import { CSSTransition } from "react-transition-group";
import './Postcard.css';
import {List} from './List'

class Postcard extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            type: this.props.type,
            contentL: this.props.contentL,
            contentR: this.props.contentR,
            url: this.props.url,
            in: this.props.in,
            scrollPosition: 0
        }
    }

    shouldComponentUpdate(newProps) {
        if (newProps.in !== this.props.in) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        let current = this.myRef.current.getBoundingClientRect();

        if (parseInt(current.top) < window.innerHeight - (window.innerHeight / 3) && this.state.in !== true) {
            this.setState({ in: true });
            return;
        }
        window.addEventListener("scroll", () => {
            if (this.myRef.current !== null) {
                let temp = this.myRef.current.getBoundingClientRect();
                if (parseInt(temp.top) < window.innerHeight - (window.innerHeight / 3) && this.state.in !== true) {
                    this.setState({ in: true });
                }
            }
        });
    }

    render() {
        //use width = window.innerWidth to detect if a postcard needs to be displayed differently
        let width = window.innerWidth * (6 / 7);
        if (width > 1240) {
            width = 1240;
        }
        let height = width * 0.6;

        //create random angle
        let angle = Math.random() * 25 - 12.5;

        switch (this.state.type) {
            case "paragraph": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half'>
                                <p className='postcard-paragraph'>{this.state.contentL}</p>
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half'>
                                <p className='postcard-paragraph'>{this.state.contentR}</p>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "pictureR": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half'>
                                <p className='postcard-paragraph'>{this.state.contentL}</p>
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half'>
                                <img src={this.state.url} alt="failed" className='postcard-picture' />
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "pictureL": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half'>
                                <img src={this.state.url} alt="failed" className='postcard-picture' />
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half postcard-picture-rotate90'>
                                <p className='postcard-paragraph'>{this.state.contentL}</p>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "pictureRSplit": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half'>
                                <p className='postcard-paragraph-split'>{this.state.contentL}</p>
                                <p className='postcard-paragraph-split'>{this.state.contentR}</p>
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half postcard-picture-rotate90'>
                                <img src={this.state.url} alt="failed" className='postcard-picture' />
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "pictureLSplit": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half postcard-picture-rotate90'>
                                <img src={this.state.url} alt="failed" className='postcard-picture' />
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half'>
                                <p className='postcard-paragraph-split'>{this.state.contentL}</p>
                                <p className='postcard-paragraph-split'>{this.state.contentR}</p>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "pictureRList": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half'>
                                <List className='postcard-paragraph' type={"picture"} content={this.state.contentL}/>
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half postcard-picture-rotate90'>
                                <img src={this.state.url} alt="failed" className='postcard-picture' />
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "pictureLList": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half postcard-picture-rotate90'>
                                <img src={this.state.url} alt="failed" className='postcard-picture' />
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half'>
                                <List className='postcard-paragraph' type={"picture"} content={this.state.contentR}/>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "title": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-column'>
                                <span className='title'>{this.props.contentL}</span>
                                <span className='subtitle'>{this.props.contentR}</span>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "list": {
                if(width < 500){
                    height *= 1.2;
                }
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: height,
                                height: width,
                                whiteSpace: "pre-wrap",
                                transform: 'rotate(' + angle + 'deg)',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='title' style={{margin: '2vw', marginTop: '5vw'}}>{this.props.contentL}</div>
                            <List type={"postcard"} content={this.props.contentR}></List>
                        </div>
                    </CSSTransition>
                );
            }
            case "doubleList": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-container-half'>
                                <List className='postcard-paragraph' type={"picture"} content={this.state.contentL}/>
                            </div>
                            <hr className='postcard-divider' style={{ width: (width * .4) }}></hr>
                            <div className='postcard-container-half'>
                                <List className='postcard-paragraph' type={"picture"} content={this.state.contentR}/>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "description": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-column'>
                                <span className='postcard-description-title'>{this.props.contentL}</span>
                                <hr style={{width: "80%", padding: "0", marginTop: "0", marginBottom: "0"}}></hr>
                                <span className='postcard-description'>{this.props.contentR}</span>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            case "bigLink": {
                return (
                    <CSSTransition nodeRef={this.myRef} in={this.state.in} timeout={2000} classNames="postcard-animate">
                        <div ref={this.myRef} className='postcard'
                            style={{
                                width: width,
                                height: height,
                                transform: 'rotate(' + angle + 'deg)',
                                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg , lightgray, white'
                            }}>
                            <div className='postcard-column'>
                                <span className='postcard-description-title'>{this.props.contentL}</span>
                                <hr style={{width: "80%", padding: "0", marginTop: "0", marginBottom: "0"}}></hr>
                                <a className='postcard-link' href={this.props.link}>{this.props.link}</a>
                            </div>
                        </div>
                    </CSSTransition>
                );
            }
            default: {
                break;
            }
        }
    }
}

export { Postcard }