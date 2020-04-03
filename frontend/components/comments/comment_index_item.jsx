import React from 'react';
import { Link } from 'react-router-dom';

// const CommentIndexItem = ({comment}) => {
//     return (
//         <div>
//             <p>{comment.body}</p>
//         </div>
//     )
// };

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            body: this.props.comment.body
        }
    }

    componentDidMount(){
        this.props.getUsers();
    }

    handleComment(e){

    }

    editCommentForm(){

    }



    update(){
        return e => this.setState({body: e.target.value})
    }

    render(){
        const {currentUser, comment, video, commentAuthor, users } = this.props 
        // debugger

        // maybe fetch one user instead
        return(
            
            <div className="comment-block">
                {/* {comment.author} */}
                {comment.body}
            </div>
        )
    }

}

export default CommentIndexItem;