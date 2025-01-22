import React from "react"
import Common from "../common/common"
import style from './style.module.css'
const Home:React.FC=()=>{

    return(
      <>
      <Common page={"Home"}/>
      <div className={`w-[27.78vw] h-[60.16vh] top-[19.92vh] left-[50vw] absolute flex justify-center items-center  flex-col gap-5
    bg-[#F4F5F9] rounded-[1.1vw]`}>
  
        <div className={`w-[14.17vw] h-[5.47vh]   flex justify-center
             text-center ${style.container_header}`}>
        PLEASE ENTER YOUR LOCATION DETAILS
        </div>
        <label style={{color:"#16151533"}}   className={style.container_header}>ENTER THE NAME OF PLACE </label>
            <input type="text" placeholder="eg : NewYork" className={`w-[22.22vw] h-[4.39vh] bg-[#1615151A] rounded-[.17vw]`}/>
            Or
           
        <div className={`w-[14.17vw] h-[5.47vh]   flex justify-center
             text-center ${style.container_header}`}>
        ENTER  GPS COORDINATES
        </div> 
<div className={`flex justify-center gap-[10vw]`}>
 
 <label style={{color:"#16151580"}}>
LATITUDE
    </label>
    <label  style={{color:"#16151580"}}>
        LONGITUDE
    </label>
 </div>
 <div className={`flex justify-center gap-[5vw]`}> 
    <input className={style.input}  />
   
    <input className={style.input}/>
</div>
</div>
      </>
    )
}
export default Home