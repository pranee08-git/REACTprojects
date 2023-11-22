import React, { useState } from 'react'
import Sign from './Sign'
import { Login } from './Login.js'
// import {Sign} from './Sign.js'

export default function App() {
  
  const [value,setvalue] = useState(true);
  function change()
  {
    setvalue(!value)
  }
  return (
    <div>
      <>
      {value ? <Login/>:<Sign/>}
      <div>
        {value?<button onClick={change} className='ku'>Sign Up</button>:<button onClick={change} className='ku'>Login</button>}
      </div>
      {/* <Sign/> */}
      </>

    </div>
  )
}