import React from "react";
import "../App.css";
import UserSession from "../UserSession";
import nClient from "../api/Client";


class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.client = new nClient();
        this.session = new UserSession();
    }

    componentDidMount() {
        this.client.getContent(this.session.getJwt()).then((data) => {
            this.setState(data);
            console.log("request complete")
        }, (err) => {
            console.error(err);
        });
    }


    handleSubmit(event) {
        alert('Сочинение отправлено: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        if (!this.session.isValid()) {
            return <div><p className='PneadLoggin'>You need to login</p></div>
        }
        else {

            return (
                <div>
                    <span className='spanStl'>Сhange your content: </span>
                    <br/>
                    <input className='inpStyleProf' type="text" placeholder="Enter your name"
                           value={this.state.name} onChange={(e) => this.setState({name: e.target.value})
                           }/>
                    <br/>
                    {/*Узнать почему тот не работает pattern?*/}
                    <input className='inpStyleProf'  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text"  placeholder="Enter your phone"
                           value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})
                    }/>
                    <br/>
                    <input className='inpStyleProfAdd' type="text" placeholder="Enter your address"
                           value={this.state.address} onChange={(e) => this.setState({address: e.target.value})
                    }/>
                    <br/>
                    <button className="btn" type="submit" onClick={(event) => {
                        this.client.sendContent({name:this.state.name, phone:this.state.phone,
                            address:this.state.address}, this.session.getJwt());
                    }}>Apply
                    </button>
                </div>);
        }
    }
}
export default profile;