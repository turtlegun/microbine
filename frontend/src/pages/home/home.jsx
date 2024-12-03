import { Link } from "react-router-dom"
import DataInputSection from "./helper/helper"


const Home=()=>{

    return(
        <>
        <DataInputSection/>
        <Link to={'/profile'}>
        <img src="https://cdn-icons-png.flaticon.com/512/11540/11540172.png" style={{width:"50px",height:"50px",position:"absolute",
            right:"40px",top:"10px"}}/>
            </Link>
        </>
    )
}
export default Home