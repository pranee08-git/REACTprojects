import React from 'react'
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import Web from './web'
import Blood from './Blood';
import Teaching from './Teaching';
// import App from './App';
export default function Ap() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Web/>} />
            <Route path="/bld" element={<Blood/>}/>
            <Route path="/tch" element={<Teaching/>}/>
            <Route path="/bldsub" element={<Web/>}/>
            <Route path="/tchsub" element={<Web/>}/>
            {/* <Route path="/log" element={<App/>}/>
            <Route path="/logsub" element={<Web/>}/> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}
