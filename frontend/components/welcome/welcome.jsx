import React from "react"; 
import { Link } from "react-router-dom";

const Welcome = ({currentUser, logout}) => {


    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/" className="home">Home</Link>
            <Link to="/videos/4">Video Test</Link>
            <Link to="/login" className="login-button">Login</Link>
            {/* <Link to="/signup">Sign Up!</Link> */}
        </nav>
    )
    

    const logoutOption = () => (
        <hgroup className="login-signup">
            <h2 className="header-name">{currentUser.username}</h2>
            <button className="header-button" onClick={logout}>Logout</button>
            <Link to="/videos/4">Video Test</Link>
            <Link to="/">Home</Link>

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
//     debugger

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