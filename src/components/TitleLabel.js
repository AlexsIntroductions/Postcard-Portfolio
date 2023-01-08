import React from "react"
import '../fonts/fonts.css'
import './TitleLabel.css'

class TitleLabel extends React.Component {
    render() {
        return (
            <div className='title-font' style={{ fontFamily: "elegant-typewriter" }}>
                <span>{this.props.content}</span>
            </div>
        )
    }
}
export {TitleLabel};