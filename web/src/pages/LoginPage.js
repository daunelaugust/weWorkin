import React from "react";
import LoginButton from "../components/LoginButton.js";
import LogoutButton from "../components/LogoutButton.js";
import {useAuth0} from '@auth0/auth0-react';
export default function LoginPage(){
    const {isAuthenticated} = useAuth0();
    // changes depending if user is logged in or not
    const heading = isAuthenticated ? 'Auth0 Logout' : 'Auth0 Login';
    return(
        <>
        <h1>{heading}</h1>
        <LoginButton />
        <LogoutButton />
        </>
    )
}