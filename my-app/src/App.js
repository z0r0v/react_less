import React from "react";
import Info from "./components/info";
import AppRouter from "./components/Routing";
import Create from "./components/Create";

class App extends React.Component {
    render() {
        return (
            <div>
                <Info />
                <AppRouter />
                <Create />
            </div>
        );
    }
}
export default App;