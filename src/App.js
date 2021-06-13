
import './App.css';
import Header from './Componentes/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes';
import { useEffect, useState } from 'react';
import firebase from 'firebase'
import { UsarContexto } from './Contexto/UsarContexto';
import { actionType } from './Contexto/DefinicionDeFunciones';
import { auth, dataBase } from './firebase';


function App() {

 const [{user}, dispatch] = UsarContexto() 
  /* const [user, setUser] = useState('') */

  useEffect( () => {
    auth.onAuthStateChanged(result => {
      if(result){
       dataBase.ref(`/useri5/${result.uid}`)
        .once('value')
        .then(snapshot => {
          dispatch({
            type:actionType.USUARIO_LOGIN,
            user:snapshot.val()
          })})
          
          .catch(error => {
            
          })
      }} )

  },[] )
  return (
    <>
      <Router>
        <Header/>
        <Routes/>
      </Router>

    </>
  );
}

export default App;
