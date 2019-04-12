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
    border:'1px solid #800080',

}

const inpStylePas = {
    width:'170px',
    height: "30px",
    marginBottom:'5px',
    border:'1px solid #800080',

}
const spanStl = {
    color:'#800080',
    fontWeight:"700",
}
    function login() {
        return (
            <div>
                <span style={spanStl}>Login: </span>
                <input style={inpStyleLog} type="text" placeholder="Enter you email or login" /><br/>
                <span style={spanStl}>Password: </span>
                <input style={inpStylePas} type="password" placeholder="Enter you Password" /><br/>
                <button style={btn} type="submit">Login you account</button>
            </div>
        );
    }
export default login;