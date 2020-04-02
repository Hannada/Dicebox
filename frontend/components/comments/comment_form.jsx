import React from 'react';

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            vidId: this.props.match.params.videoId,

        }
        this.handleComment = this.handleComment.bind(this); 
    }

    handleComment(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.setState({body: ""})
            this.props.postComment({body: this.state.body, video_id: this.state.vidId})
        }else {
            this.props.history.push("/")
        }
        // Potentially only passing the string to the backend?
    }


    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleComment}>
                    <input className="comment-form" type="text" 
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