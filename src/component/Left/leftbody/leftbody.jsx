import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {Link} from "react-router-dom";
import itemData from "../../../data/classify.js"
class leftbody extends Component {
    constructor(props) {
        super(props);
        let values = JSON.parse(itemData);
        this.state = { 
            values:values,
            a_style : {
                display:"block",
                width:"100%",
                height:"100%",
                color:"#000",
                padding:"0 0 0 15px",
            },
            li_style : {
                backgroundColor:"#CED4DA",
                position : "relative",
                margin:"2px 0",
                borderRadius: "10px 0 0 10px",
            },
        };
    }

    getElements(values) {
        if(!values){
            return null;
        }
        return values.map((value, index) => {
            return this.addEle(value, index);
        });
    }

    addEle(value, index)  {
         
        // 需要指定key 不重复，否则会报警告
    return <li key={index} style={this.state.li_style} onMouseOver={this.li_slide} onMouseOut={this.li_slide}>
                <Link to={value.hashpath} style={this.state.a_style}>
                    {value.classify}<span style={{float:"right"}}>></span>
                </Link>
            </li>;
    }

    li_slide(e) {
        if (e.type == "mouseover")
            e.currentTarget.style.left = "10px";
        else
            e.currentTarget.style.left = "0px";
    }
    render() {
        return(
            <>
                {this.getElements(this.state.values)}
            </>
        )
    }
}
export default hot(module)(leftbody);