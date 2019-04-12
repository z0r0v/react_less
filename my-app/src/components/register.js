import React from "react";
const btn = {
    background:'#800080',
    width:'250px',
    height:'30px',
    color:'#FFFFFF'
}
   function register() {
    return(
        <div>
            <span>Enter you email </span>
            <input type="text" placeholder="Enter you email" />
            <br/>
            <span>Create password </span>
            <input type="password" placeholder="Enter you Password" />
            <br/>
            <span>Confirm password </span>
            <input type="password" placeholder="Confirm you Password" />
            <br/>
            <button style={btn} type="submit">Create account</button>
        </div>
    );
 }
export default register;