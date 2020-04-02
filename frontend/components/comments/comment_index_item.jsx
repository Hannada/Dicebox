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

    }

    handleComment(e){

    }

    editCommentForm(){

    }



    update(){
        return e => this.setState({body: e.target.value})
    }

    render(){
        const {currentUser, comment, video, } = this.props 
        return(
            
            <div className="comment-block">
                {currentUser.username}
                {comment.body}
            </div>
        )
    }

}

export default CommentIndexItem;