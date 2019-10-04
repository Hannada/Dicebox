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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.regForm(user);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="login-form">
                        Temp Header
                    <br />
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                    <br />
                    <label>Email:
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <input className="identifier-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
        
    }
}

export default IdentifierForm;