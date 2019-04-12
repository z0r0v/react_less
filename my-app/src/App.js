import React from "react";
import Info from "./components/info";
import AppRouter from "./components/Routing";
import Create from "./components/Create";

const divBord = {
    border:'2px solid #800080',
    marginTop:'200px'

}

class App extends React.Component {
    render() {
        return (
            <div style={divBord}>
                <Info />
                <AppRouter />
                <Create />
            </div>
        );
    }
}
export default App;