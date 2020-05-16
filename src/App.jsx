// 这个是整体排版的文件模块

import React, { Component} from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import "./css/bootstrap.min.css"
import { Container,Row,Col } from 'react-bootstrap';
import Nav from "./component/nav/Nav.jsx"
import Left from "./component/Left/Left.jsx" 
const style_nav = {
  marginTop: "5px",
  paddingTop:"15px",
  border: "2px solid rgb(173, 3, 173)",
  borderBottom: "0px",
  borderRadius: "15px 15px 0 0",
  boxShadow: "0px 0px 15px white",
  backgroundColor:"rgb(110, 34, 110)",
}
const style_main = {
  backgroundColor:"#FFFFFF",
  border: "2px solid rgb(173, 3, 173)",
  borderTop: "0px",
  height:"1000px",
  boxShadow: "0px 0px 15px white",

}
const style_left = {
  backgroundColor:"#F7F7F7",
  position: "fixed",
  left:"7%",
  height:"80%",
  boxShadow: "5px 0px 10px white",
  borderRadius: "10px 10px 0 0",
}
class App extends Component{
  render(){
    return(
      <Container fluid>
        {/* 导航栏 */}
        <Row>
          <Col xs={{span: 7,offset: 3}} className="nav" style={style_nav}>
          </Col>
        </Row>


        <Row>
          {/* 左侧 */}
          <Col xs={{span: 2,offset: 1}}>
            <Col xs={2} style={style_left} className="left">
              123
            </Col>
          </Col>
          {/* 中间 */}
          <Col xs={7} className="main" style={style_main}>2 of 3 (wider)</Col>
          {/* 右侧 */}
          <Col xs={1}>3 of 3</Col>
        </Row>
      </Container>
    );
  }
  componentDidMount() {
    ReactDOM.render(<Nav />,document.querySelector(".nav"))
    ReactDOM.render(<Left />,document.querySelector(".left"))
  }
}
export default hot(module)(App);