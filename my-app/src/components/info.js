import  React from "react";

const style_h2 = {
    textAlign:'center',
    color:'#800080',
    fontSize:'19px',
}

class Info extends React.Component {
    render() {
        return (
            <div>
                <h2 style={style_h2}>How to conquer the whole world
                so that the orderlies will not know about it.</h2>
            </div>
        );
    }
}
  export default Info;