import { Button } from "antd"
import axios from "axios"

function SignUp(){
    var email 
    var password 
    var name 
    var id
    function handleEmail(event){
        console.log("Typing email..",event.target.value)
        email=event.target.value
    }
    function handlePassword(event){
        console.log("Typing password..",event.target.value)
        password=event.target.value
    }
    function handleName(event){
        console.log("Typing name..",event.target.value)
        name=event.target.value
    }
    function handleId(event){
        console.log("Typing name..",event.target.value)
        id=event.target.value
    }
    function login(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
            method:"post",
            data:{name,email,password}
        }).then((response) => {
            console.log(response)
            console.log("data is")
            console.log(response.data)
            console.log("response coming from create account api ",response.data.data)
        }, (error) => {
            console.log("error from register/create account api",error)
        })
       // alert("Here are the Login details you entered. \nEmail : "+email+" \nPassword : "+password+" \nName : "+name +"\nId : "+id)
    }
    return (
        <div>
            <br></br>
            <h3><i>Login with your details</i></h3>
            <label><b>Username  </b></label>
            <input placeholder="enter name" onChange={handleName}></input> <br/><br/>
            <label><b>Id  </b></label>
            <input placeholder="enter Id" onChange={handleId}></input> <br/><br/>
            <label><b>Email  </b></label>
            <input placeholder="enter email" onChange={handleEmail}></input> <br/><br/>
            <label><b>Password  </b></label>
            <input placeholder="enter password" onChange={handlePassword}></input><br /><br/>
            <Button type="primary" onClick={login}>Submit</Button>
        </div>
    )
}
export default SignUp