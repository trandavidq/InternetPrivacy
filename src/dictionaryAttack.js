export async function dictionaryPasswordCracker(password,textArray){
    const startTime = Date.now()
    //console.log('Text array: '+textArray)
    const res = await solve(password,textArray)
    const endTime = Date.now()
    if(res){
        const timeElapsed = endTime-startTime
        console.log(timeElapsed+' milliseconds have passed to crack the password: '+ password);
        return timeElapsed
    }
    else{
        console.log('Password not found')
        return -1
    }

}

async function solve(password,textArray){
    //console.log(textArray)
    for(let i=0;i<textArray.length;i++){
        const s = textArray[i]
        console.log(s)
        //console.log('Pwd in array: '+ s)
        if(s==password){
            return true;
        }
    }
    return false;
}