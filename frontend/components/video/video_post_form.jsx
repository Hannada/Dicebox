import React from "react";

class VideoPostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.video 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleFile(e){

    }

    handleSubmit(){

    }

    handleInput(){

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="video-body">Body of Video</label>
                <input type="text"
                    id="video-body"
                    value={this.state.title}
                    onChange={this.handleInput}
                />
                <input type="file"
                    onChange={this.handleFile}
                />
                <button>Upload a new video</button>
            </form>
        )
    }

}

export default VideoPostForm;