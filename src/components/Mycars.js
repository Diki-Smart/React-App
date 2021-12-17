import React,{ Component} from 'react';
import Car from './Cars'
import ml from './img/ml.jpg'
import fond from'./img/fond.jpg'
// import Tab from './Tab.js'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import NavBar from './NavBar.js'
import TextField from '@material-ui/core/TextField';


import Brightness4Icon from '@material-ui/icons/Brightness4';
import TwitterIcon from '@material-ui/icons/Twitter';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { Opacity } from '@material-ui/icons';

class Mycars extends Component{
    render()
    {
        return(

            <Container className="container" style={ {/* justifyContent:"center"*/ paddingTop: 200 }} >  



                <section className="profil" > 
               <h2> " Tout le monde est un génie. <br/>
                 Mais si vous jugez un poisson sur ses capacités  à grimper à un arbre, <br/>
                 il passera sa vie à croire qu’il est stupide."  <br/> <br/>
                
                 ALBERT EINSTEIN</h2>
                 </section>

                                
                 <h1 > <br/> Hello Diki <Brightness4Icon/> </h1>
  
                <Car color ='green'> Ford </Car>
                <Car color =' red' > Mercedes </Car>
                <Car color ='black'> Armada </Car>
                <TextField 
                
                variant ="filled" 
                color="primary"
                type="email" 
                label="exemple"
                placeholder="Andrew.dev@mail.com"
                style={{width: 200 , marginRight: 20}}/>

                <Button style={{borderRadius:18,fontSize:9.9, width: 180}} className ="btn btn1" variant = "contained" color ="secondary" ><TwitterIcon></TwitterIcon>   Twitter M-ui</Button>
                <button className ="btn btn2"> Twitter B</button>
                
                <button className ="btn btn3" data-aos="fade-left"> Hover Me</button>
                <button type="button" className="btn btn-primary"> Hover Me</button>
                <button className ="btn btn5"> Diki </button>  

                <div className = "contento" data-aos="fade-right">
                    <button type="button" className="btn btn-dark" > DISCORD </button>
                </div>

                
                <div className = "contento2" data-aos="fade-left">
                    <button type="button" className="btn btn-dark" > DISCORD </button>
                </div>

                <div className = "contento" data-aos="fade-right">
                    <button type="button" className="btn btn-dark" > DISCORD </button>
                </div>
    
                

                <footer className = "foot"  data-aos="fade-left">  <p className= "prgf">  Salut 
                Vérifiez également qu'il n'y a pas eu d'activité <br/>
                suspecte sur l'un de vos comptes de réseaux sociaux associés (comme Facebook ou Twitter<br/><br/><br/><br/> </p>

                ©2021  |  All right reserved.
                </footer>
                
            </Container>

        
 

        );

    }
}


export default Mycars ; 
