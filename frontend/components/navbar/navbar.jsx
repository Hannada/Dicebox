import React from "react"; 
import { Link } from "react-router-dom";
import SidebarContainer from "../sidebar/sidebar_container"
// import Searchbar from "../search/search";


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filteredSearch: [],
            search: ""
        }; 

        this.sidebarSwap = this.sidebarSwap.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    userStatus() {
        if (this.props.currentUser) {
            return this.logoutOption()
        } else {
            return this.loginOption()
        }
    } 

    sidebarSwap() {
        if (this.props.isOpen === false) {
            this.props.expand();
        } else {
            this.props.revert(); 
        }
    }

    update (field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSearch(e) {
        e.preventDefault();

        if (this.state.search) {
            this.props.searchFilter(this.state.search)
            this.props.history.push(`videos/searrch/${this.state.search}`)
            this.setState({ search: "" })
        }
    }


    logoutOption() {
        return (
        <hgroup className="login-signup">
            {/* <Link to="/" className="home"><img src={window.d20Url} width="40" height="30" /></Link> */}
            <div className="home-sidebar-logo">
                <div>
                    <p><img src={window.barsLogoUrl} width="20" height="20" onClick={this.sidebarSwap} /></p>
                </div>
                <Link to="/"> <p className="home"><img src={window.d20Url} width="30" height="30" />Dicebox</p></Link>
                {/* <Link to="/" className="home"><img src={window.d20Url} width="40" height="30" /></Link> */}

            </div>
            <div >
                <form onSubmit={this.handleSearch}>
                    <input className="searchbar" 
                    type="text" 
                    placeholder="Search..." 
                    value={this.state.search}
                    onChange={this.update("search")}

                    />
                
                </form>

                    {/* <Searchbar/> */}
                    
               
            </div>
            
            <div className="login-upload">
                <Link to="/upload"><img src={window.uploadLogoUrl} width="20" height="20"/></Link>
                <button className="header-button" onClick={this.props.logout}><img src={window.diceLoginUrl} width="20" height="20" />{this.props.currentUser.username}</button>
            </div>
        </hgroup>
        )
    }

    loginOption() {
        return (
        <nav className="login-signup">
            <div className="home-sidebar-logo">
                <div>
                    <p><img src={window.barsLogoUrl} width="20" height="20" onClick={this.sidebarSwap} /></p>
                </div>
                <Link to="/"> <p className="home"><img src={window.d20Url} width="30" height="30" />Dicebox</p></Link>
            </div>
            <div>
                <input className="searchbar"
                    type="text"
                    placeholder="Search..." />
                {/* value=
                onChange */}

            </div>
            <div className="login-upload">
                <Link to="/login" className="login-button"><img src={window.diceLoginUrl} width="20" height="20" />Login</Link>
            </div>

        </nav>
        )
    }

    render() {
        return (

            <div>
              {/* <div>
                    <p><img src={window.barsLogoUrl} width="20" height="20" onClick={this.sidebarSwap} /></p>
              </div> */}
                {this.userStatus()}
            </div>
      
        )
    }

}

export default Navbar; 