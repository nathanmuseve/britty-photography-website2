import { useState } from "react"
import "./Contact.css"


export default function Contact() {
    const [textarea, setTextarea] = useState('');
    const  ClearOutPuts = (event) => {
        Array.from(event.target).forEach((e) => e.value = "");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        ClearOutPuts(event);
        setTextarea('');
        console.log(textarea)
    }
    return(
        <div className="Britty">
            <br></br>
        <h4 style={{fontSize: '2rem', }}>Contact us:</h4>
        <p>I am here to answer any questions you may have concerning my photography experience. Reach out and I will respond as soon as possible.</p>
        <br></br>
         <div id="overall-contact">
          
        <div className="contact1.">
          <form onSubmit={handleSubmit}>
              <div className="first-contact">
                <label htmlFor = "name"><h5>NAME:</h5></label>
                <input type="text" id="name"></input>
              
                <label htmlFor="email address"><h5>EMAIL:</h5></label>
                <input type="text" id="email"></input>
              </div>
              <br></br>
              <h5>MESSAGE:</h5>
              <textarea value={textarea} onChange={(e)=>setTextarea(e.target.value)}></textarea>
              <br></br>
              <button type="submit">Submit</button>
              <br></br>
          </form>
          </div>
          <div className="contact2">
              <h5>EMAIL</h5>
              <p>brittyonsongo@gmail.com</p>
              <br></br>
              <h5>TELEPHONE</h5>
              <p>+254732466280</p>
              <br></br>
              <h5>SKYPE</h5>
              <p>brittyonsongo1</p>
              <br></br>
              <h5>ADDRESS</h5>
              <p>Combati LTD</p>
              <p>Moi Avenue</p>
              <p>Nairobi</p>
              <p>Company No. 0876543</p>
          </div>
          
       
          
          <br></br>

          
      </div>
        </div>
       
    )
}