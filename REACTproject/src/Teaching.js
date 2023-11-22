import './Asset/Css/Teach.css';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';




function Teaching() {
    return (
        <>
        <div className = "entire-page">

            <div id="Flex-container">

                <div id="FLEX-CHILD1">
                    <div style={{ width: "1fr", height: "200px" }}> <img class="image4" src="" alt="Let's Educate!" /></div>
                    <div id="text" style={{ marginTop: "3vw" }}>
                        <div style={{ width: "1fr", height: "200px" }}>
                            <h1 className="educate" >Let's Educate!</h1>
                            <br />
                            <h2 className='educate'><i>"The best way to find yourself is to lose yourself in the service of others."</i></h2>
                            <h3 className='author'><bold>-Mahatma Gandhi</bold></h3></div>
                    </div>
                    <div style={{ width: "1fr", height: "200px" }}> <img class="image3" src="" alt="Let's Educate!" /></div>
            </div>

                <div className='finaloutput'>
                <br /> <br /> <br />
                
                <div id="FLEX-CHILD2" style={{ marginLeft: "3vw" }}>
                    <h3 style={{ marginLeft: "5vw" }}>Fullname</h3>
                    <div id="name" style={{ marginLeft: "5vw" }}>
                        <div class="subDiv1">
                            <TextField id="outlined-basic" label="Firstname" variant="outlined" /></div>
                        <div class="subDiv2">
                            <TextField id="outlined-basic" label="Lastname" variant="outlined" /></div>
                    </div>



                        <h3 style={{ marginLeft: "5vw" }}>Gender</h3>
                    <div id="sub-container" style={{ marginLeft: "5vw" }}>

                        <RadioGroup
                            name="radio-buttons-group">

                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />

                        </RadioGroup>
                    <div id="dateOfBirth">
                        <h3 style={{ marginLeft: "1vw" }}>Date Of Birth</h3>
                        <input type="date" style={{ marginLeft: "1vw", height: "3vw", width: "10vw", }} /></div>
                 </div>



                    <div class="phoneEmail">
                        <div  style={{ marginLeft: "5vw" }}><h3>Phone Number </h3>
                            <input type="number" id="phone" /></div>
                        <div  style={{ marginLeft: "-3vw" }}> <h3>Email</h3>
                            <TextField id="standard-basic" label="Email Address" variant="standard" />
                        </div>
                    </div>

                        <h3 style={{ marginLeft: "5vw" }}>Which days of the week do you want to work?</h3>
                    <div id = "workDays" style={{ marginLeft: "5vw" }}>
                        <div>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Sunday" /><br />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Monday" /><br />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Tuesday" /><br />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Wednesday"/><br />
                        </div>
                        <div>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Thursday" /><br />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Friday" /><br />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Saturday" /><br />
                        </div>

                    </div><br/>

                    <a href="tchsub"><div className="Button"> <Button variant="contained">SUBMIT</Button></div></a>
                </div>
                    </div>
                </div>
              </div>

        </>
    );
}



export default Teaching;