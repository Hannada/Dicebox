import React from "react";
import { Link } from "react-router-dom";
import  SearchIndexItem from "./search_index_items";
import Navbar from "../navbar/navbar_container";
import Sidebar from "../sidebar/sidebar_container";


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
            // Might need to handle search in both so user can search on search page
            <div className="video-show-main">
                <Navbar/>
                <div className="show">
                    <Sidebar/>
                </div>

            </div>
        )
    }
}

export default Search;
