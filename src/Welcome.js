import {Card,Space,Image} from "antd"
function Welcome(props){

    var data={
        name:props.data.name,
        id : props.data.id,
        image:props.data.image
    }
        return (
        <Space direction="horizontal" size={16}>
        <Card>
            <Image preview={true} src={props.data.image} width={200} ></Image>
            <p>Name: {props.data.name}</p>
            <p>Id : {props.data.id}</p>
        </Card>
        </Space>
    )
}   


// function Welcome(props){
//     var data={
//         name:props.welcome.name,
//         id : props.welcome.id,
//         image:props.welcome.image
//     }
//         return (
//         <Space direction="horizontal" size={16}>
//         <Card>
//             <Image preview={true} src={data.image} width={200} ></Image>
//             <p>Name: {props.welcome.name}</p>
//             <p>Id : {props.welcome.id}</p>
//         </Card>
//         </Space>
//     )
// }
export default Welcome;