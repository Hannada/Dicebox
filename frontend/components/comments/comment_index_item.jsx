import React from 'react';
import { Link } from 'react-router-dom';

// const CommentIndexItem = ({comment}) => {
//     return (
//         <div></div>
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

    // handleComment(e){

    // }

    update(){
        return e => this.setState({body: e.target.value})
    }

    render(){
        return(
            <div></div>
        )
    }

}

export default CommentIndexItem;