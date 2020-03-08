import React from "react";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            hidden: true,
            // verfied: false //Trying to add verfied to the state
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden })
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state, this.props.location.state)
    //     this.props.regForm(user).then(this.props.history.push("/"))
    // }



    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state, this.props.location.state)

    //     debugger 
    //     this.props.regForm(user).then(({ password }) => {
    //         if (password) {
    //             this.props.history.push({
    //                  pathname: "/"})
    //         } else {
    //             this.renderErrors();
    //         }
    //     })
    // }


    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state, this.props.location.state)

    //     this.props.regForm(user).then(({ password }) => {
    //         if (password === user.password) {
    //             debugger
    //             this.props.history.push({
    //                 pathname: "/"
    //             })
    //         }
    //     })
    // }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state, this.props.location.state)

        this.props.regForm(user).then(({ password }) => {
                this.props.history.push({
                    pathname: "/"
                })
        })
    }

    //Removing the if conidtional lets erorrs run properly but not sure how the render is affected. must explore. 
    


    // Above version still logs in the user, fulfilling the same use as  the promise but doesnt stop push



    renderErrors() { //Might need some work, has the same name as the dispatched action right now
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
        return (
            <div className="login-parent">
                <form onSubmit={this.handleSubmit} className="login-form">
                    {/* <br />
                    {this.renderErrors()}
                    <br /> */}
                    <label>Password:
                        <input type={this.state.hidden ? "password" : "text"}
                            // type="text"
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="login-input"
                        />
                    </label>
                    <h2>{this.renderErrors()}</h2>
                    <br />
                    {/* <label className="signup-return">{this.props.navLink}</label> */}
                    <input className="login-submit" onClick={this.toggleShow} type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default LoginForm; 