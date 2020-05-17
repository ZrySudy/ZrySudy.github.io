import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Leftbody from "./leftbody/leftbody.jsx"
import Lefthead from "./lefthead/lefthead.jsx"
class Left extends Component {
    render() {
        return(
            <>
                <div>
                    <Lefthead />
                </div>
                <ul>
                    <Leftbody />
                </ul>
            </>
        )
    }
}
export default hot(module)(Left);