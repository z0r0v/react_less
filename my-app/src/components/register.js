import React from "react";
const btn = {
    background:'#800080',
    width:'270px',
    height:'30px',
    color:'#FFFFFF'
}

const inpStyleReg1 = {
    width:'145px',
    height: "30px",
    marginBottom:'5px',
}

const inpStyleReg2 = {
    width:'140px',
    height: "30px",
    marginBottom:'5px',
}

const inpStyleReg3 = {
    width:'130px',
    height: "30px",
    marginBottom:'5px',
}


   function register() {
    return(
        <div>
            <span>Enter you email: </span>
            <input style={inpStyleReg1} type="text" placeholder="Enter you email" />
            <br/>
            <span>Create password: </span>
            <input style={inpStyleReg2} type="password" placeholder="Enter you Password" />
            <br/>
            <span>Confirm password: </span>
            <input style={inpStyleReg3} type="password" placeholder="Confirm you Password" />
            <br/>
            <button style={btn} type="submit">Create account</button>
        </div>
    );
 }
export default register;