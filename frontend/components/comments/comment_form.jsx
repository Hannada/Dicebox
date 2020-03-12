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
        if (this.props.currentUser) {
            this.setState({body: ""})
            this.props.postComment(this.state, this.props.videoId)
        }else {
            this.props.history.push("/")
        }

    }


    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" 
                            fillintext="Add a public comment"
                            onChange={this.update("body")}
                            value={this.state.body}
                    />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;