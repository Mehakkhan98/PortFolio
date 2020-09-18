import React from 'react';
import logo from '../logo.svg';
import Header from '../Component/Header';
import SideBar from '../Component/SideBar';
import Player_Screen from '../Component/Player_Screen';

function App() {
  return (
   <div>
     {/* <Header/> */}
    
     <div style={{  display: 'flex',
    flexDirecton: 'row'}}>
     <SideBar/>
     <Player_Screen/>
     </div>
   
    
   
   </div>
  );
}

export default App;
