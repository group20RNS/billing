import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
export default class HomeScreen extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor: "indigo"}}>
        <h4 id="wish" style={{color: "gold",textAlign: 'center'}}><b>  WEL-COME TO </b>  </h4>
        <h4 id="nameoforg"  style={{color: "gold",textAlign: 'center'}} > <b> BEE CREATIVE STUDIOS </b></h4>
        <p style={{color: "white"}} >  <br></br> Kannada Short films, Kannada Feature Films, Visual Effects Studios, Kannada Film Production House. </p>
        </div>
        <h3 id="aboutheading" style={{color: "darkmagenta"}}>Introduction</h3>
       <p>We are very exciting to share some of our works in following video ,please do watch</p> 
       
       <ReactPlayer url= "https://www.youtube.com/watch?v=9Eydvotl_nc" controls={true} width="100%" height = "280px"/>

       <br></br>
       <h3 id="aboutheding" style={{color: "darkmagenta"}}>Contact Us</h3>

       <p  style={{color: "black"}}><b>Contact Us For Film Editing, Visual Effects, Poster Designs, Motion Graphics and Film Making Solutions With Collabarations</b>.</p>
<p style={{backgroundColor: "gold",color:"green"}}><br></br><b>Contact Info : beecreativestudios2020@gmail.com</b></p>
       <a href="https://www.instagram.com/bee_creativestudios/?fbclid=IwAR15Hjbbh3dRjzrO5tkib9TNIcXkrLp6Hm-sL-_2diNLIqeCe5XQkl38vhQ" ><img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1607019738/downloads_tmkaqd.jpg" height="40px" width="40px"></img></a>
     
       <a href="https://www.facebook.com/beecreativevfx"><img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1607019738/download_xf3q0k.png" height="40px" width="40px"></img></a>
      
       <br></br>
<h3 id="abutheading" style={{color: "darkmagenta"}}> Address:</h3>
<br></br><p style={{color: "black"}}> #337, SAURABHA COMPLEX, 10th Main Rd, Nagendra Block, Banashankari Stage I, Bengaluru, Karnataka 560050</p>
      <p style={{color: "black"}}>group 20 final project</p>
      

      </div>
    );
  }
}
