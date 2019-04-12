import  React from "react";

const style_p = {
    textAlign:'center',
    color:'#800080',
}

class Create extends React.Component {
    render() {
        return (
            <div>
                <p style={style_p}>Login buddy if you have an account<br/>
                If there is no account, we will help you to create it.</p>
            </div>
        );
    }
}
export default Create;