import './App.css';
import Segments from './Components/Segments';
import React, { useState } from 'react';

function App() {
  const [popup,setPopup]=useState(false)
  const [color1,setColor1]=useState("")
  //const [inputid,setInputid]=useState("")
  const [color2,setColor2]=useState("")
  const [color3,setColor3]=useState("")
  const [color4,setColor4]=useState("")
  const [color5,setColor5]=useState("")
  const [color6,setColor6]=useState("")
  const [color7,setColor7]=useState("")
  
  let cancel=()=> {
    setPopup(false)
  }

  let changeColor=(id,inid)=>{
    if(inid==="a"){
       setColor1(id)
       //setInputid(inid)
    }else if(inid==="b"){
      setColor2(id)
    }else if(inid==="c"){
      setColor3(id)
    }else if(inid==="d"){
      setColor4(id)
    }else if(inid==="e"){
      setColor5(id)
    }else if(inid==="f"){
      setColor6(id)
    }else if(inid==="g"){
      setColor7(id)
    }


  }
let newColors=(id)=>{
    //alert(inputid)
  
    if(color1===""&id==="a"){
       return "radio0"
    }else if(color1==="city"&id==="a"){
    return "radio2"
}else if(color1==="account_name"&id==="a"){
  return "radio2"
}else if(color1==="state"&id==="a"){
  return "radio2"
}else if(id==="a"){
   return "radio1"
}

if(color2===""&id==="b"){
  return "radio0"
}else if(color2==="city"&id==="b"){
return "radio2"
}else if(color2==="account_name"&id==="b"){
return "radio2"
}else if(color2==="state"&id==="b"){
return "radio2"
}else if(id==="b"){
return "radio1"
}

if(color3===""&id==="c"){
  return "radio0"
}else if(color3==="city"&id==="c"){
return "radio2"
}else if(color3==="account_name"&id==="c"){
return "radio2"
}else if(color3==="state"&id==="c"){
return "radio2"
}else if(id==="c"){
return "radio1"
}

if(color4===""&id==="d"){
  return "radio0"
}else if(color4==="city"&id==="d"){
return "radio2"
}else if(color4==="account_name"&id==="d"){
return "radio2"
}else if(color4==="state"&id==="d"){
return "radio2"
}else if(id==="d"){
return "radio1"
}


if(color5===""&id==="e"){
  return "radio0"
}else if(color5==="city"&id==="e"){
return "radio2"
}else if(color5==="account_name"&id==="e"){
return "radio2"
}else if(color5==="state"&id==="e"){
return "radio2"
}else if(id==="e"){
return "radio1"
}

if(color6===""&id==="f"){
  return "radio0"
}else if(color6==="city"&id==="f"){
return "radio2"
}else if(color6==="account_name"&id==="f"){
return "radio2"
}else if(color6==="state"&id==="f"){
return "radio2"
}else if(id==="f"){
return "radio1"
}


if(color7===""&id==="g"){
  return "radio0"
}else if(color7==="city"&id==="g"){
return "radio2"
}else if(color7==="account_name"&id==="g"){
return "radio2"
}else if(color7==="state"&id==="g"){
return "radio2"
}else if(id==="g"){
return "radio1"
}
}

return (
    <div className='row'>
      <div className='col-lg-8'>
      <button className='savesegment' onClick={()=>setPopup(true)}>Save Segment</button>
      </div>
      <div className='col-lg-4'>
         <Segments trigger={popup} changeColor={changeColor} newColors={newColors}  cancel={cancel}></Segments>
      </div>

    </div>
  );
}

export default App;
