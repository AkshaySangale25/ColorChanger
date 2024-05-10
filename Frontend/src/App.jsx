import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  
  return (
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='flex m-2 p-2' style={{backgroundColor: 'color'}}>
          <div className='flex gap-2 justify-items-center rounded-3xl w-full' style={{backgroundColor:'White'}}>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "Red"}} onClick={()=>setColor('red')}>RED</button>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "green"}} onClick={()=>setColor('green')}>Green</button>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "blue"}} onClick={()=>setColor('blue')}>Blue</button>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "orange"}} onClick={()=>setColor('orange')}>orange</button>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "pink"}} onClick={()=>setColor('pink')}>pink</button>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "yellow"}} onClick={()=>setColor('yellow')}>yellow</button>
            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "olive"}} onClick={()=>setColor('olive')}>olive</button>

            <button className='p-3 m-3 rounded-3xl' style={{backgroundColor: "purple"}} onClick={()=>setColor('purple')}>purple</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
