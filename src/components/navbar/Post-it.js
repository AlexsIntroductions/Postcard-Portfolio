import React from "react";
import './Post-it.css'
//will display a link to another page as a navbar

class PostIt extends React.Component {
    render() {
        let angle = Math.random() * 15 - 7;
        let colorChoice = Math.floor(Math.random() * 5 + 1);
        let lightColor;
        let darkColor;
        switch (colorChoice) {
            case 1:
                //green
                lightColor = "rgb(102, 255, 204)";
                darkColor = "rgb(0, 255, 153)";
                break;
            case 2:
                //red
                lightColor = "rgb(255, 102, 102)";
                darkColor = "rgb(255, 0, 102)";
                break;
            case 3:
                //blue
                lightColor = "rgb(102, 153, 255)";
                darkColor = "rgb(102, 102, 255)";
                break;
            case 4:
                //yellow
                lightColor = "rgb(255, 255, 204)";
                darkColor = "rgb(255, 255, 102)";
                break;
            default:
                //purple
                lightColor = "rgb(204, 102, 255)";
                darkColor = "rgb(204, 0, 255)";
                break;
        }

        return (
            <div className="post-it" style={{
                transform: 'rotate(' + angle + 'deg)',
                backgroundImage: 'linear-gradient(' + (-1 * angle) + 'deg, ' + String(darkColor) + ', ' + String(lightColor) + ')'
            }}>
                <b>{this.props.content}</b>
            </div>
        );
    }
}

export { PostIt };