import {useLocation} from "react-router-dom"
import Card from "./Card";
import Header from "./Header"; 
import Todocontainer from "./TodoContainer"; 

function Landing(){
    const data=useLocation()

    const user= data?.state?.user 

         return (

        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

{/* Header */}
                <Header name={user}/>
                {/* Card */}
                <div className="flex justify-between gap-7 my-5 flex-wrap" >
                    <Card bgcolor={"#8272DA"} title={"23*"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14-08-2025"} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />

                </div>
{/* TodoConatiner */}
            <Todocontainer/>
            </div>
        </div>

    )
}

export default Landing