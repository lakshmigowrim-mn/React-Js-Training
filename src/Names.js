import { Button, Table } from "antd"
import { useState } from "react"

function Names(){
    var [names,setNames]=useState([{name:'lakshmi',email:'lakshmi@gmail.com',id:'345'}])

    var columns =[
        {
            title: 'USERNAME', 
            dataIndex:'name',
            key:'name'
        },
        {
            title: 'EMAIL', 
            dataIndex:'email',
            key:'email'
        },
        {
            title: 'ID', 
            dataIndex:'id',
            key:'id'
        },
        {
            title: 'ACTION', 
            fixed:'right',
            width: 90,
            render: (text,record,index) =>{ 
            return(
            <button type="primary" onClick={()=>deleteData(index)}>Delete</button>
        )}
        }
    ]
    var data={}
    function handleNames(e){
        data.name=e.target.value
    }
    function handleEmail(e){
        data.email=e.target.value
    }
    function handleId(e){
        data.id=e.target.value
    }
    function Added(){
        
        names.push(data)
        names=[...names]
        console.log("clicked",names)
        setNames(names)
    }
    function deleteData(index){
        names.splice(index,1)
        setNames(names=[...names])
    }
    
     return(
        
        <>
            <label><b>Name </b></label>
            <input type="text" name="name" placeholder="enter name" onChange={handleNames}></input><br/><br/>  
            <label><b>Email  </b></label>
            <input placeholder="enter email" name="email" onChange={handleEmail}></input> <br/><br/>
            <label><b>Id  </b></label>
            <input placeholder="enter ID" name="id" onChange={handleId}></input><br /><br/>
            <Button type="primary" onClick={Added}>Submit</Button><br/>
            <p><b> List of users : </b></p><br/>
            <Table dataSource={names} columns={columns} deleteData={deleteData}/>
            {/* {names.map((ele)=>{
                return(
                    
                    <p>{ele}</p>
                )
            })} */}
        </>
    )


}
export default Names