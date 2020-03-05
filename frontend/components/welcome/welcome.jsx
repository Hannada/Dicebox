import React from "react"; 
import { Link } from "react-router-dom";
import SidebarContainer from "../sidebar/sidebar_container"

const Welcome = ({currentUser, logout}) => {


    const sessionLinks = () => (
        <nav className="login-signup">
            <div>
                <div className="home-sidebar-logos">
                    <p><img src={window.barsLogoUrl} width="20" height="20"/></p>
                    {/* <SidebarContainer/> */}
                </div>
                <Link to="/" className="home"><img src={window.d20Url} width="40" height="30"/></Link>
            </div>
            <p className="title"><img src={window.d20Url} width="30" height="30" />Dicebox</p>
            <Link to="/login" className="login-button"><img src={window.diceLoginUrl} width="20" height="20" />Login</Link>
        </nav>
    )
    

    const logoutOption = () => (
        <hgroup className="login-signup">
            <Link to="/" className="home"><img src={window.d20Url} width="40" height="30" /></Link>
            <p className="title"><img src={window.d20Url} width="30" height="30" />Dicebox</p>
            <button className="header-button" onClick={logout}><img src={window.diceLoginUrl} width="20" height="20" />{currentUser.username}</button>
        </hgroup>
    )
    
    // return currentUser ? logoutOption() : sessionLinks(); 
        if (currentUser) {
            return  logoutOption()
        } else {
           return sessionLinks()
        }

}

// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     sessionLinks() {
//         <nav className="login-signup">
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up!</Link>
//             <Link to="/videos/1">Video Test</Link>
//         </nav>
//     }
//     

//     logoutOption(){
//         <hgroup>
//             <h2 className="header-name">{currentUser.username}</h2>
//             <button className="header-button" onClick={logout}>Logout</button>
//             <Link to="/videos/1">Video Test</Link>
//             <Link to="/">Home</Link>

//         </hgroup>
//     }

//     render() {
//         return (
//             currentUser ? logoutOption() : sessionLinks()
//         )
//     }
// }

export default Welcome; 