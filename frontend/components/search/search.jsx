import React from "react";
import { Link } from "react-router-dom";
import  SearchIndexItem from "./search_index_items";


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSearch: ""
        }
    }

    componentDidMount() {

    }

    // componentDidUpdate(prevProps){

    // }

    // componentWillUnmount(){
        
    // }

    render(){
        const searchedVideos = this.props.videos.map(video => {
            return (
                <SearchIndexItem
                    key={video.id}
                    video={video}
                />
            )
        })

        let filteredSearch = searchedVideos.filter(
            (video) => {
                return video.title.indexOf(this.state.currentSearch !== -1)
            }
        )


        return (
            // <div>
            //     <input className="searchbar" 
            //     type="text" 
            //     className="input" 
            //     placeholder="Search..." 
            //     />

            // </div>
            // This is currently being handled in navbar. Looking to push the props from navbar?
            <div></div>
        )
    }
}

export default Search;
