import React from "react";
import { Link } from "react-router-dom";
import { SearchIndexItem } from "./search_index_items";


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSearch: ""
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps){

    }

    componentWillUnmount(){
        
    }

    render(){
        const searchedVideos = this.props.videos.map(video => {
            return (
                <SearchIndexItem
                    key={video.id}
                    video={video}
                />
            )
        })

        let filteredSearch = this.props.videos.filter(
            (video) => {
                return video.title.indexOf(this.state.currentSearch !== -1)
            }
        )
        return (
            <div>

            </div>
        )
    }
}

export default Search;
