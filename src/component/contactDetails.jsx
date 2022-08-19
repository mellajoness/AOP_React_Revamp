import React, { useState } from 'react';
import styles  from './css/contactDetails.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as TickIcon} from "../shared/images/titik.svg";
const ContactDetails = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [otherName,setOtherName]=useState('');
    const [email,setEmail]=useState('');
    const [dob,setDOB]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('')
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
               <div className={styles.account}>Contact Details</div>
               <div className={styles.note}>Select your savings account type</div>
              
              <div className={styles.formdiv}>
               <div className={styles.inputrow}>
                    <input className={styles.input} onChange={e => setFirstName(e.target.value)}  value={firstName}  placeholder='House address' type="text"/>          
               </div>

               <div className={styles.inputrow}>               
               <select className={styles.dropdown}>
                  <option defaultValue disabled>City</option>
                  <option value="1">Lagos</option>
                  <option value="2">Abuja</option>
               </select>
               </div>

               <div className={styles.inputrow}>
               <select className={styles.dropdown}>
                  <option defaultValue disabled>Nearest landmark/bus-stop</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                  <option value="2">Divorced</option>
               </select>
               </div>

               <div className={styles.inputrow}>
               <select className={styles.dropdowntwo}>
                  <option defaultValue disabled>Occupation</option>
                  <option value="1">Banker</option>
                  <option value="2">Doctor</option>
               </select>
               <select className={styles.dropdowntwo}>
                  <option defaultValue disabled>Occupation</option>
                  <option value="1">Banker</option>
                  <option value="2">Doctor</option>
               </select>
               </div>
               <div className={styles.optional}>Optional</div>
               <div className={styles.inputrowtwo}>
                    <input className={styles.inputtwo} onChange={e => setDOB(e.target.value)}  value={dob}  placeholder='Twitter handle' type="text"/>
                    <input className={styles.inputtwo} onChange={e => setPhoneNumber(e.target.value)}  value={phoneNumber}  placeholder='Facebook handle' type="text"/>                 
               </div>
               <div className={styles.inputrowtwo}>
                    <input className={styles.inputtwo} onChange={e => setDOB(e.target.value)}  value={dob}  placeholder='Instagram handle' type="text"/>
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
 
export default ContactDetails;