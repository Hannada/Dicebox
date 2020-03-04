import React from "react";
import { Link } from "react-router-dom";
// import DiceLogo from 

class IdentifierForm extends React.Component {
    constructor(props) {
        super(props);

        // Going to try altering the accepted state?
        this.state = {
            email: "", 
            verified: false,  
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.verifyEmail = this.verifyEmail.bind(this); //trying to bind the check?
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
        // Likely refactoring this to send the user to the password entry form
    }

 

    verifyEmail(e) {
        e.preventDefault(); 
        this.props.verifyForm(this.state.email);
    }

    // user works instead of state
    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state);
    //     this.props.verifyForm(this.state).then(this.props.history.push({
    //         pathname: "/password",
    //         state: this.state
    //     }))
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state);
    //     debugger 
    //     this.props.verifyForm(this.state).then(this.props.history.push({
    //         pathname: "/password",
    //         state: this.state
    //     }))
    // }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.verifyForm(this.state).then( ({test}) => {
           if(test) { 
            this.props.history.push({
            pathname: "/password",
            state: this.state
            })
          }else {
            this.props.renderErrors(); 
            }
        })
    }



    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state);
    //     this.props.verifyForm(this.state)
    //         .then( (res) => {
    //             if (res.type === "RECEIEVE_SESSION_ERRORS"){
    //                 this.renderErrors();

    //             }else {
    //                 this.props.history.push({
    //                     pathname: "/password",
    //                     state: this.state
    //                 })
    //             }
    //         }
    //     )
    // }

    //Above version thinks verify form isnt a function?



    renderErrors() { //Might need some work
        return (
            <ul>
                {this.props.errors.map(error => {
                    return <li>
                        {error}
                    </li>
                })}
            </ul>
        )
    }

    render() {
        const errorPrint = this.renderErrors();

        return (
            <div className="email-main">
                {/* <div className="login-logo"></div> */}
                <form onSubmit={this.handleSubmit} className="email-form">
                    Please enter an email
                    <br />
                    <label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="email-input"
                            errorload={errorPrint} // loading it in the type hasnt affect much
                        />
                    </label>
                    <br />

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