import styles  from './css/verification.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as WithBVNIcon} from "../shared/images/withbvn.svg";
import {ReactComponent as WithoutBVN} from "../shared/images/withoutbvn.svg";
const Verification = () => {
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
           <div className={styles.boxparent}>
             <div className={styles.box}> 
               <div className={styles.backiconProgress}>
                 <IoIosArrowBack style={{color:'#0D237D',fontSize:'1.3em',cursor:'pointer'}} />
                 <div>1/6</div>
               </div>  
               <div className={styles.verification}>Verification</div>
               <div className={styles.note}>How will you like to open this account?</div>

               <div>
                 <div className={styles.accTypeBox}>
                    <div className={styles.row}>
                    <div className={styles.iconDescDiv}>
                      <div className={styles.iconbox}><WithBVNIcon/></div>
                      <div className={styles.savingColumn}>
                        <div className={styles.accType}>Open with BVN</div>
                        <div className={styles.accTypeDesc}>I have my bvn</div>
                      </div>  
                    </div>  
                    <IoIosArrowForward style={{color:'#0D237D',fontSize:'1.3em',cursor:'pointer'}} />
                    </div>
                 </div>                  
                </div>

                <div>
                 <div className={styles.accTypeBox}>
                    <div className={styles.row}>
                    <div className={styles.iconDescDiv}>
                      <div className={styles.iconbox}><WithoutBVN/></div>
                      <div className={styles.savingColumn}>
                        <div className={styles.accType}>Open without BVN</div>
                        <div className={styles.accTypeDesc}>I don't have a bvn</div>
                      </div>  
                    </div>  
                    <IoIosArrowForward style={{color:'#0D237D',fontSize:'1.3em',cursor:'pointer'}} />
                    </div>
                 </div>                  
                </div>

                <button className={styles.btn}>Proceed</button>


             </div>
            </div>
       </div>
    </div>   
     );
}
 
export default Verification;