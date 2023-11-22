import './Asset/Css/Style.css'
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export const Login=()=>{
    
    const func=()=>{}
    
      const [state, setState] = useState('idle');
      const[pass,setpass]=useState(true);
    const onClickHandler = () => {
      setState('loading');
    }
    const visib=()=>{
      setpass(!pass);
      
  }
  

  return (
    <>
    <div className='snow'></div>
      <div className='div'>
      <h2  className = 'myclass'></h2>
      <h2 className='myclass1'>LOG IN</h2>
      <div className='acc'><AccountCircle/></div> <TextField id="outlined-basic"  label="User name" required />
       
      <div className='pass'><HttpsIcon/></div><TextField type={pass?"password":"text"} variant="outlined" label="Password" required sx={{zIndex:0}}/ ><br/>   
       <a href="" className='for' >Forgot Password?</a>

       <ReactiveButton
       buttonState={state}
       idleText="Submit"
       loadingText="Loading"
       successText="Logged in"
      onClick={() => {
        setState('loading');
        setTimeout(() => {
          setState('success');
        }, 2000);
      }}
/>
     <p className='pra'>Or</p>
     <Stack direction="row" spacing={2} height={1}>
      <Avatar className='sig'  src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" />
      <Avatar className='sig' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpSRDiK04g36atGsUnqmz96LTztYREEHRctfK3eIAnCI618FKzmM3F6sW5KjlL4obe88&usqp=CAU" />
      <Avatar className='sig' src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" />
    </Stack>
    <p className='accoun'>Don't have an account? </p>
     </div>
    
    </>
  )
}