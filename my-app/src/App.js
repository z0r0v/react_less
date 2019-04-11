import React from "react";
import Info from "./components/info";
import AppRouter from "./components/Routing"

class App extends React.Component {
    render() {
        return (
            <div>
                <Info />
                <AppRouter />
            </div>
        );
    }
}
export default App;