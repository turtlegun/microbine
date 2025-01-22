import React from "react"
import logo from '../../assets/medical-sign 1.svg'
import style from './style.module.css'

interface props{
    page:string
}
const Common:React.FC<props>=({page="notHome"})=>{
    return(
        
        <div className={`w-[100vw] h-[100vh] bg-[#0E78BA] `} >
  
        <div className={`w-[8.33vw] h-[11.72vh] absolute ${page==="notHome" ? "top-[10.94vh] left-[45.83vw] " :
            " top-[24.12vh] left-[7.92vw]" }`}>

            <img src={logo} alt="logo"/>
          </div>
      
        <div className={`flex justify-center text-center absolute ${ page==='notHome' ? "w-[17.15vw] h-[7.42vh] top-[46.39vh] left-[15.49vw]":
            "w-[35.97vw] h-[18.55vh] top-[40.72vh] left-[7.92vw]"
        }  
            ${style.left_message}`}>
    {page==='notHome'? "WELCOME TO HEALTH COMPASS": `THIS PLATFORM PROVIDESREGIONAL HEALTH STATISTICS AND INSIGHTS 
    TO SUPPORT DECISION-MAKING IN ADDRESSING CHRONIC 
    MALNUTRITION AND RELATED ISSUES.` }    
        </div>
{page==='notHome' &&(
    <div className={`w-[25.28vw] h-[7.42vh] top-[46.39vh] left-[67.36vw] absolute flex justify-center text-center 
            ${style.left_message}`}>
        MAKING SMARTER CHOICES FOR A HEALTHIER TOMORROW
        </div>
)}
      </div>
        
    )
}
export default Common