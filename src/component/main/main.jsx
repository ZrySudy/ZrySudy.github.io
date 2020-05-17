import React, { Component} from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Cricuit from "./component/cricuit"
import Classify from "../../data/classify.js"
import Cricuitdata from "../../data/circuit/cricuit"

import Init from "../../data/circuit/init.jsx"
class main extends Component {
    constructor(props) {
        super(props);
        let values = JSON.parse(Classify);
        let values2 = JSON.parse(Cricuitdata);
        this.state = { 
            values:values,
            values2:values2,
            //用来存储模板内容标签
            arrclass:[<Cricuit/>,2,3],
            arrCricuit:[<Init/>,2,3],
        };
    }
    //1.新增分类内的列表
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
    return  (
            <Route key={index} path={value.hashpath}>
                {this.state.arrclass[index]}
            </Route>
    )

    }

    //2. 新增分类内的列表的内容
    getElements2(values) {
        if(!values){
            return null;
        }
        return values.map((value, index) => {
            return this.addEle2(value, index);
        });
    }

    

    addEle2(value, index)  {
        // 需要指定key 不重复，否则会报警告
    return  (
            <Route key={index} path={value.hashpath}>
                {this.state.arrCricuit[index]}
            </Route>
    )
    }
    render() {
        return(
            <Switch>
                <>
                {/* 1.新增分类内的列表 */}
                {this.getElements(this.state.values)}

                {/* 2. 新增分类内的列表的内容 */}
                {this.getElements2(this.state.values2)}
                </>
            </Switch>
        )
    }
}  

export default main;