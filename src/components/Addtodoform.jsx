
import { useState } from "react"

function Addtodoform(props){
    const activityarr=props.activityarr
const setactivityarr=props.setactivityarr



const [newact , setnewact]=useState("")

function handlechange(event){
    setnewact(event.target.value)
}
function addact(){
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newact}])
setnewact("")
}
    return(
    
      <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities..</h1>
                <div>
                    <input value={newact} onChange={handlechange} placeholder="Next activity ?" className="border border-black bg-transparent p-1" type="text" />
                    <button className="text-white bg-black p-1 border border-black" onClick={addact}> Add</button>
                </div>
            </div>

)
}
export default Addtodoform