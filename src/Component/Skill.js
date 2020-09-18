import React from 'react';
import Counter from './Counter';
export default class Skill extends React.Component{
 render()
 {
     return(
         <div>
            
            
             <div style={{display:'flex',flexDirection:'row'}}>
                 <div style={{marginRight:100,marginTop:40}}>
                 <h3 style={{color:'gray'}}>HTML</h3>
         <div style={{height:30,width:250,color:'black',background: '#FF416C',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to right, #FF4B2B, #FF416C)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #FF4B2B, #FF416C)',borderRadius:10,paddingLeft:20}}>90%</div>
                 </div>
           <div style={{marginTop:40}}>
           <h3 style={{color:'gray'}}>CSS</h3>
         <div style={{height:30,width:250,color:'black',background: '#FDC830',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #F37335, #FDC830)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #F37335, #FDC830)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
,borderRadius:10,paddingLeft:20}}>85%</div>
           </div>
        
          
           
             </div>

             <div style={{display:'flex',flexDirection:'row'}}>
                 <div style={{marginRight:100}}>
                 <h3 style={{color:'gray'}}>Java Script</h3>
         <div style={{height:30,width:250,color:'black',background: '#a8c0ff',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #3f2b96, #a8c0ff)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #3f2b96, #a8c0ff)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
,borderRadius:10,paddingLeft:20}}>80%</div>
                 </div>
               
           <div>
           <h3 style={{color:'gray'}}>React</h3>
         <div style={{height:30,width:250,color:'black',background: '#f79d00',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #64f38c, #f79d00)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #64f38c, #f79d00)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
,borderRadius:10,paddingLeft:20}}>85%</div>
           </div>
           <h2 style={{color:'gray',marginLeft:70}}><i>
             Lines of Code</i></h2>
         
             </div>





             <div style={{display:'flex',flexDirection:'row'}}>
                 <div style={{marginRight:100}}>
                 <h3 style={{color:'gray'}}>React Native</h3>
         <div style={{height:30,width:250,color:'black',background: '#FDC830',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #F37335, #FDC830)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #F37335, #FDC830)',borderRadius:10,paddingLeft:20}}>85%</div>
                 </div>
                 
           <div>
           <h3 style={{color:'gray'}}>Node js</h3>
         <div style={{height:30,width:250,color:'black',background: '#AA076B',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #61045F, #AA076B)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #61045F, #AA076B)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
,borderRadius:10,paddingLeft:20}}>79%</div>
           </div>
            <Counter type="lines"/>
            <h1 style={{color:'gray',marginLeft:10}}><i>
             +</i></h1>
            
             </div>
            
             <div style={{display:'flex',flexDirection:'row'}}>
                 <div style={{marginRight:100}}>
                 <h3 style={{color:'gray'}}>Express</h3>
         <div style={{height:30,width:250,color:'black',background: '#f79d00',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #64f38c, #f79d00)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #64f38c, #f79d00)',borderRadius:10,paddingLeft:20}}>75%</div>
                 </div>
           <div>
           <h3 style={{color:'gray'}}>Mongo DB</h3>
         <div style={{height:30,width:250,color:'black',background: '#FF416C',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to right, #FF4B2B, #FF416C)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #FF4B2B, #FF416C)',borderRadius:10,paddingLeft:20}}>80%</div>
           </div>
           <h2 style={{color:'gray',marginLeft:70}}><i>
             Coding Projects</i></h2>
             </div>
             <div style={{display:'flex',flexDirection:'row'}}>
                 <div style={{marginRight:100}}>
                 <h3 style={{color:'gray'}}>C++</h3>
         <div style={{height:30,width:250,color:'black',background: '#AA076B',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #61045F, #AA076B)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #61045F, #AA076B)',borderRadius:10,paddingLeft:20}}>70%</div>
                 </div>
           <div>
           <h3 style={{color:'gray'}}>Java</h3>
         <div style={{height:30,width:250,color:'black',background: '#000046',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #1CB5E0, #000046)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #1CB5E0, #000046)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
,borderRadius:10,paddingLeft:20}}>70%</div>
           </div>
           <Counter type="projects"/>
            <h1 style={{color:'gray',marginLeft:10}}><i>
             +</i></h1>
        
             </div>
       
         </div>
       
     )
 }

}