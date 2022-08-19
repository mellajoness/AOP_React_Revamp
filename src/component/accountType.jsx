import styles  from './css/accountTypes.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as SavingsIcon} from "../shared/images/save.svg";
import {ReactComponent as CurrentIcon} from "../shared/images/current.svg";
import {ReactComponent as DiaporaIcon} from "../shared/images/diaspora.svg";
const AccountType = () => {
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
               <div className={styles.account}>Account type</div>
               <div className={styles.note}>What type of account will you like to open?</div>

               <div>
                 <div className={styles.accTypeBox}>
                    <div className={styles.row}>
                    <div className={styles.iconDescDiv}>
                      <div className={styles.iconbox}><SavingsIcon/></div>
                      <div className={styles.savingColumn}>
                        <div className={styles.accType}>Savings account</div>
                        <div className={styles.accTypeDesc}>Used by individuals as a personal bank account</div>
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
                      <div className={styles.iconbox}><CurrentIcon/></div>
                      <div className={styles.savingColumn}>
                        <div className={styles.accType}>Current account</div>
                        <div className={styles.accTypeDesc}>Used by individuals/businesses for official purpose</div>
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
                      <div className={styles.iconbox}><DiaporaIcon/></div>
                      <div className={styles.savingColumn}>
                        <div className={styles.accType}>Diaspora account</div>
                        <div className={styles.accTypeDesc}>Used by individuals living outside Nigeria </div>
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
 
export default AccountType;