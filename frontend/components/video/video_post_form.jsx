import React from "react";

class VideoPostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.video 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e){

    }

    handleSubmit(){

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                
            </form>
        )
    }

}

export default VideoPostForm;