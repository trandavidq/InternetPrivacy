import React, {useState, useEffect} from 'react'


export function BruteForcePassword({passwordToCrack}){
    //const [currPasswordGuess, setCurrPasswordGuess] = useState('');
    const [stop, setStop] = useState(false)
    const [amount,setAmount] = useState(0)
    const [time,setTime] = useState(0)
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']
    function crack(length, current){
        if(length==0 && !stop){
            setAmount(amount+1)
            //console.log('Brute force current guess: '+ current)
            if(current==passwordToCrack){
                setStop(true)
            }
            return
        }
        if(!stop){
            for(let i =0; i<62;i++){
                crack(length-1, current+alphabet[i])
            }
        }
        
    }
    useEffect(() => {
        //Only want to run this once, or risk running into infinite loop
        // while(!stop){
        //     let pwLength = 1;
        //     crack(pwLength,"");
        //     pwLength+=1
        //     if(stop){
        //         break;
        //     }
        // }
        // console.log('Cracked password in '+ amount+' attempts');

    },[])
    return (
        <h4>Time elapsed: {time}s</h4>
    );
}

