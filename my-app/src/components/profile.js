import React from "react";
import "../App.css";
import UserSession from "../UserSession";
import nClient from "../api/Client";

   function profile() {

       let session = new UserSession();
       if (!session.isValid()) {
           return <div><p className='PneadLoggin'>You need to login</p></div>
       }
       else
       {
           let content = '';
           let client = new nClient();
           client.getContent(session.getJwt()).then((data) =>{content=data}, (err) => {} );
        return (
            <div>
                <span className='spanStl'>Сhange your content: </span>
                <br/>
                <div className='spanStl'>{content}</div>
                <input className='inpStyleProf' type="text" placeholder="Enter your content here" value={content} onChange={}/>
                <br/>
                <button className="btn" type="submit" onClick={(e) => {
                    // client.sendContent(this.state.contentValue, );
                }}>Apply</button>
            </div>);
    }
   }
export default profile;