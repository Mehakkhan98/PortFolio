import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Mehak from '../Component/images/dummy1.jpg';
export default class Cards extends React.Component{
 render()
 {

   
     return(
      
        <Flippy
        flipOnHover={false} 
        flipOnClick={true} 
        flipDirection="horizontal"
        ref={(r) => this.flippy = r} 
        style={{ width: '400px', height: '240px' ,marginTop:10,marginBottom:10,marginLeft:6,marginRight:6}} 
      >
        <FrontSide
          style={{
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
             /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            
            textAlign:'center',
             borderRadius:10,
             paddingTop:80,
             fontFamily:"Roboto",
             color:'#f06292',
            
            
             


          }}
        >  {this.props.type==="home"? <div>
       <img style={{marginTop:5,borderRadius:"50%"}}  src={Mehak} alt="Mehak" /> 
         <h2> {this.props.data}</h2>
         <h2>Software Engineer</h2>
         
       </div>:
      null
       

 }
        
        </FrontSide>
     
        <BackSide
          style={{ backgroundColor: 'transparent' ,  
          color:'gray',
          FrontSide:16,
          fontFamily:"Roboto",
          paddingTop:10 ,textAlign:'center',
          borderRadius:10}}>
       <h1>About Me</h1>
        {
          
       this.props.type==="home"?<div>Hello World, I  have done BS in Software Engineering from International 
      Islamic University, Islamabad. I enjoy coding as well as designing, being consistent to my passion
       I've developed few web applications which you can find in the project section. I always push myself 
       for exploring new and interesting things.
       i am highly enthusiastic about coding in react js /react native, let's get started.</div>
      :null
        } 
        
        
        </BackSide>
      </Flippy>
     )
 }
}