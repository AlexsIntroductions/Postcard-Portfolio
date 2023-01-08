import React from "react";
//will display a link to another page as a navbar

class PostIt extends React.Component{
    render(){
        return(
            <div>{this.props.content}</div>
        );
    }
}

export { PostIt };