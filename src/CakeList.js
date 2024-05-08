import Welcome from "./Welcome"


function CakeList(){
    var details = [
        {name:'amulya',id: 897, tag: "Best", image:"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"},
  {name:'Thanuj',id: 457, image:"https://www.fnp.com/images/pr/x/glistening-truffle-cake-half-kg_1.jpg"},
  {name:'ravi',id: 256, image:"https://www.fnp.com/images/pr/x/v20231016162347/eternal-ivory-rose-crescent_1.jpg"}
]
return(
    <div>
        {
             details.map((each)=>{
                return(
                    <Welcome data={each}/>
                )
             })
        }
 
    </div>
   
 
)
}

export default CakeList