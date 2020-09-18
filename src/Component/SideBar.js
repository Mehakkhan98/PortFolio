import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent , Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Modal from './Modal';

export default class SideBar extends React.Component{
    constructor(props) {
        super(props)
        // first method
        this.state = {
            phone:false,
            mail:false,
            linkedin:false,
            home:false 
        }
    }
 
    
    render()
    {
        return(
            
<ProSidebar style={{marginTop:5,

 
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>

  <SidebarHeader >
  <h3 style={{marginLeft:20}}>Mehak Fatima</h3>
  </SidebarHeader>
  <SidebarContent
//   style={{ background: '#4568DC',  /* fallback for old browsers */
//   background: '-webkit-linear-gradient(to right, #B06AB3, #4568DC)',  /* Chrome 10-25, Safari 5.1-6 */
//   background: 'linear-gradient(to right, #B06AB3, #4568DC)',}}
   
  >
  <Menu iconShape="square" 
  >
    <MenuItem   >
    
   <Modal type="Phone" value="000-888-999"/> 
  
   </MenuItem>
   
    <MenuItem  > 
   
        <Modal type="mail" value="mehakiftikhar1998@gmail.com"/> 
        </MenuItem>
        <MenuItem  >
   
        <Modal type="linkedin" value="linkedin.com/in/mehak-fatima-719708175"/> 
        
    </MenuItem>
    <MenuItem  >
   
    <Modal type="address" value="XXX-yyyy-zzzz"/> 
   
    </MenuItem>
   
  
  </Menu>
  </SidebarContent>
  <div style={{marginTop:325}}>

  </div>
  <SidebarFooter style={{background:'#27293d',display:'flex',flexDirection:'row'}}>
 
  </SidebarFooter>
 
</ProSidebar>
        )
    }
}
