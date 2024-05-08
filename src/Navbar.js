import { Button, Menu } from "antd"
import { Link } from "react-router-dom"

function Navbar(){
    const items = [
        {label : (<Link to="/login"><Button type="primary">Login</Button></Link>)},
        {label : (<Link to="/signup"><Button type="primary">Sign Up</Button></Link>)},
        {label : (<Link to="/forgotpassword"><Button type="primary">ForgotPassword</Button></Link>)}
    ]
    return (
        <Menu style={{backgroundColor: "#78a4eb"}}mode="horizontal" items={items}/>
    )
}

export default Navbar