import React, { Component} from "react";
import ReactMarkdown from "react-markdown";
function Resistance() {
    return(<ReactMarkdown source={input} />)
}
const input = 
`# 电阻
- 电阻是衡量电路中电流阻力的
- 短路电路中电阻阻值很小。当电源电压非常大的时候短路是非常危险的，因为巨大的电流能够导致巨大的热能量释放
- 开路是指电流流通路径被中断
- 闭路是指一个完整的电路，电流能够连续的流通下去
- 开关是用来控制电路开或闭的
- 术语“开”或者“关”指的是在整个电路中的开关状态，当开关开的时候：没有电流流通，当开关关的时候电路中就有电流流通

[ALL ABOUT CIRCUITS 电阻](https://www.allaboutcircuits.com/textbook/direct-current/chpt-1/resistance/)`


export default Resistance