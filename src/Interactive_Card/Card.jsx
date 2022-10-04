import React from "react";
import { useState } from "react";
import styles from "./Card.module.css"

function Card() {

    let [value, setValue] = useState('')

    function inputName(event) {
        const result = event.target.value.replace(/[^a-z]/gi, ' ')
        setValue(result)
    };


    let [number, setNumber] = useState('')
    
    function inputNumber(event){
        let result = event.target.value
        
        setNumber(result.replace(/\W/gi, '  ').replace(/(.{4})/g, '  $1 '))
    }

    let [month, setMonth] = useState('')

    function inputMonth(event){
        if(event.target.value<10){
            setMonth("0" + event.target.value)
        }else{
            setMonth(event.target.value)
        }
    }

    let [year, setYear] = useState('')

    function inputYear(event){
        setYear(' / ' + event.target.value)      

    }

    let [cvv, setCVV] = useState('')

    function inputCVV(event){
        setCVV(event.target.value)
    }


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.aside}>
                    <div className={styles.credit_front}>
                        <p className={styles.cardNumber}>{number}</p>
                        <p className={styles.cardholderName}>{value.toUpperCase()}</p>
                        <p className={styles.cardDate}>{month}{year}</p>
                        <div className={styles.card_plate}></div>
                        <div className={styles.card_logo}></div>
                    </div>
                    <div className={styles.credit_back}>
                        <div className={styles.back_first_sheet}></div>
                        <div className={styles.back_second_sheet}>
                            <p className={styles.cardCVV}>{cvv}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <form action="#" className={styles.form}>
                        <label htmlFor="name">CARDHOLDER NAME</label>
                        <input type="text" size="28" name="name" id={styles.inp} value={value} required onChange={inputName} maxLength={20} />
                        <label htmlFor="number">CARD NUMBER</label>
                        <input type="number" name="number" id={styles.inp} required onChange={inputNumber} maxLength={16} onInput={(e)=>{if (e.target.value.length>e.target.maxLength) {e.target.value=e.target.value.slice(0, e.target.maxLength)}}}/>
                        <label htmlFor="date">EXP. DATE  (MM / YY)     <p className={styles.cvc_label}>CVC</p></label>
                        <div className={styles.experience}>
                            <input type="number" className={styles.experience_date} required placeholder={"MM"} max={12} min={1} onChange={inputMonth} onInput={(event)=>event.target.value=event.target.value.slice(0, 2)}/>
                            <input type="number" className={styles.experience_date} required placeholder={"YY"} min={22} max={99} onChange={inputYear} onInput={(event)=>event.target.value=event.target.value.slice(0, 2)}/>
                            <input type="number" className={styles.experience_cvc} required placeholder={"CVV"} min={100} max={999} onChange={inputCVV} onInput={(event)=>event.target.value=event.target.value.slice(0, 3)}/>
                        </div>


                        <input type="submit" value={"Confirm"} className={styles.confirm}/>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Card