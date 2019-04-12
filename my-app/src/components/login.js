import  React from "react";

const btn = {
    background:'#800080',
    width:'250px',
    height:'30px',
    color:'#FFFFFF'
}

const inpStyleLog = {
    width:'198px',
    height: "30px",
    marginBottom:'5px',

}

const inpStylePas = {
    width:'170px',
    height: "30px",
    marginBottom:'5px',

}

    function login() {
        return (
            <div>
                <span>Login: </span>
                <input style={inpStyleLog} type="text" placeholder="Enter you email or login" /><br/>
                <span>Password: </span>
                <input style={inpStylePas} type="password" placeholder="Enter you Password" /><br/>
                <button style={btn} type="submit">Login you account</button>
            </div>
        );
    }
export default login;