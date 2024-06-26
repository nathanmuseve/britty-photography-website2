import "./About.css"
import prof from "./prof.webp"


export default function About () {
    return(
        <div className="About-overall">
           <div className="About-text">
               <h3>About me</h3>
               <p>Consider what you want to achieve with your website. Are you focusing on showcasing your portfolio, selling your work, or both? Your goals will guide your design and content decisions.
                  Choose the Right Platform, select a user-friendly website builder or platform. Popular options include Wix, Web.com, Squarespace, and Hubspot. These platforms offer customizable templates and features to suit your needs.</p>
                  <br></br>
                   <button>Learn More</button>
           </div>
           <div className="About-pic">
           <img src={prof} alt="pic image"/>
           </div>
        </div>
    )
}