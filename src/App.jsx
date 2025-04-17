import './App.css'
import {ChromePicker} from 'react-color'
import React,{useState} from 'react'

const  App=()=> {
  const [color,setColor]=useState('#fff');
  const [showColorPicker,setShowColorPicker]=useState(false)

  const handleChange=(newColor)=>{
    setColor(newColor.hex)
  }

  return (
    <>
    <button onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}>{showColorPicker ? 'close color picker':'Pick a color'}</button>
    {
      showColorPicker && (<ChromePicker color={color} onChange={handleChange}/>)
    }
      
     <h1>You picked {color}</h1>
     </>
  )
}

export default App
