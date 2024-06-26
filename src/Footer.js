import "./Footer.css"
import { FaAccusoft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return(
    <div className="overall-footer">
            <hr></hr>
            <br></br>
            <br></br>
        <div className="segment-1">
            <div className="form">
                <h5 style={{padding: '1rem',}}>SIGN UP FOR THE NEWSLETTER</h5>
                <form>
                    <input type="text" placeholder="Email address" id="email22"></input>
                </form>
            </div>
            <div className="text">
              <FaAccusoft />
              <h5>2024 PHOTOGRAPHY COLLECTION</h5>
            </div>
        </div>
        <div className="segment-2">
        <div className="text1">
            <h5 style={{padding: '1rem',}}>FOLLOW US</h5>
            <div id="icons">
            <FaEnvelope style={{padding: '1rem',}} />
            <FaCamera  style={{padding: '1rem',}}/>
            <FaLinkedin  style={{padding: '1rem',}}/>
            </div>
           
        </div>
        <br></br>
        <div className="text2">
            <h5 style={{fontSize:'bold'}}>CONTACT US</h5>
            <h5>INFO@PHOTOGRAPHYCOLLECTION.COM</h5>
        </div>

        </div> 
        <div className="segment-3" style={{padding: '1rem',}}>
            <h5>HOME</h5>
            <br></br>
            <h5>ABOUT</h5>
            <br></br>
            <h5>GALLERY</h5>
            <br></br>
            <h5>SERVICES</h5>
            <br></br>
            <h5>CONTACT</h5>
        </div>  

    </div>
    )
}