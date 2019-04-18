import jwt from 'jsonwebtoken';/*Подрубил JWT*/
const SessionKey = "session";


function UserSessionEvents() {
    let handlers = [];
    this.subscribe = (func)=>{
        handlers.push(func);
    };
}

window.userSessionEvents = new UserSessionEvents();

function UserSession() {
    this.load = ()=>{
        window.userSessionData = JSON.parse(localStorage.getItem(SessionKey));
    };
    /*если ключ не совпал то приложение должно или упасть или заблокироваться*/
    this.create =(token)=>{
        let decodedData = jwt.verify(token, 'server-secret-key');
        let sessionData = {
            data: decodedData, jwt: token
        };
        localStorage.setItem(SessionKey, JSON.stringify(sessionData));
        window.userSessionData = sessionData;

        /*else {приложение падает}*/
    };
    this.isValid =()=>{
        if (window.userSessionData) return true;
        this.load();
        return window.userSessionData!= null;
    };
    this.clear = () =>{
        window.userSessionData = null;
        localStorage.removeItem(SessionKey);
    };
    this.getJwt = ()=> {
        return window.userSessionData.jwt;
    }
}

export default UserSession;