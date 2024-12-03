import { useState } from "react"



const Feedback=()=>{
const[user_data,setUserdata]=useState('')

const feedback=()=>{

if(user_data){
    alert("feed back send successfully")
}
if(!user_data){
    alert("type feed back")
}
}
    return(
        <div style={{position:"absolute",right:"100px",top:"500px" }}>
<h2 style={{color:"white"}}>FEED BACK</h2>
<p style={{color:'white'}}>GIVE ME YOUR FEED BACKS</p>
<input type=" text" placeholder="type feed back" onChange={(e)=>{setUserdata(e.target.value)}}></input>
<button onClick={feedback}>SUBMIT</button>
        </div>
    )
}
export default Feedback