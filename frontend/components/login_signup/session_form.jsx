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
            <div>
                <form onSubmit={this.handleSubmit} className="login-form">
                    Temp Header 
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <br />
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <label>Email:
                        <input type="text"
                            value={this.state.email} 
                            onChange={this.update("email")} 
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="text"
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="login-input"
                        />
                    </label>
                    <br/>
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