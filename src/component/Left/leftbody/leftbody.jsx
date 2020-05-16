import React, { Component} from "react";
import {hot} from "react-hot-loader";
class leftbody extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            values: [{'text':'123'},{'text':'456'}],
            a_style : {
                display:"block",
                width:"100%",
                height:"100%",
                color:"#000",
                padding:"0 0 0 15px",
            },
            li_style : {
                border: "1px solid #CED4DA",
                position : "relative",
                margin:"2px 0",
                borderRadius: "10px 0 0 10px",
            },
        };
        this.li_slide = this.li_slide.bind(this);
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
    return <li key={index} style={this.state.li_style} onMouseOver={this.li_slide} onMouseOut={this.li_slide}><a href="javascript:;" style={this.state.a_style}>{value.text}<span style={{float:"right"}}>></span></a></li>;
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