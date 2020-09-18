import React from 'react';
import logo from '../logo.svg';
import Header from '../Component/Header';
import SideBar from '../Component/SideBar';

function App() {
  return (
    
   <div style={{background:'#2b4046',height:60,width:'100%',boxShadow: "1px 3px 1px #9E9E9E"}}>
   <div style={{position:'absolute',flexDirection:'row',display:'flex',right:0,marginTop:20}}>
   <div style={{marginLeft:10,marginRight:25,fontSize:18}}>Home</div>
    <div style={{marginLeft:10,marginRight:25,fontSize:18}}>About</div>
    <div style={{marginLeft:10,marginRight:25,fontSize:18}}>Skills</div>
    <div style={{marginLeft:10,marginRight:25,fontSize:18}}>Project</div>
   </div>
   
   </div>
  );
}

export default App;
