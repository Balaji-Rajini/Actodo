import Todoitem from "./Todoitem"

function Todolist(props) {
    

    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
 
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow" >
            <h1 className=" text-2xl font-medium">Todays Activity</h1>
{activityarr.length===0?<p>You Haven't added anything Yet....</p>
:""}
{
            activityarr.map(function(item,index){
                return <Todoitem 
                activity={item.activity} 
                index={index}
                id={item.id}
                 activityarr={activityarr} 
                 setactivityarr={setactivityarr}></Todoitem>
                
            })
        }
        </div>

    )
} export default Todolist