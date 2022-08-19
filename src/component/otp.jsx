import styles  from './css/otp.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as TickIcon} from "../shared/images/titik.svg";
import { useState } from 'react';
const OTP = () => {
    const [bvn,setBvn]=useState('')
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
             <div className={styles.outer}>
               <div className={styles.backiconProgress}>
                 <IoIosArrowBack style={{color:'#0D237D',fontSize:'1.3em',cursor:'pointer'}} />
                 <div>1/6</div>
               </div>  
               <div className={styles.verification}>Verification</div>
               <div className={styles.note}>Kindly verify BVN</div>

               <div className={styles.row}>
                    <input className={styles.input} onChange={e => setBvn(e.target.value)}  value={bvn}  placeholder='Enter BVN' type="number"/>
                    <button className={styles.btn}>Verify</button>
               </div>

               <div className={styles.otpdiv}>
                 <div className={styles.note}>Enter 4-digit OTP sent to the number registered on your BVN</div>
                 <div className={styles.otprow}>
                    <input className={styles.input} onChange={e => setBvn(e.target.value)}  value={bvn}  placeholder='Enter BVN' type="number"/>
                    <button className={styles.btn}>Verify</button>
               </div>
               <div  className={styles.didnt}>Didn’t get OTP? <span className={styles.resend}>Resend</span></div>
               </div>
               <button className={styles.proceedbtn}>Proceed</button>
             </div>   
             <div className={styles.titik}><TickIcon height="60" className={styles.logo}/>{" "}</div>        
            </div>
           </div>
       </div>
    </div>   
     );
}
 
export default OTP;