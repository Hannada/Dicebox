import React from "react";
// import { SearchIndexItem } from "./search_index_items";

class SearchIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    //currentlt rendering list here. what is function of search.jsx?

    render(){
        const searchedVideos = this.props.videos.map(video => {
            return(
                <SearchIndexItem
                    key={video.id}
                    video={video}
                />
            )
        })
        
        return (
            <div> 

                <div className="video-show-main">
                    <Navbar />
                    <div className="show">
                        <Sidebar />
                    </div>

                </div>
                <div>
                    {searchedVideos}
                </div>
            </div>
        )
    }
}

const SearchIndexItem = ({ video }) => {
    return (
        <div className="index-items">
            <Link to={`/videos/${video.id}`} className="index-item">
                <video width="270.66" height="151.86">
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <div className="index-vid-text">
                    <p className="index-title">{video.title}</p>
                    <p className="index-user"><img src={window.diceLoginUrl} width="20" height="20" />{video.user_name}</p>
                </div>
            </Link>
        </div>);
}

export default SearchIndex;