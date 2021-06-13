import React from 'react'
import {Switch,Route,} from "react-router-dom";
import Chat from './Componentes/Chat';
import Home from './Componentes/Home';
import SignIn from './Componentes/SignIn';
import SignUp from './Componentes/SignUp';



const Routes = () => (

 <Switch>
     <Route path='/' exact component={Home} /> 
     <Route path='/signup' exact component={SignUp} /> 
     <Route path='/signin' exact component={SignIn} /> 
     <Route path='/chat' exact component={Chat} /> 
     </Switch>   
)


export default Routes
