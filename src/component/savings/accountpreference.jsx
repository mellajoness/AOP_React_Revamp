import React, { useState } from 'react';
import styles  from './../css/accountpreference.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../../shared/images/fidelitylogo.svg";
import {ReactComponent as TickIcon} from "../../shared/images/titik.svg";
const AccountPreference = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('')
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
               <div className={styles.account}>Account Preference</div>
               <div className={styles.note}>Select your savings account type</div>
              <div className={styles.view}>View features</div>
              <div className={styles.formdiv}>
               <select className={styles.dropdown}>
                  <option defaultValue>Product type</option>
                  <option value="1">Tier 1</option>
                  <option value="2">Tier 2</option>
                  <option value="3">Tier 3</option>
               </select>

               <div className={styles.selectrow}>
                 <select className={styles.selecthalf}>
                   <option defaultValue>Branch state</option>
                   <option value="1">Tier 1</option>
                   <option value="2">Tier 2</option>
                   <option value="3">Tier 3</option>
                 </select>

                 <select className={styles.selecthalf}>
                   <option defaultValue>Branch Location</option>
                   <option value="1">Tier 1</option>
                   <option value="2">Tier 2</option>
                   <option value="3">Tier 3</option>
                 </select>
               </div>

               <div className={styles.inputrow}>
                    <input className={styles.input} onChange={e => setUsername(e.target.value)}  value={username}  placeholder='Introducer staff ID' type="text"/>
                    <input className={styles.input} onChange={e => setUsername(e.target.value)}  value={username}  placeholder='Introducer name' type="text"/>                 
               </div>
              </div>
              
              <button className={styles.btn}>Proceed</button>
             
             </div>
             <div className={styles.titik}><TickIcon height="60" className={styles.logo}/>{" "}</div>
            </div>
            </div>
       </div>
    </div>   
     );
}
 
export default AccountPreference;