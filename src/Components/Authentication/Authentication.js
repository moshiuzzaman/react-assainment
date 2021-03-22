import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineLogin } from "react-icons/ai";
import LoginForm from './LoginForm';
import "./Authentication.css"
import SingUpForm from './SingUpForm';

const Authentication = (props) => {
  const [isLogin, setIsLogIn]=useState(true)
 
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Button onClick={()=>setIsLogIn(true)} variant="light"> <AiOutlineLogin /> Sing In</Button>{' '}
        <Button onClick={()=>setIsLogIn(false)} variant="light">Sing Up</Button>
      </Modal.Header>
      <Modal.Body className="model-body">
        {
          isLogin ? <LoginForm/> : <SingUpForm/>
        }
        
      </Modal.Body>

    </Modal>
  );
};

export default Authentication;