import React from "react"
import '../fonts/fonts.css'
import './TitleLabel.css'

class TitleLabel extends React.Component {
    render() {
        return (
            <div className='title-font' style={{ fontFamily: "elegant-typewriter" }}>
                <span style={{width: "fit-content"}}>&#8595;     {this.props.content}     &#8595;</span>
            </div>
        )
    }
}
export {TitleLabel};