import React from "react"; 

class IdentifierForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
        // Likely refactoring this to send the user to the password entry form
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.verifyForm(this.state);
    }

    render() {
        return(
            <div className="email-main">
                <form onSubmit={this.handleSubmit} className="email-form">
                        Please enter an email or phone number
                    <br />
                    <label>Email:
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="email-input"
                        />
                    </label>
                    <br/>
                   
                    <label className="create-account">{this.props.navLink}</label>
                    <input className="identifier-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
        
    }
}

export default IdentifierForm;