import React from "react";

class VideoPostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.currentUser.id, 
            title: "",
            body: "",
            url: null,
            videoId: null,
            videoFile: null  
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
        const file = e.currentTarget.files[0];

        const fileReader = new FileReader();

        this.setState({ url: e.currentTarget.files[0] })

        fileReader.onloadend = () => 
            this.setState({url: fileReader.result, videoFile: file});

        if (file) {
            fileReader.readAsDataURL(file)
        } else {
            this.setState({url: null, videoFile: null})
        }
    }

    // handleFile(e) {
    //     const reader = new FileReader();
    //     const file = e.currentTarget.files[0];
    //     reader.onloadend = () =>
    //         this.setState({ imageUrl: reader.result, imageFile: file });
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     } else {
    //         this.setState({ imageUrl: "", imageFile: null });
    //     }
    // }
    
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

        // Need to add upload callback

        this.props.createVideo(formData);

    }

    // note 

    // handleSubmit() {
    //     const formData = new FormData();
    //     formData.append('project[title]', this.state.title);
    //     formData.append('project[subtitle]', this.state.subtitle);
    //     formData.append('project[creator_id]', this.state.creator_id);
    //     formData.append('project[category_id]', this.state.category_id);
    //     formData.append('project[description]', this.state.description);
    //     formData.append('project[risks]', this.state.risks);
    //     formData.append('project[faqs]', this.state.faqs);
    //     formData.append('project[length]', this.state.length);
    //     formData.append('project[amount_received]', this.state.amount_received);
    //     formData.append('project[goal]', this.state.goal);
    //     if (this.state.imageFile) {
    //         formData.append('project[image]', this.state.imageFile);
    //     }
    //     const id = this.state.id;
    //     this.props.props.updateProject(formData, id);
    // }


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