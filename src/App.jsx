// 这个是整体排版的文件模块

import React, { Component} from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import "./css/bootstrap.min.css"
import { Container,Row,Col } from 'react-bootstrap';
import Nav from "./component/nav/Nav.jsx"
const style_nav = {
  marginTop: "5px",
  paddingTop:"15px",
  border: "2px solid rgb(173, 3, 173)",
  borderBottom: "0px",
  borderRadius: "15px 15px 0 0",
}
const style_main = {
  backgroundColor:"#FFFFFF",
  border: "2px solid rgb(173, 3, 173)",
  borderTop: "0px",
  height:"1000px"
}
const style_left = {
  backgroundColor:"#F7F7F7",
  position: "fixed",
  left:"7.5%"
  
}
class App extends Component{
  render(){
    return(
      <Container fluid>
        {/* 导航栏 */}
        <Row>
          <Col xs={{span: 6,offset: 3}} className="nav" style={style_nav}>
          </Col>
        </Row>


        <Row>
          {/* 左侧 */}
          <Col xs={{span: 2,offset: 1}}>
            <Col xs={2} style={style_left}>
              123
            </Col>
          </Col>
          {/* 中间 */}
          <Col xs={6} className="main" style={style_main}>2 of 3 (wider)</Col>
          {/* 右侧 */}
          <Col xs={2}>3 of 3</Col>
        </Row>
      </Container>
    );
  }
  componentDidMount() {
    ReactDOM.render(<Nav />,document.querySelector(".nav"))
  }
}
export default hot(module)(App);