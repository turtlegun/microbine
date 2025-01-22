import React from "react"
import error from "../../assets/Vector (10).png"
import style from './style.module.css'
import cross from '../../assets/Vector (16).svg'
interface error_props{
message:string
setServerError:React.Dispatch<React.SetStateAction<string>>
}

const Error:React.FC<error_props>=({message,setServerError})=>{
    return(
       
        <div className={`w-[29.51vw] h-[41.56vh] top-[29.29vh] left-[25.14vw] absolute bg-[#F4F5F9]`}>

<div className={`w-[4.86vw] h-[6.84vh] top-[7.23vh] left-[12.64vw] absolute`}>
    <img src={error} alt="error"/>
</div>

<div className={`w-[21.74vw] h-[5.27vh] top-[18.23vh] left-[4.64vw] absolute  text-[1.13vw] flex items-center 
    justify-center
    ${style.message}`}>
{message ? message : "something went wrong"}
</div>


<div className={`w-[2.08vw] h-[2.93vh] absolute right-5 flex justify-center items-center top-5`} 
onClick={()=>setServerError('')}>
<img src={cross} alt="cross"/>
</div>
        </div>
    )
}
export default Error