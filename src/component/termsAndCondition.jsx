import React, { useState } from 'react';
import styles  from './css/termsAndConditions.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as TickIcon} from "../shared/images/titik.svg";
const TermsAndCondition = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
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
               <div className={styles.account}>Terms & Conditions</div>
               <div className={styles.note}>Kindly read our T&C and accept </div>
              
              <div className={styles.checktermsrow}>
               <input
                      className={styles.checkbox}
                      type="checkbox"
                      checked={checked}
                      onChange={handleChange}
                />
                <div className={styles.terms}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mauris risus tempus egestas risus velit. Mi ac massa id eros, in morbi feugiat cras. Dui sit etiam viverra posuere. Hac vivamus eu auctor neque, semper tristique aliquet at. Ornare at et ipsum donec nam. Mauris eu habitant fringilla nec volutpat mi in faucibus felis. Facilisi iaculis id mauris a, egestas. Purus fames pellentesque nibh diam nunc aliquam. Eget in pulvinar adipiscing justo, eget. Ornare at et ipsum donec nam. Mauris eu habitant fringilla nec volutpat mi in faucibus felis. Facilisi iaculis id mauris a, egestas. Purus fames pellentesque nibh diam nunc aliquam. Eget in pulvinar adipiscing justo, eget.</div>
              </div>

              <button className={styles.btn}>Generate my account number</button>
             
             </div>
             <div className={styles.titik}><TickIcon height="60" className={styles.logo}/>{" "}</div>
            </div>
            </div>
       </div>
    </div>   
     );
}
 
export default TermsAndCondition;