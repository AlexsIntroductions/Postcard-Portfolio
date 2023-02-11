import React from "react";
import './List.css'

class List extends React.Component {
    constructor(props){
        super(props);
        this.state ={ type: this.props.type };
    }
    render() {
        switch (this.state.type) {
            case "postcard": {
                const test = this.props.content.split("|");
                let temp = [];
                for (let i = 0; i < test.length; i++) {
                    temp[i] = { key: parseInt(i + 1), data: test[i] };
                }
                const elements = temp.map((val) => (
                    <li className="list-element" key={val.key}>{val.data}</li>
                ));
                return (
                    <div className='postcard-list'>{elements}</div>
                );
            }
            case "picture": {
                const test = this.props.content.split("|");
                let temp = [];
                for (let i = 0; i < test.length; i++) {
                    temp[i] = { key: parseInt(i + 1), data: test[i] };
                }
                const elements = temp.map((val) => (
                    <li className="list-element-picture" key={val.key}>{val.data}</li>
                ));
                return (
                    <div className='postcard-list-picture'>{elements}</div>
                );
            }
            default: break;
        }
    }
}

export { List };