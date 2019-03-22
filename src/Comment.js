// add Comment component here
import React,{ Component } from 'react';

class Comment extends  Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="comment">{this.props.commentText}</div>
        )
    }
}

export default Comment;