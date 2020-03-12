import React from 'react';

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: ""
        }
        this.handleComment = this.handleComment.bind(this); 
    }

    handleComment(e) {
        e.prevenDefault();

    }


    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
}

export default CommentForm;