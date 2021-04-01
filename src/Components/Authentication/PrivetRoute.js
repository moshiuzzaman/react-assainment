import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const PrivetRoute = ({ children, ...rest }) => {
    let user = {
        role: ''
      }
      const token = sessionStorage.getItem("token")
      let decoded
      token===null ? decoded= {}:decoded = jwt_decode(token);
      const finalUser = { ...user, ...decoded}

    
    return (
        <Route
            {...rest}
            render={({ location }) =>
            finalUser.role ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;