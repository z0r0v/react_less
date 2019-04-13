import React from "react";
import client from "../api/Client";
import "../App.css";
import UserSession from "../UserSession";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password:'', confpassword:''};

        this.client = new client();

        this.handleEail = this.handleEail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlePassword = this.handlePassword.bind(this);

        this.confPassword = this.confPassword.bind(this);
    }

    handleEail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    confPassword(event) {
        this.setState({confpassword: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.email + this.state.password + this.state.confpassword);
        event.preventDefault();
        this.client.register(this.state).then(() => {
            alert();/*Вызываем логин в клиенте и дожидаемся результата выполнения операции login
            регистрируе 2 функции которые дожидаються результата*/
        },(error) => {alert(error);}/*Получаем в случае ошибки*/
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="spanStl">
                    Enter you email:
                    <input className="inpStyleReg1" placeholder="Enter you email" type="text" value={this.state.email} onChange={this.handleEail} />
                </label><br/>
                <label className="spanStl">
                    Create password:
                    <input className="inpStyleReg2" placeholder="Enter you Password" type="password" value={this.state.password} onChange={this.handlePassword} />
                </label><br/>
                <label className="spanStl">
                    Confirm password:
                    <input className="inpStyleReg3" placeholder="Confirm Password" type="password" value={this.state.confpassword} onChange={this.confPassword} />
                </label><br/>
                <input className='btn' type="submit" value="Create you account" />
            </form>
        );
    }
}

export default Register;
