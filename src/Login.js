import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Login(){
    var email 
    var password 
    
    function handleEmail(event){
        console.log("Typing email..",event.target.value)
        email=event.target.value
    }
    function handlePassword(event){
        console.log("Typing password..",event.target.value)
        password=event.target.value
    }
    var navigate = useNavigate()
    var [error,setError] = useState("")
    function login(){
        if(email=="asdf" && password=="asdf"){
            alert("Here are the Login details you entered. \nEmail : "+email+" \nPassword : "+password)
        }else {
            navigate("/wrongdetails")
        }
    }
    return (
        <div>
            <br></br>
            <h3><i>Login with your details</i></h3>
            <label for="email"><b>Email  </b></label>
            <input placeholder="enter email" onChange={handleEmail} id="email" name="email" required></input> <br/><br/>
            <label><b>Password  </b></label>
            <input placeholder="enter password" onChange={handlePassword}></input><br/><br/>
            <Button type="primary" onClick={login}>Submit</Button>
            <p>New User </p>
            <Link to="/signup" ><Button type="primary" style={{background:'purple'}}>Register</Button></Link>
            <p>ForgotPassword</p>
            <Link to="/forgotpassword" ><Button type="primary" style={{background:'green'}}>ForgotPassword</Button></Link>
        </div>
    )
}

export default Login

