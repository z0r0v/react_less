import React from "react";

class profile extends React.Component {
    function profile() {
        return (
            <div>
                <span>Сhange your content </span>
                <br/>
                <input style={{margin:"10px 0"}} type="text" placeholder="Enter your content here" style={{width:"350px", height: "150px",}}></input>
                <br/>
                <button style={{backgroundColor:"#44014c", color:"#fff", width:"150px", height: "30px",  margin:"15px 0"}} type="submit">Apply</button>
            </div>);
    }
}
export default profile;