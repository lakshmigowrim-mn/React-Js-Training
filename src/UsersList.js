import { Alert, Card,Space,Image } from "antd";
import Datatable from "./Datatable";

function UsersList() {
    var users = [
        {id:123, name:"lakshmi"},
        {id:234,name:"amulya", role:"developer"},
        {id:894,name:"alekya", role:"tester", location:"hyderabad" }
    ]

    if(users.length == 0) {
        return (
            <Alert message="No users" type="warning"/>
        )
    } else {
        return (
            <>
                {/* {users.map((each) => {
                    console.log("each",each)
                    var k = Object.keys(each)
                    return(
                        <Space direction="horizontal" size={16}>
                        <Card style={{width:200}}>
                            <Image height={150} src="variety.png" />
                            {
                                k.map((element)=>{
                                    return(
                                        <p>{each[element]}</p>
                                    )
        
                                })
                            }
                        </Card>
                        </Space>
                    )
                 
                    
                })} */}
                {users.map((each) => {
                    
                    var k = Object.keys(each)
                    return(
                        <Space direction="horizontal" size={16}>
                        <Card style={{width:200}}>
                            <Image height={150} src="variety.png" />
                            {
                                k.map((element)=>{
                                    return(
                                        <p>{each[element]}</p>
                                    )
        
                                })
                            }
                        </Card>
                        </Space>
                    )
                 
                    
                })}
                <Datatable data={users} />
            </>
        )
    }
    }


export default UsersList