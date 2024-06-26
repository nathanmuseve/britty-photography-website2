import datamain from "./data"
import "./Gallery.css"
export default function Gallery({heading, title, data}){
    console.log(data);
    
    
    return(
    <div className="gallery-overall">
    <h1>Gallery</h1>
    <div className="gallery-main">
      
      <h3>{title}</h3>
    {
    datamain.data.map((result)=>{
        return(
            <div className="gallery-overall">
                <div className="image"> <img src={result.image} alt=""/> </div>
           <div className="content">
           <div className="text"> {result.desc}</div>
              
           </div>
               
            </div>
       
        )
   
    })
    
  
     
    }
    </div>
    </div>
    
 
       
    )
}