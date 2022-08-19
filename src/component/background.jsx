import styles  from './css/background.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg"
const Background = () => {
    return ( 
        <div className={styles.parent}>
            <div className={styles.logoMenu}>
                 <div className={styles.titik}><FidelityIcon height="30" className={styles.logo}/>{" "}</div>
                 <div className={styles.menubutton}>
                   <AiOutlineMenu  className={styles.menuicon}/>
                   <div className={styles.menu}>Menu</div>
                 </div>
              </div>

           <div className={styles.backgroundImage}>
           </div>
        </div>   
     );
}
 
export default Background;