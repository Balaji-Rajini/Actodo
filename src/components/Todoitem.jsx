function Todoitem(props){

    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
const handledelete=(id)=>{
    var temp=activityarr.filter(function(item){
        if(item.id===id){
            return false
        }else{
            return true
        }
    })
    setactivityarr(temp)
}

    return(
    <div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
    <button className="text-red-500" onClick={()=>handledelete(props.id)}>Delete</button>
</div>

)

}export default Todoitem