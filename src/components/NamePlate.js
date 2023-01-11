import React from "react";
import '../fonts/fonts.css'
import './NamePlate.css'

class NamePlate extends React.Component {
    render() {
        return (
            <div className="base">
                <div className="top">
                    ALEXANDER PROKOP
                </div>
            </div>
        );
    }
}

export { NamePlate };