import React from "react";
import { SearchIndexItem } from "./search_index_items";

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
            <div className="video-show-main">
                <Navbar />
                <div className="show">
                    <Sidebar />
                </div>

            </div>
            <div>
                {searchedVideos}
            </div>
        )
    }
}

export default SearchIndex;