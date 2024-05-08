class Abc{
    getData(){
        console.log("this-get",this)
        setTimeout(()=>{
            console.log("this-set",this)
        },0)
    }
}
var ob=Abc();
ob.getData();