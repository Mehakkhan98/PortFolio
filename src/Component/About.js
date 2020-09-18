import React from 'react';

import Laptop from './images/laptop.png';
export default class Info extends React.Component{
 render()
 {
     return(
         <div>
             <div style={{display:'flex',flexDirection:'row'}}>
                 <div>
            <h1 style={{color:'gray',fontFamily:'Roboto',marginLeft:40}}>Interpersonal Skills</h1>
            <div style={{display:'flex',flexDirection:'row',marginBottom:10}}>
            <div style={{
               background: '#4568DC',  /* fallback for old browsers */
                 background: '-webkit-linear-gradient(to right, #B06AB3, #4568DC)',  /* Chrome 10-25, Safari 5.1-6 */
                  background: 'linear-gradient(to right, #B06AB3, #4568DC)',fontFamily:'Roboto',borderRadius:100,height:70,width:100,paddingLeft:15,paddingTop:30}}>Creative</div>

<div style={{background: '#ff4b1f',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #ff9068, #ff4b1f)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #ff9068, #ff4b1f)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
borderRadius:100,fontFamily:'Roboto',height:70,width:100,marginLeft:100,paddingLeft:15,paddingTop:30}}>Innovative</div>

            </div>
            <div style={{display:'flex',flexDirection:'row',marginBottom:10}}>
           
            <div style={{background: '#5A3F37',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #2C7744, #5A3F37)', 
background: 'linear-gradient(to right, #2C7744, #5A3F37)' 
,fontFamily:'Roboto',borderRadius:100,height:70,width:100,paddingLeft:15,paddingTop:30}}>Attention to detail</div>

            <div style={{background: '#000046', 
background: '-webkit-linear-gradient(to right, #1CB5E0, #000046)', 
background: 'linear-gradient(to right, #1CB5E0, #000046)' 
,fontFamily:'Roboto',borderRadius:100,height:70,width:100,marginLeft:100,paddingLeft:15,paddingTop:30}}>Teamwork
</div>
</div>
<div style={{display:'flex',flexDirection:'row',marginBottom:10}}>
            <div style={{background: '#C02425',  
background: '-webkit-linear-gradient(to right, #F0CB35, #C02425)',  
background: 'linear-gradient(to right, #F0CB35, #C02425)' 
,fontFamily:'Roboto',borderRadius:100,height:80,width:100,paddingLeft:15,paddingTop:30}}>Communi- cation Skill</div>
            <div style={{background: '#EF3B36', 
background: '-webkit-linear-gradient(to right, #FFFFFF, #EF3B36)', 
background: 'linear-gradient(to right, #FFFFFF, #EF3B36)'  
,fontFamily:'Roboto',borderRadius:100,height:80,width:100,marginLeft:100,paddingLeft:10,paddingTop:30}}>Organiza- tional Skill</div>
            </div>
            </div>
            <div style={{marginLeft:100}}>
            <h1 style={{color:'gray',fontFamily:'Roboto',marginLeft:40}}>What Can I do?</h1>
            <div style={{display:'flex',flexDirection:'row',marginLeft:10}}>
            <h1 style={{color:'gray'}}>✔</h1>
            <h3 style={{color:'gray',marginTop:30,marginLeft:10,fontFamily:'Roboto'}}>Help you with a Dynamic Website</h3>
            
           
            </div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:10}}>
            <h1 style={{color:'gray'}}>✔</h1>
            <h3 style={{color:'gray',marginTop:30,marginLeft:10,fontFamily:'Roboto'}}>Develop Native Mobile Application</h3>
            
           
            </div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:10}}>
            <h1 style={{color:'gray'}}>✔</h1>
            <h3 style={{color:'gray',marginTop:30,marginLeft:10,fontFamily:'Roboto'}}>Attractive & impressive UI/UX Design</h3>
            
           
            </div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:10}}>
            <h1 style={{color:'gray'}}>✔</h1>
            <h3 style={{color:'gray',marginTop:30,marginLeft:10,fontFamily:'Roboto'}}>Can Grow Your Bussiness Idea</h3>
            <img style={{marginLeft:60,marginTop:55}} src={Laptop} height={100} width={100} alt="node"/>
           
            </div>
          
            </div>
           
            </div>
         </div>
       
     )
 }

}