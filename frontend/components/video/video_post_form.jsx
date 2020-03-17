import React from "react";

class VideoPostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.currentUser.id, 
            title: "",
            body: "",
            url: null 
        }
        // this.props.currentUser = this.props.currentUser.bind(this);
        // const currentId = this.props.currentUser.id 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    // handleFile(e){
    //     this.setState({url: e.currentTarget.files[0]})
    // }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        this.setState({ url: e.currentTarget.files[0] })
    }
    
    handleInput(e){
        this.setState({title: e.currentTarget.value})
    }

    handleBody(e){
        this.setState({ body: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("video[user_id]", this.state.id)
        formData.append("video[title]", this.state.title);
        formData.append("video[body]", this.state.body);
        formData.append("video[url]", this.state.url)

    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="video-title">Title of Video</label>
                <input type="text"
                    id="video-title"
                    value={this.state.title}
                    onChange={this.handleInput}
                />
                <label htmlFor="video-body">Description of Video</label>
                <input type="text"
                    id="video-body"
                    value={this.state.body}
                    onChange={this.handleBody}
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