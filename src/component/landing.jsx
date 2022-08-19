import styles  from './css/landing.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as TickTickIcon} from "../shared/images/titik.svg";
const Landing = () => {
    return ( 
        <div className={styles.parent}>
            <div className={styles.backgroundImage}>
              <div className={styles.logoMenu}>
                 <div className={styles.titik}><FidelityIcon />{" "}</div>
                 <div className={styles.menubutton}>
                   <AiOutlineMenu style={{color:'white',fontSize:'1.2em'}}/>
                   <div className={styles.menu}>Menu</div>
                 </div>
              </div>

              <div className={styles.boxparent}>
                <div className={styles.box}>
                  {/* <div className={styles.icondiv}><TickTickIcon height="35" />{" "}</div> */}
                  <div className={styles.online}>Online Account Opening Portal</div>
                  <div className={styles.open}>Open an account in these simple steps</div>
                  <button className={styles.btn}>Open a new account</button>
                  <div className={styles.borderDiv}>
                      <div className={styles.border}/>
                      <div className={styles.or}>OR</div>
                      <div className={styles.border}/>
                  </div>
                  <button className={styles.btnoutline}>Upgrade your account</button>
                  <div className={styles.already}>Already have an account? <span className={styles.login}>Login here</span></div>
                </div>
              </div>

            </div>
        </div>
       
     );
}
 
export default Landing;