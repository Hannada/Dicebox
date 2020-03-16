import React from "react";

class VideoPostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // this.props.video 
            title: "",
            body: "",
            url: null 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleFile(e){
        this.setState({videoFile: e.currentTarget.files[0]})
    }
    
    handleInput(){
        this.setState({title: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("video[title]", this.state.title);
        formData.append("video[url]", this.state.url)


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