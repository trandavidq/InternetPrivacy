import React, {useEffect, useState} from 'react'

export function PasswordInput(){
    const [password,setPassword] = useState('')
    const [finalPassword, setFinalPassword] = useState('')
    function submitPassword(e){
        console.log('Submitted password to crack: '+ password);
        setFinalPassword(password)
        //Prevent state reset
        e.preventDefault();

    }
    useEffect(() => {
        console.log('Hello '+ password)
    })
    return (
        <form onSubmit={submitPassword}>
            <label>
                Enter password to crack: 
                <input type="text" onChange={e => setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}