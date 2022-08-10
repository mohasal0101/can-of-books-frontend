import { Component } from "react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

export default class LogInOut extends Component {
    render (){
        return (
            <>
            <LoginButton />
            <LogoutButton />
            </>
        )
    }
}