import { useState } from 'react'


function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}>
      <div  className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'blue'}}>blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'green'}}>green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'yellow'}}>yellow</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'purple'}}>purple</button>   
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'pink'}}>pink</button>   
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'orange'}}>orange</button>   
          <button onClick={() => setColor("indigo")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'indigo'}}>indigo</button>   
          <button onClick={() => setColor("brown")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'brown'}}>brown</button>   
          <button onClick={() => setColor("black")} className='outline-none px-4 py-3 rounded-full' style={{backgroundColor:'black'}}>black</button>   
        </div>
      </div>
     </div>
    </>
  )
}

export default App
