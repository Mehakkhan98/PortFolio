import React, { Component } from "react";
import Video from "./Vedioes/Covid 19.mp4";
import Video1 from "./Vedioes/FYP3.mp4";
import Admin from "./Vedioes/Admin.mp4";

export default class Content extends Component {
      render() {
        return (
         <div>
          <div style={{display:'flex',flexDirection:'row'}}>
               <div>
               <video src={Video} height={250} width={490} autoPlay="true" />
               </div> 
              
              <div style={{marginLeft:25}}>
              <video src={Video1} height={250} width={490} autoPlay="true" />
              </div>
             
              </div>
              <div style={{marginTop:20}}>
              <video src={Admin} height={250} width={490} autoPlay="true" />
              </div>
          </div>
         
        );
      }
    }

