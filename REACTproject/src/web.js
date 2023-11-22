import React,{useState} from 'react';
import './Asset/Css/Webc.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { RxDiscordLogo } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { SiTata } from "react-icons/si";
import { useScrollTrigger } from '@mui/material';
const Web = () => {
      return (
        <div className='bod'>

            <div className="top">
                <div style={{ paddingRight: '10px', float: 'right' }}>
                    <button id="login" type="button" style={{ marginTop: '7px', height: '55px', width: '100px', borderRadius: '40px', border: '1px solid white', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Log in</button>
                </div>
                <h3 className="my" id="fontsize">Help</h3>
                <h3 className="my" id="fontsize">Contact Us</h3>
                <h3 className='my' id="fontsize">Home</h3>
                <h2 className='nam'>Helping Hands</h2>
                <img className='log' src="https://media.istockphoto.com/id/1265111441/vector/circle-swoosh-with-hand-care-inside.jpg?s=612x612&w=0&k=20&c=qmcwdMKI1ZLF3djInsklBLkZPYPIr-X6se75BWfum7w="></img>

            </div>
            <div className="intro">
                <h1 className='intro1'>Welcome</h1>
                <p className='intro2'>We give rise by lifting others</p>
                <a href="#down" className='intro3'><span>Get Started</span></a>
            </div>
            <div id="down" className="About">
                <div className="About1">
                    <div className="About2">
                        <div className="About3"></div>
                    </div>
                    <div className='About4'>
                        <div className="About5">
                            <h1 style={{ fontSize: '50px' }}>About Helping Hands</h1>
                            <h6 style={{ fontSize: '20px', marginTop: '-10px' }}>Welcome to Helping Hands, the online platform that connects volunteers with meaningful opportunities.</h6>
                            <h6 style={{ fontSize: '20px', marginTop: '-10px' }}>Join our community of dedicated volunteers and start making a positive impact today!</h6>
                            <h6 style={{ fontSize: '20px', marginTop: '-10px' }}>"Volunteers do not necessarily have the time,<br />they just have the heart."</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ourj">
                <div className="Ourj1">
                    <div className="Ourj3">
                        <h1 style={{ fontSize: '70px' }}>Our Journey</h1>
                    </div>
                    <div className="Ourj2">
                        <div>
                            <h2>Foundation</h2>
                            <h5>2003</h5>
                        </div>
                        <div>
                            <h2>Expansion</h2>
                            <h5>2012</h5>
                        </div>
                        <div>
                            <p style={{ fontSize: '25px' }}>Helping Hands was founded with the mission to make volunteering accessible to everyone.</p>
                        </div>
                    </div>
                    <div id="slideshow">
                        <div class="slide-wrapper">
                            <div class="slide">
                                <h1 class="slide-number">
                                    {/* <img src='https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg'></img> */}
                                </h1>
                            </div>
                            <div class="slide">
                                <h1 class="slide-number">
                                    {/* <img src='https://youthsquad.makingfriends.com/wp-content/uploads/2019/02/extended-family-volunteering.jpg'></img> */}
                                </h1>
                            </div>
                            <div class="slide">
                                <h1 class="slide-number">
                                    {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vilnius_Marathon_2015_volunteers_by_Augustas_Didzgalvis.jpg/1200px-Vilnius_Marathon_2015_volunteers_by_Augustas_Didzgalvis.jpg'></img> */}
                                </h1>
                            </div>
                            <div class="slide">
                                <h1 class="slide-number">
                                    {/* <img src='https://media.istockphoto.com/id/1254057341/photo/volunteer-teaching-in-africa-school-near-masai-mara-game-reserve-in-kenya.jpg?s=612x612&w=0&k=20&c=ZEj2py-HV0UOm9CA4LmyGtronexuJnSeJgQtnSQs4iA='></img> */}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="mid">
                <div>
                    <h1 style={{ textAlign: 'center', fontSize: '50px', marginTop: '50px' }}>Volunteering Events</h1>
                </div>
                <div className="m1">
                    <div className="mid1" id="mi1">
                    <a href="/bld" style={{textDecoration:'none'}}>Blood</a>
                        </div>
                    <div className='mid1' id="mi2">
                            <a href="/tch" style={{textDecoration:'none'}}>Teaching</a>    
                    </div>
                    <div className='mid1' id="mi3"></div>
                </div>
            </div>
            <div className='FollowUs'>
                <h1 style={{ fontSize: '80px' }}>Follow Us</h1>
                <div className="FollowUsi">
                    <div className="FollowUsj"><FaFacebookF /></div>
                    <div className="FollowUsj"><FaInstagram /></div>
                    <div className="FollowUsj"><FaTwitter /></div>
                    <div className="FollowUsj"><TiSocialLinkedin /></div>
                    <div className="FollowUsj"><RxDiscordLogo /></div>

                </div>
                <h1 style={{ fontSize: '80px' }}>Our Partners</h1>
                <div className='FollowUsi'>
                    <div className='lastus'><FcGoogle /></div><h1 style={{ marginLeft: '-20px', paddingRight: '100px', fontFamily: 'lucida console' }}>GOOGLE</h1>
                    <div className='lastus'><BsApple /> </div><h1 style={{ marginLeft: '-20px', paddingRight: '100px', fontFamily: 'lucida console' }}>APPLE</h1>
                    <div className='lastus'><FaUnity /></div><h1 style={{ marginLeft: '-20px', paddingRight: '100px', fontFamily: 'lucida console' }}>UNITY</h1>
                    <div className='lastus'><SiTesla /></div><h1 style={{ marginLeft: '-20px', paddingRight: '100px', fontFamily: 'lucida console' }}>TESLA</h1>
                    <div className='lastus'> <SiTata /></div><h1 style={{ marginLeft: '-20px', paddingRight: '100px', fontFamily: 'lucida console' }}>TATA</h1>
                </div></div>

            <div className='f'>
                <h3 className='f2'>Copyright All Rights Reserved @ 2003-2023</h3>
                <h3 className='f1' style={{ paddingRight: '20px' }}>Privacy Policy</h3>
                <h3 style={{ float: 'right', paddingRight: '30px', paddingLeft: '30px', color: 'whitesmoke' }}>|</h3>
                <h3 className='f1'>Terms and Conditions</h3>

            </div>
        </div>
    )
}
export default Web;