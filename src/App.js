import React from "react";


function App(props){
    return(  
    <div>
     <div className="cards">
     <div className="card">
        <img src={props.imgsrc} alt="my_pic" className="card_img" />
        <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_tittle">{props.sname}</h3>
            <a href={props.link} target="">
                <button>watch now</button>
            </a>
        </div>
     </div>
 </div>
    
    
    
     </div>
      );
}


 export default App;