import React from "react";

class register extends React.Component {

function register() {
    return(
        <div>
            <span>Enter you email </span>
            <input style={{margin:"5px 0"}} type="text" placeholder="Enter you email"></input>
            <br/>
            <span>Create password </span>
            <input style={{margin:"5px 0"}} type="password" placeholder="Enter you Password"></input>
            <br/>
            <span>Confirm password </span>
            <input style={{margin:"5px 0"}} type="password" placeholder="Confirm you Password"></input>
            <br/>
            <button style={{backgroundColor:"#44014c", color:"#fff", width:"150px", height: "30px",  margin:"15px 0"}} type="submit">Create account</button>
        </div>
    );
 }
}
export default register;