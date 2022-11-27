import React, {useState, useEffect} from 'react'
import { dictionaryPasswordCracker } from '../dictionaryAttack';
import axios from 'axios';
export function DictionaryPassword({passwordToCrack}){
    const [timeToCrack,setTimeToCrack] = useState(0)
    const [textData,setTextData] = useState('')
    let textArray = []
    useEffect(() => {
        const retrieveData = async() => {
            const response = await axios.get("http://localhost:3000/dictionary.txt")
            const data = await response.data
            setTextData(data)
            textArray = data.split(/\r?\n/)
            const time_ms = await dictionaryPasswordCracker(passwordToCrack,textArray)
            console.log('Time: '+ time_ms);
            setTimeToCrack(time_ms)
        }
        retrieveData()
        //console.log(textData)
    },[passwordToCrack])
    if(timeToCrack>0){
        return (
            <h4>Time elapsed: {timeToCrack}ms</h4>
        );
    }
    else if(timeToCrack==-1){
        //Password not found
        return (
            <h4>Password not found within dictionary</h4>
        );
    }
    else{
        return (
            <h4>Timing...</h4>
        );
    }
}