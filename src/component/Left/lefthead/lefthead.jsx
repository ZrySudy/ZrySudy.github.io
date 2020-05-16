import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../../../css/bootstrap.min.css"
import { InputGroup,FormControl } from 'react-bootstrap';
class Lefthead extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputSearch : {
                marginTop:"10px"
            }
        };
    }
    render() {
        return(
            <>
                <InputGroup className="mb-3" style={this.state.inputSearch}>
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">搜索</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </>
        )
    }
}
export default hot(module)(Lefthead);