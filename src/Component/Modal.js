import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { colors } from '@material-ui/core';

function getModalStyle() {


  return {
    top: '30%',
    left: `20%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 200,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:80,
    color:'gray'
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Contact via</h2>
      
      {props.type==="Phone"?<p id="simple-modal-description">Contact #   : {props.value}</p>:props.type==="mail"?
      <p id="simple-modal-description" >E-mail   : {props.value}</p>:
      props.type==="address"?<p id="simple-modal-description">Home      : {props.value}</p>:
      props.type==="linkedin"?<p id="simple-modal-description">Linked In      : <a style={{textDecoration:'none',fontFamily:'Roboto',color:'gray'}} href='https://www.linkedin.com/in/mehak-fatima-719708175/'>{props.value}</a></p>:null}
    
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <div style={{display:'flex',flexDirection:'row',marginTop:10,fontFamily:'Roboto'}} onClick={handleOpen}>
  {props.type==="Phone"?<CallIcon/>:props.type==="mail"?<EmailIcon/>:props.type==="address"?<HomeIcon/>:props.type==="linkedin"?
  <LinkedInIcon/>:null}
  <div style={{marginLeft:10,marginTop:5}}>{props.value}</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
