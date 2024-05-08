import { Table } from "antd"
import { Link } from "react-router-dom";

function Datatable({data}){
    var totalkeys=[]
    data.forEach((element) => {
        var keys=Object.keys(element)
        totalkeys.push(...keys)
    });
    var uniquekeys=new Set(totalkeys)
    var columns =[] 
    uniquekeys.forEach((each)=>{
        
        columns.push( {
            title: each.toUpperCase(), 
            dataIndex:each,
            key:each
        })
    })
    columns.push({
        title: 'ACTION', 
        fixed:'right',
        width: 90,
        render: (text,record,index) =>{ 
        return(
            <>
            
        <Link to='/admin/edit/'><button type="primary">Edit</button></Link>
        </>
    )}
    })
    return(
        <Table dataSource={data} columns={columns} />
    )
}
export default Datatable