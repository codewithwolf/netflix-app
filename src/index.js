import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';
import Sdata from './Sdata';

function mycard(val){
  return(
    <App
    sname={val.sname}
     imgsrc={val.imgsrc}
    title={val.title}
    link={val.links}
 
 
  />
  );

}

ReactDOM.render(
 <>
 <h1 className="heading_style">A <span>Netfilx</span> OrIginal <span>SeriEs</span></h1>
     
    
      {Sdata.map(mycard)};
   
 </>, 
  

   document.getElementById("root")

);