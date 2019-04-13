const SessionKey = "session";

function UserSessionEvents() {
    let handlers = [];
    this.subscribe = (func)=>{
        handlers.push(func);
    };

    this.unsubscribe = (func)=>{
        handlers.remove(func);
    };

    this.emit = ()=> {
        handlers.forEach((h)=> {
            h();
        });
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
        window.userSessionEvents.emit();
    };
    this.isValid =()=>{
        if (window.userSessionData) return true;
        this.load();
        return window.userSessionData!= null;
    };
    this.clear = () =>{
        window.userSessionData = null;
        localStorage.removeItem(SessionKey);
        window.userSessionEvents.emit();/* Вызвал событие для переменной*/
    };

}

export default UserSession;