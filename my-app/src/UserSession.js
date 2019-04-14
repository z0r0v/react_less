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
    this.create =(jwt)=>{
        localStorage.setItem(SessionKey, JSON.stringify({
            email:"123@mai.ru", jwt:jwt
        }));

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
}

export default UserSession;