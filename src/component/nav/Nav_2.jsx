import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../../css/bootstrap.min.css"
import { Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import itemData from "../../data/classify.js"

class nav extends Component {
    constructor(props) {
        super(props);
        let values = JSON.parse(itemData);
        this.state = { 
            values:values,
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
    return <Nav.Item key={index}>
                <Nav.Link>
                <Link to={value.hashpath} style={this.state.a_style}>
                    {value.classify}
                </Link>
                </Nav.Link>
            </Nav.Item>;
    }

    render() {
        return(
            <Nav>
                {this.getElements(this.state.values)}
            </Nav>
        )
    }
}
export default hot(module)(nav);