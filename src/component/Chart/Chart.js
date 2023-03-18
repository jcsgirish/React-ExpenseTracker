import React from "react";

import "./Chart.css"

import ChatBar from "./ChartBar"



const Chart =(props)=>{
    const datapointvalues=props.data.map(data=>data.value)
    
    const totalMaximum=Math.max(...datapointvalues);


    return(
        <div className="chart"> 
            {props.data.map((data)=>
            (
            <ChatBar
            key={data.label}
            value={data.value}
            label={data.label}
            maxValue={totalMaximum}></ChatBar>
            ))}
        </div>
    )
}
export default Chart