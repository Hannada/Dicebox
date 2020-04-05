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
        // this.props.getUsers();
        // this.props.getUser(this.props.comment.user_id); 
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
        // const commentAuthor =  this.props.getUser(id)

        // maybe fetch one user instead
        return(
            
            <div className="comment-block">
                <div>
                    <img src={window.diceLoginUrl} width="20" height="20" />
                </div>
                <div>
                    {comment.user_id}
                    {comment.body}
                </div>
            </div>
        )
    }

}

export default CommentIndexItem;