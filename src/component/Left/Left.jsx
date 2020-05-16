import React, { Component} from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import Leftbody from "./leftbody/leftbody.jsx"
import Lefthead from "./lefthead/lefthead.jsx"
class Left extends Component {
    render() {
        return(
            <>
                <div className = "lefthead">
                </div>
                <ul className = "leftbody">
                </ul>
            </>
        )
    }
    componentDidMount() {
        ReactDOM.render(<Lefthead />,document.querySelector(".lefthead"))
        ReactDOM.render(<Leftbody />,document.querySelector(".leftbody"))
    }
}
export default hot(module)(Left);