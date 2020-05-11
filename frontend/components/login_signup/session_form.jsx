import React from "react"; 


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email: "",
            password: ""
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
        if (user) {
            this.props.history.push("/")
        } else {
            this.props.history.push("/signup")
        }
    }

    renderErrors(){ //Might need some work
        return(
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
        return (
            <div className="signup-parent">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    {/* <br/>
                    {this.renderErrors()}
                    <br /> */}
                    <label>
                        <div>Username:</div>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
                            className="signup-input"
                            />
                    </label>
                    <br/>
                    <label>
                        <div>Email:</div>
                        <input type="text"
                            value={this.state.email} 
                            onChange={this.update("email")} 
                            className="signup-input"
                            />
                    </label>
                    <br/>
                    <label>
                        <div>Password:</div>
                        <input type="text"
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="signup-input"
                            />
                    </label>
                    <br/>
                    <label className="login-return">{this.props.navLink}</label>
                    <input className="session-submit" type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm; 


// {/* <br />
//     <label>Username:
//                         <input type="text"
//             value={this.state.username}
//             onChange={this.update("username")}
//             className="login-input"
//         />
//     </label> */}