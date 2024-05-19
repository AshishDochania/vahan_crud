import "../css/form.css"
import React from "react"
import Form1 from "./form1";
import Form3 from "./form3";
import Form4 from "./form4";
import Form2 from "./form2";
export default function MainForm() {
    const [click,changebut]=React.useState(1);
    function change(val){
        changebut(val);
        console.log(val);
    }

    return <div className={"form t"+click}>
            <div className="buttons">
                <button className={click===1?"but n1 active":"but"} onClick={()=>change(1)}>Create</button>
                <button className={click===2?"but n2 active":"but"} onClick={()=>change(2)}>Update</button>
                <button className={click===3?"but n3 active":"but"} onClick={()=>{change(3);}}>Read</button>
                <button className={click===4?"but n4 active":"but"} onClick={()=>change(4)}>Delete</button>
                <div className={"line n"+click} style={{left:(click-1)*90}}></div>
            </div>
            <div class="tab-highlighter"></div>
                {click===1 && <Form1 />}
                {click===2 && <Form2 />}
                {click===3 && <Form3 />}
                {click===4 && <Form4 />}
            
           </div>
}

// need to give action and method to the form body so that it can send requests