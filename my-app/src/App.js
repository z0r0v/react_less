import React from "react";
import Info from "./components/info";
import AppRouter from "./components/Routing";
import Create from "./components/Create";
import "./App.css";
import UserSession from "./UserSession";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.userSession = new UserSession();
        this.state = {isLoggined: this.userSession.isValid()};
        window.userSessionEvents.subscribe(()=>{
            this.setState({isLoggined: this.userSession.isValid()});
        })
    }
    render() {
        return (
            <div className="divBord">
                <Info />
                <AppRouter isLoggined={this.state.isLoggined} />
                <Create />
            </div>
        );
    }
}
export default App;