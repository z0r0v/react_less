import React from "react";
import "../App.css";

   function profile() {
        return (
            <div>
                <span className='spanStl'>Сhange your content: </span>
                <br/>
                <input className='inpStyleProf' type="text" placeholder="Enter your content here"/>
                <br/>
                <button className="btn" type="submit">Apply</button>
            </div>);
    }
export default profile;