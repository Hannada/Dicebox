import React from "react"; 
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    constructor(props){
        super(props)
    }



    render() {
        return (
        <nav className="login-signup">
            <div className="home-sidebar-logo">
                <div>
                    <p><img src={window.barsLogoUrl} width="20" height="20" onClick={this.sidebarSwap}/></p> 
                </div>
                <Link to="/" className="home"><img src={window.d20Url} width="40" height="30" /></Link>
            </div>
            <p className="title"><img src={window.d20Url} width="30" height="30" />Dicebox</p>
            <Link to="/login" className="login-button"><img src={window.diceLoginUrl} width="20" height="20" />Login</Link>
        </nav>
        )
    }

}

export default Navbar; 