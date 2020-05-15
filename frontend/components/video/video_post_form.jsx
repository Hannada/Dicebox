import React from "react";

class VideoPostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.currentUser.id, 
            title: "",
            description: "",
            vidUrl: null, //This used to be url. Was altered to match model
            // videoId: null,
            vid: null  
        }
        // this.props.currentUser = this.props.currentUser.bind(this);
        // const currentId = this.props.currentUser.id 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    // handleFile(e){
    //     this.setState({vid: e.currentTarget.files[0]})
    // }

    handleFile(e) {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];

        // this.setState({ vid: e.currentTarget.files[0] })


        fileReader.onloadend = () =>{
            return (
            this.setState({vidUrl: fileReader.result, vid: file})
            )}
        if (file) {
            fileReader.readAsDataURL(file)
        } else {
            this.setState({vidUrl: null, vid: null})
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

    handleDescription(e){
        this.setState({ description: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("video[user_id]", this.state.id);
        formData.append("video[title]", this.state.title);
        formData.append("video[description]", this.state.description);
        formData.append("video[vid]", this.state.vid);
        // formData.append("video[vidUrl]", this.state.vidUrl)

        // Need to add upload callback

        // this.props.createVideo(formData)
        //     .then ( (action) => {
        //         if (this.props.formType === "")
        //     })
        this.props.createVideo(formData)
            // .then(this.props.history.push("/"))

        // changing videoFile to match url allow it to process into a 422 error.
        

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
            <form className="video-submit" onSubmit={this.handleSubmit}>
                <label className="video-post-title" htmlFor="video-title">Title of Video</label>
                <input 
                    className="video-post-title-submit"
                    type="text"
                    id="video-title"
                    value={this.state.title}
                    onChange={this.handleInput}
                />
                <label className="video-description-title" htmlFor="video-description">Description of Video</label>
                <input 
                    className="video-post-des-submit"
                    type="text"
                    id="video-description"
                    value={this.state.description}
                    onChange={this.handleDescription}
                />
                <input
                    className="video-post-title-submit"
                    type="file"
                    onChange={this.handleFile}
                />
                    
                <button className="video-post-title-submit">Upload a new video</button>
            </form>
        )
    }

}

export default VideoPostForm;