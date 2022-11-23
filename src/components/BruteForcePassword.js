import React, {useState, useEffect} from 'react'
import { bruteForcePasswordCracker } from '../passwordCracker'

export function BruteForcePassword({passwordToCrack}){
    //const [currPasswordGuess, setCurrPasswordGuess] = useState('');
    //Idea is to pass the password into the password cracking and time it
    const [timeToCrack,setTimeToCrack] = useState(0)
    useEffect(() => {
        //console.log('Running useEffect()')
        const getTime = async()=>{
            const time_ms = await bruteForcePasswordCracker(passwordToCrack)
            //console.log('TIME_MS: '+time_ms)
            const time_s = time_ms * 0.001
            setTimeToCrack(time_ms);
        }
        getTime()
        //console.log('Finished running')
        //console.log('Time to crack: '+ timeToCrack)
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

