import React from "react"; 
import { Link } from "react-router-dom";
// import DiceLogo from 

class IdentifierForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
        // Likely refactoring this to send the user to the password entry form
    }

    // handleChange(e) {

    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.verifyForm(this.state).then(this.props.history.push({
            pathname:"/password",
            state: this.state
        }))
    }

    render() {
        return(
            <div className="email-main">
                {/* <div className="login-logo"></div> */}
                <form onSubmit={this.handleSubmit} className="email-form">
                        Please enter an email or phone number
                    <br />
                    <label>
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="email-input"
                        />
                    </label>
                    <br/>
                   
                    {/* <label className="create-account" value={this.props.navLink}>Create Account</label> */}
                    <Link to="signup" className="create-account">Create Account</Link>
                    {/* <li className="identifier-submit"></li> */}
                    <input className="identifier-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
        
    }
}

export default IdentifierForm;