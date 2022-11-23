import React, {useState, useEffect} from 'react'
import { bruteForcePasswordCracker } from '../passwordCracker'

export function BruteForcePassword({passwordToCrack}){
    const [timeToCrack,setTimeToCrack] = useState(0)
    useEffect(() => {
        const getTime = async()=>{
            console.log('Password passed in: '+ passwordToCrack)
            const time_ms = await bruteForcePasswordCracker(passwordToCrack)
            setTimeToCrack(time_ms);
        }
        getTime()
    },[passwordToCrack])
    if(timeToCrack!=0){
        return (
            <h4>Time elapsed: {timeToCrack}s</h4>
        );
    }
    else{
        return (
            <h4>Timing...</h4>
        );
    }
    
}

