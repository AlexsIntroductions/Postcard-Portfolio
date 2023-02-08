import React from "react";
import './List.css'

class List extends React.Component {
    render() {
        const test = this.props.content.split(",");
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
}

export { List };