import Datatable from "./Datatable";
import { users } from "./data";

function Admin(){

    function editData(){
        console.log("hii");
    }
    return (
        <>
        <Datatable data={users} editData={editData}/>
        </>
    )
}
 export default Admin