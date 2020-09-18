import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cards from './Card';
import Skill from './Skill';
import Home from '../Component/Home';
import About from './About';
import image1 from './images/node.png';
import image2 from './images/react.png';
import image3 from './images/js.png';
import image4 from './images/mongo.png';
import image5 from './images/c++.png';
import image6 from './images/java.png';
import image7 from './images/css.png';
import image8 from './images/php.png';
import image9 from './images/sass.png';
import image10 from './images/visual.png';
import Vedio from './Vedio';
function App() {
  const [Home, setHome] = useState(true);
  const [about, setabout] = useState(false);
  const [skill, setskill] = useState(false);
  const [Project, setProject] = useState(false);
  
 
  function onHome ()
    { if(Home===false)
      {
      setHome(true)
      setProject(false)
      setabout(false);
      setskill(false)
    }
    
    }
    function onabout()
    {
      if(about===false)
      {
        setHome(false)
        setProject(false)
        setabout(true);
        setskill(false)
    }
  }
  function onSkill()
  {
    if(skill===false)
    {
      setHome(false)
      setProject(false)
      setabout(false);
      setskill(true)
  }
}
function onProject()
{
  if(Project===false)
  {
    setHome(false)
    setProject(true)
    setabout(false);
    setskill(false)
}
}
  return (
   <div 


   style={{height:'100%',width:'80%',left:271,position:'absolute',background:'#1e1e2e',borderColor:'black',borderWidth:2}}>
   <div style={{position:'absolute',flexDirection:'row',display:'flex',right:0,marginTop:20}}>
   <IconButton color="white" size={48} onClick={onHome}>
   <div style={{marginLeft:10,marginRight:25,fontSize:18,color:'gray'}}>About</div>
   </IconButton>
   <IconButton color="white" size={48} onClick={onabout}>
    <div style={{marginLeft:10,marginRight:25,fontSize:18,color:'gray'}}>Info</div>
    </IconButton>
    <IconButton color="white" size={48} onClick={onSkill}>
    <div style={{marginLeft:10,marginRight:25,fontSize:18,color:'gray'}}>Skill</div>
    </IconButton>
    <IconButton color="white" size={48} onClick={onProject}>
    <div style={{marginLeft:10,marginRight:25,fontSize:18,color:'gray'}}>Project</div>
    </IconButton>
   </div>
   
   {
     Home===true?
     <div style={{background: '#27293d',padding:40,marginTop:75,marginLeft:30,marginRight:20,borderRadius:50}}>
     <div style={{marginTop:10,marginLeft:80}}>
       <div style={{display:'flex',flexDirection:'row'}}>
    
         <div>
         <Cards data="Mehak Fatima" type="home"/>
           </div>
           <div>
           <img style={{marginLeft:80}} src={image5} height={70} width={70} alt="node"/>
     <img style={{marginLeft:80}} src={image6} height={70} width={70} alt="node"/>
     <img style={{marginLeft:80}} src={image7} height={70} width={70} alt="node"/>
           </div>
           <div>
           <img style={{marginLeft:20}} src={image2} height={70} width={70} alt="node"/>
     <img style={{marginLeft:20}} src={image8} height={80} width={80} alt="node"/>
     <img style={{marginLeft:20}} src={image9} height={80} width={80} alt="node"/>
     </div>
    <div>
    
     <img style={{marginLeft:20}} src={image1} height={80} width={80} alt="node"/>
     <img style={{marginLeft:20}} src={image3} height={70} width={70} alt="node"/>
     <img style={{marginLeft:20}} src={image4} height={80} width={80} alt="node"/>
    
     
     </div>
   
     </div>
     
     <div style={{marginLeft:500,color:'gray',fontFamily:'Roboto'}}>
       <h1>Courses</h1>
    </div>
   
    <div style={{marginLeft:500}}>
       <a href='https://www.udemy.com/course/master-advanced-javascript-react/' style={{textDecoration:'none',fontFamily:'Roboto',color:'gray'}}>React for Beginners: A Complete Guide to Getting Started</a>
    </div>
    <div style={{marginLeft:500}}>
       <a href='https://www.udemy.com/course/the-complete-react-native-and-redux-course/'  style={{textDecoration:'none',fontFamily:'Roboto',color:'gray'}}>The Complete React Native + Hooks Course [2020 Edition]</a>
    </div>
    <div style={{marginLeft:500}}>
       <a href='https://www.udemy.com/course/sasscourse/'  style={{textDecoration:'none',fontFamily:'Roboto',color:'gray'}}>The Complete Sass & SCSS Course: From Beginner to Advanced</a>
    </div>
    <div style={{marginLeft:500}}>
       <a href='https://www.udemy.com/course/sasscourse/'  style={{textDecoration:'none',fontFamily:'Roboto',color:'gray'}}>The Complete Sass & SCSS Course: From Beginner to Advanced</a>
    </div>
     </div>
    
     </div>
    :null
   } 
   {
     about===true?
     <div style={{background: '#27293d',padding:40,marginTop:75,marginLeft:30,marginRight:20,borderRadius:50}}>
     <About/>
     </div>:null
   }
   {
     skill===true? <div style={{background: '#27293d',padding:25,marginTop:75,marginLeft:30,marginRight:20,borderRadius:50}}>
     <Skill value={50}/>
     </div>:null
   }
    {
     Project===true?<div style={{background: '#27293d',padding:25,marginTop:75,marginLeft:30,marginRight:20,borderRadius:50}}>
     <Vedio/>
     </div>:null
   }
   
   
   </div>
  );
}

export default App;
