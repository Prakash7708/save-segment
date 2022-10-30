import React,{ useState } from 'react';
import './seg.css';
import { useFormik } from "formik";
import axios from "axios";
function Segments(props) {
    const [schemadata,setSchemadata]=useState([])
    const [number,setNumber]=useState(0)
    
   
    const formik = useFormik({
        initialValues: {
          
        },
        onSubmit: async (values) => {
          //console.log(values)
          let schema=[]
          
          let loopcheck=[values.a,values.b,values.c,values.d,values.e,values.f,values.g]
          for (var i=0;i<loopcheck.length;i++){
              if(loopcheck[i]==="first_name"){
               schema.push({"first_name":"First Name"})
              }else if(loopcheck[i]==="last_name"){
                schema.push({"last_name":"Last Name"})
              }else if(loopcheck[i]==="gender"){
                schema.push({"gender":"Gender"})
              }else if(loopcheck[i]==="age"){
                schema.push({"age":"Age"})
              }else if(loopcheck[i]==="account_name"){
                schema.push({"account_name":"Account Name"})
              }else if(loopcheck[i]==="city"){
                schema.push({"city":"City"})
              }else if(loopcheck[i]==="state"){
                schema.push({"state":"State"})
              }else if(loopcheck[i]===""){
               // alert("null")
              }
              }
      
           
          let userdata={
            "segment_name":`${values.segment_name}`,
            schema,
          }
          console.log(userdata)
          try {
            let res= await axios.post(`https://webhook.site/f2770856-3ad0-45e9-9b43-ea5c53ed0f06`,userdata);
            alert("status 200"+" "+res.statusText);
           // props.cancel()
           //alert("data posted succesfully")
          } catch (error) {
            console.log(error);
          }
        },
      });
let selectSchema1=(count)=> {
        setNumber(number+1)   
    if(count===0){
       setSchemadata(["a"])
    }else if(count===1){
        setSchemadata(["a","b"])
    }else if(count===2){
        setSchemadata(["a","b","c"])
    }else if(count===3){
        setSchemadata(["a","b","c","d"])
    }else if(count===4){
    setSchemadata(["a","b","c","d","e"])
   }else if(count===5){
    setSchemadata(["a","b","c","d","e","f"])
   }else if(count===6){
    setSchemadata(["a","b","c","d","e","f","g"])
   }else{
    alert("You selected All Schemas")
   }
}

// let newColors=(id)=>{
//     alert(inputid)
//   if(color1&inputid==="a"){
//     if(color1===""){
//        return "radio0"
//     }else if(color1==="city"){
//     return "radio2"
// }else if(color1!=="city"){
//     return "radio1"
// }}

// if(color2&id==="b"){
//   if(color2===""){
//     return "radio0"
//  }else if(color2==="city"){
//  return "radio2"
// }else if(color2!=="city"){
//  return "radio1"
// }else{
//     return "radio0"
// }
// }

// }

return (props.trigger)?(
    <div>
      <form onSubmit={formik.handleSubmit}>
     {props.children}
     <div className='navseg'>〈 Saving Segment</div>
     <div className='content'>
     
        <div className='div1'>
        <p>Enter The Name Of The Segment</p>
        <input placeholder={"Name of the Segment"} name={"segment_name"}
        value={formik.values.password} onChange={formik.handleChange} className='form-control'></input>
        <p>To save your segment. You need add the Schema to build the querys</p>
        </div>
        <div className='div2'>
            <div className='inputs'>
                <div className='traits'><input className='radio1' type="radio" checked readOnly></input><span>User Traits</span>
                <input className='radio2' type="radio" checked readOnly></input><span>Group Traits</span></div>
                <div className='borderdiv'>
                {schemadata.map((input)=>{
   
                return <div className='values'><input className={props.newColors(input)} type="radio" checked readOnly></input>
                     
                <select onClick={(e)=>{props.changeColor(e.target.value,input)}} className='form-control' name={input} 
                  onChange={formik.handleChange}
                 >
                   <option  name="" value="" >Add Schema To Segment</option>
                   <option  name="First Name" value="first_name">First Name</option>
                   <option  value="last_name">Last Name</option>
                   <option value="gender">Gender</option>
                   <option value="age">Age</option>
                   <option value="account_name">Account Name</option>
                   <option value="city">City</option>
                   <option value="state">State</option>
                </select>
                
                <h2><b>-</b></h2></div>})}
                </div>
            </div>
        <p className='newschema' onClick={()=>selectSchema1(number)}>+Add new schema</p>
        </div>
        <div className='div3'>
         <input  type={"submit"} value={"Save The Segment"}></input>
         <button onClick={()=>props.cancel()}>Cancel</button>
         </div>
         
     </div>
     </form>
    </div>
  ):"";
}

export default Segments