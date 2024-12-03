
import styles from "./DataInput.module.css";


const AboutUs = () => {
const names=["Madhav Sankar","Manish Muchapothula","Vemula Sai Jahnavi"]
  return (
    
 
<div className={styles.about_page}>

<h2 style={{color:'white'}}> ABOUT US</h2>
<p style={{color:'white'}}>THIS IS A PROJECT DONE BY</p>

<ul>
{names.map((value,index)=>{
    return(
        <li key={index} style={{color:"white"}}>{value}</li>
    )
})}    
</ul>


</div>


    


  );
};

export default AboutUs;
