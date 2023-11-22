import './Asset/Css/Blod.css'
import * as React from 'react';
// import image1 from './bloodImage.jpg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';




function Blood() {
  return (
    <>
  <div id = "ENTIRE-PAGE" >

      <div id = "FLEX-CHILD1">
        <img  class = "image1" src ="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/w/j/q/small-spos8989-poster-blood-donation-sl-9497-wall-poster-13x19-original-imaghs5sdquy6764.jpeg?q=20" alt = "Let's Donate!"/>
      </div>
      

 <div id = "FLEX-CHILD2">
                <h1 style={{textAlign:"center"}}>LET'S DONATE🩸 </h1><br/>
          <div id="name">

          <h3>Fullname</h3>
          <div class = "subDiv1">
          <TextField id="outlined-basic" label="Firstname" variant="outlined" /></div>
          <div class = "subDiv2">
          <TextField id="outlined-basic" label="Lastname" variant="outlined" /></div>

          </div>



          <div id = "radio-container" style={{marginLeft:"5vw"}}>

              <h3>Gender</h3>
              <RadioGroup
                name="radio-buttons-group">

                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />

              </RadioGroup>
          </div>  



  <h3 style={{marginLeft:"5vw"}}>What is your blood type?</h3>      
<div class = "bloodType">

<div id = "childBlood1">
  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  A+
  </label><br/>

  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  B+
  </label><br/>

  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  O+
  </label><br/>

  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  B-
  </label><br/>
  
</div>
  
<div id = "childBlood2">
  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  AB+
  </label><br/>

  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  AB-
  </label><br/>

  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp; A-
  </label><br/>

  <label>
    <input
      type="radio"
      name="opt1"
    />
    &nbsp;  O-
  </label><br/>
  
</div>
</div>

<div id = "dateOfBirth">
<h3 style={{marginLeft:"5vw"}}>Date Of Birth</h3>
<input type = "date" style = {{marginLeft:"5vw" , height:"3vw", width:"10vw",}}/>
</div>

<div class = "phoneEmail" style={{marginLeft:"5vw"}}>
<div style={{display:"inline"}}><h3>Phone Number </h3>
<input type="number" id="phone"/></div>
  <div> <h3>Email</h3>
    <TextField id="standard-basic" label="Email Address" variant="standard" />
    </div> 
</div>

  <div style={{marginLeft:"5vw"}}>
  <h4>Do you suffer from or have suffered from any of the following diseases?</h4>
  
  <FormControlLabel control={<Checkbox defaultChecked />} label="Lung Disease" /><br/>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Allergic Disease" /><br/>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Diabetic" /><br/>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Abnormal bleeding tendencies" /><br/>
  <FormControlLabel control={<Checkbox defaultChecked />} label="No I Am Fine" /><br/><br/>
 
    </div>
     
        <a href="bldsub"><div className = "Button"> <Button variant="contained">SUBMIT</Button></div> </a>
  
</div>
  </div>   
  
  </>
  );
}



export default Blood;