
function ForgotPassword(){
    var email
    function handleEmail(event) {
        email=event.target.value
    }
    function onSubmit(){
        alert("password reset mail has sent successfully to the email : "+ email)
    }
    return (
        <div>
            <br/>
            <p>Please, Enter your email address to get password reset mail.</p>
            <label><b>Email  </b></label>
            <input placeholder="enter email" onChange={handleEmail}></input> <br/><br/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default ForgotPassword