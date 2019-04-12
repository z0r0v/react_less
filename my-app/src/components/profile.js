import React from "react";

const btn = {
    background:'#800080',
    width:'250px',
    height:'30px',
    color:'#FFFFFF'
}

const inpStyleProf = {
    width:'244px',
    height: "100px",
    marginBottom:'5px',

}

   function profile() {
        return (
            <div>
                <span>Сhange your content: </span>
                <br/>
                <input style={inpStyleProf} type="text" placeholder="Enter your content here"/>
                <br/>
                <button style={btn} type="submit">Apply</button>
            </div>);
    }
export default profile;