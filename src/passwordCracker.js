let stop = false
let amount = 0
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']
export async function bruteForcePasswordCracker(password){
    const startTime = Date.now()
    await solve(password)
    const endTime = Date.now()
    const timeElapsed = endTime-startTime
    console.log(timeElapsed+' milliseconds have passed to crack the password: '+ password);
    return timeElapsed
}

async function solve(password){
    let pwLength = 1
    const startTime = Date.now()
    //2 minute limit
    while(stop==false && Date.now()-startTime<120000){
        crack(pwLength,"",password)
        pwLength++
        if(stop==true){
            break;
        }
    }
}
function crack(length, current,password){
    //console.log(current);
    if(length==0 && stop==false){
        if(current==password){
            stop = true;
        }
        return;
    }
    if(stop==false){
        for(let i = 0; i<62;i++){
            let newCurrent = current.concat(alphabet[i])
            crack(length-1,newCurrent,password);
        }
    }
}


