import React from 'react';
import AnimatedNumber from 'react-animated-number';

export default class Demo extends React.Component {
 

 
    render () {
        return(
            this.props.type==="lines"?
        <AnimatedNumber component="span"
        
           
         value={1000}
        initialValue={0}
            style={{
                transition: '0.9s ease-out',
                fontSize: 36,
                color:'#27293d',
                fontFamily:'Roboto',
                transitionProperty:
                    'background-color, color, opacity',
                  
            }}
            frameStyle={perc => (
                perc === 1 ? {} : {background: '#FF416C',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to right, #FF4B2B, #FF416C)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #FF4B2B, #FF416C)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    ,borderRadius:80,height:70,width:80,marginLeft:100,paddingLeft:15,paddingTop:30}
            )}
            duration={800}
            formatValue={n => n}
         />:
         <AnimatedNumber component="span"
        
           
         value={20}
        initialValue={0}
            style={{
                transition: '0.9s ease-out',
                fontSize: 36,
                color:'#27293d',
                fontFamily:'Roboto',
                transitionProperty:
                    'background-color, color, opacity',
                  
            }}
            frameStyle={perc => (
                perc === 1 ? {} : {background: '#FDC830',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to right, #F37335, #FDC830)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #F37335, #FDC830)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    ,borderRadius:80,height:70,width:80,marginLeft:100,paddingLeft:15,paddingTop:30}
            )}
            duration={800}
            formatValue={n => n}
         />
        
        )
    }
        
}