import React from "react";
import { Link } from "react-router-dom";
import  SearchIndexItem from "./search_index_items";
import Navbar from "../navbar/navbar_container";
import Sidebar from "../sidebar/sidebar_container";


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // currentSearch: ""
        }
    }
    
    componentDidMount() {
   

        this.props.searchVideos(this.props.match.params.searchResults)
           
    }

    // componentDidUpdate(prevProps){

    // }

    // componentWillUnmount(){
        
    // }

    render(){
        const {videos} = this.props  

        const searchedVideos = this.props.videos.map(video => {
            return (
                <SearchIndexItem
                    key={video.id}
                    video={video}
                />
            )
        })

        // Search currently working but it needs to be a bit smarter?

        // const searchedVideos = this.props.videos.filter(video => {
    
        //     return (
        //         <SearchIndexItem
        //             key={video.id}
        //             video={video}
        //         />
        //     )
        // })


        // Unsure what this could test
        
     

        // This is currently being handled in navbar. Looking to push the props from navbar?
        // Might need to handle search in both so user can search on search page
        return (
            <div>
                <div className="video-show-main">
                    <Navbar />
                    <div className="show">
                        <Sidebar />
                        <div className="searched-vids">
                            {searchedVideos}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Search;
