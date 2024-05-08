import { Button } from "antd"
import { useState } from "react"

function Meeting(){
    var [users, setUsers] = useState(0)
    function joinMeeting(){
        setUsers(users+1)

    }
    return (
        <>
        <Button type="primary" onClick={joinMeeting}>Join Meeting</Button><br/>
        People joined: <h1> {users}</h1>
        </>
    )
}
export default Meeting