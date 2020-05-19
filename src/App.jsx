// 这个是整体排版的文件模块

import React, { Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {hot} from "react-hot-loader";
import "./css/bootstrap.min.css"
import { Container,Row,Col } from 'react-bootstrap';
import Nav from "./component/nav/Nav.jsx"
import Nav_2 from "./component/nav/Nav_2.jsx"

import Left from "./component/Left/Left.jsx" 
import Main from "./component/main/main.jsx"
const style_nav = {
  marginTop: "5px",
  paddingTop:"15px",
  border: "2px solid rgb(173, 3, 173)",
  borderBottom: "0px",
  borderRadius: "15px 15px 0 0",
  boxShadow: "0px 0px 15px white",
  backgroundColor:"rgb(110, 34, 110)",
}
const style_nav_2 = {
  border: "2px solid rgb(173, 3, 173)",
  borderBottom: "0px",
  backgroundColor:"#A06EA0",
}

const style_main = {
  backgroundColor:"#FFFFFF",
  border: "2px solid rgb(173, 3, 173)",
  borderTop: "0px",
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
      <Router>
        <Container fluid>
          {/* 导航栏 */}
          <Row>
            <Col xs={12} sm={{span: 8,offset: 4}} md={{span: 7,offset: 3}} className="nav" style={style_nav}>
              <Nav />
            </Col>
          </Row>

          <Row className="d-sm-none" style={style_nav_2}>
            <Nav_2 />
          </Row>

          <Row>
            {/* 左侧 */}
            <Col  sm={{span: 3,offset: 1}} md={{span: 2,offset: 1}} className="d-none d-sm-block">
              <Col  sm={3} md={2} style={style_left} className="left">
                <Left />
              </Col>
            </Col>
            {/* 中间 */}
            <Col xs={12} sm={8} md={7} className="main" style={style_main}>
                <Main />
            </Col>
            {/* 右侧 */}
            <Col md={1} className="d-none d-md-block">3 of 3</Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
export default hot(module)(App);