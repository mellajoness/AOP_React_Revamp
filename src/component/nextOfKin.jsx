import React, { useState } from 'react';
import styles  from './css/nextOfKin.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {ReactComponent as FidelityIcon} from "../shared/images/fidelitylogo.svg";
import {ReactComponent as TickIcon} from "../shared/images/titik.svg";
const NextOfKin = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [otherName,setOtherName]=useState('');
    const [email,setEmail]=useState('');
    const [dob,setDOB]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [setHouseAddress,houseAddress]=useState('');
    const [relation,setRelation]=useState('');
    const [city,setCity]=useState('')
    const [State,setState]=useState('')
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
               <div className={styles.account}>Next Of Kin Details</div>
               <div className={styles.note}>Select your savings account type</div>
              
              <div className={styles.formdiv}>
               <div className={styles.inputrow}>
                    <input className={styles.input} onChange={e => setFirstName(e.target.value)}  value={firstName}  placeholder='First name' type="text"/>
                    <input className={styles.input} onChange={e => setLastName(e.target.value)}  value={lastName}  placeholder='Last name' type="text"/>                 
               </div>

               <div className={styles.inputrow}>
               <input className={styles.input} onChange={e => setOtherName(e.target.value)}  value={otherName}  placeholder='Other names' type="text"/>
               <select className={styles.dropdown}>
                  <option defaultValue disabled>Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
               </select>
               </div>

               <div className={styles.inputrow}>
                    <input className={styles.input} onChange={e => setDOB(e.target.value)}  value={dob}  placeholder='DOB' type="Date"/>
                    <input className={styles.input} onChange={e => setEmail(e.target.value)}  value={email}  placeholder='Email' type="text"/>                 
               </div>

               <div className={styles.inputrow}>
                   <input className={styles.input} onChange={e => setPhoneNumber(e.target.value)}  value={phoneNumber}  placeholder='Phone number' type="number"/>
                   <input className={styles.input} onChange={e => setRelation(e.target.value)}  value={relation}  placeholder='Relation to you' type="text"/>
               </div>

               <div className={styles.inputrow}>
                    <input className={styles.inputtwo} onChange={e => setHouseAddress(e.target.value)}  value={houseAddress}  placeholder='House address' type="text"/>                  
               </div>

               <div className={styles.inputrow}>
                    <input className={styles.input} onChange={e => setCity(e.target.value)}  value={city}  placeholder='City' type="Date"/>
                    <input className={styles.input} onChange={e => setState(e.target.value)}  value={State}  placeholder='State' type="text"/>                 
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
 
export default NextOfKin;