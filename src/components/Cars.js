import React from 'react';





const Cars = (props) => {
   return (  
        <div style={{  backgroundColor : 'darkblue',opacity:0.9,textDecorationColor:"white",
         border:'2px solid white', float: '5px' , width : '400px', padding:'10px',
          margin: '20px auto',marginTop: 0  , borderRadius:12} }>
            

        <p > Marque:{props.children} </p> 
        <p > Couleur: {props.color}  </p>
         
        </div>
          );
}

export default Cars;





