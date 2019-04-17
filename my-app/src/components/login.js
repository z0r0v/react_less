import  React from "react";
import "../App.css";
import client from "../api/Client";
import UserSession from "../UserSession";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class Login extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {/*Первичная ницализация компонента*/
        super(props);/**/

        /*Тут вводим псевдо клиента*/
        this.client = new client();/*Создаем новый обьект client*/
        this.session = new UserSession(); /*Создали объект*/
        this.state = {login: '', password:''}; /*Инициализируем переменную state*/

        this.handleLogin = this.handleLogin.bind(this); /*Делаем бинд на функцию (уснанавливет контекст ввыполнения)*/
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.updateSession = this.updateSession.bind(this);
    }

    updateSession(){
        this.setState({
            isLogginet:this.session.isValid()/**/
        })
    }

    handleLogin(event) { /*Принимаем event в функцию*/
        this.setState({login: event.target.value}); /*Устанавливаем новое состояние переменной login*/
    }

    handlePassword(event) {/*Принимаем event в функцию*/
        this.setState({password: event.target.value});/*Устанавливаем новое состояние переменной password*/
    }

    handleSubmit(event) { /*Принимаем event в функцию*/
        alert('Отправленное имя: ' + this.state.login + this.state.password);
        event.preventDefault();/*Преврощает поведение события по умолчанию*/
        this.client.login(this.state.login, this.state.password).then((jwt) => {
            alert(jwt);/*Вызываем логин в клиенте и дожидаемся результата выполнения операции login
            регистрируе 2 функции которые дожидаються результата*/
            this.session.create(jwt)/*Сохраняем полученый jws токен для создания новой сессии*/
            this.props.history.push("/"); // Redirect user to main page
        },(error) => {alert(error);}/*Получаем в случае ошибки*/
    )
    }

    render() {
        if(this.state.isLogginet) {
            return(
            <p>Hello! You are already logged in!</p>
        )
        }
        return (
            <form onSubmit={this.handleSubmit}>{/*Регистрируем оброботчки события onSubmit на handleSubmit */}
                <label className='spanStl'>
                    Login:
                    <input className='inpStyleLog' placeholder="Enter you email or login" type="text" value={this.state.login} onChange={this.handleLogin} />
                </label><br/>
                <label className='spanStl'>
                    Password:
                    <input className='inpStyleLog1' placeholder="Enter you Password" type="password" value={this.state.password} onChange={this.handlePassword} />
                </label><br/>
                <input className='btn' type="submit" value="Login you account" />
            </form>
        );
    }
}

export default withRouter(Login);