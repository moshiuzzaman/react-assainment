import React, { useState } from 'react';
import LoginForm from './LoginForm';
import "./Authentication.css"
import SingUpForm from './SingUpForm';
import { Container } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';

const Authentication = (props) => {
  const [isLogin, setIsLogIn]=useState(true)
 
  return (
    <>
    <NavBar/>
    <Container>
       {
          isLogin ? <LoginForm setIsLogIn={setIsLogIn}/> : <SingUpForm setIsLogIn={setIsLogIn}/>
        }
     </Container>
    </>
  );
};

export default Authentication;