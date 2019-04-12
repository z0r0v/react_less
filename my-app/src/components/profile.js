import React from "react";

const btn = {
    background:'#800080',
    width:'250px',
    height:'30px',
    color:'#FFFFFF'
}

   function profile() {
        return (
            <div>
                <span>Сhange your content </span>
                <br/>
                <input type="text" placeholder="Enter your content here"/>
                <br/>
                <button style={btn} type="submit">Apply</button>
            </div>);
    }
export default profile;