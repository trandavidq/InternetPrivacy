import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import {BruteForcePassword} from './components/BruteForcePassword'
function App() {
  const [password,setPassword] = useState('')
  const [finalPassword, setFinalPassword] = useState('')
  const [bruteForce,setBruteForce] = useState(false)
  const [dictionary,setDictionary] = useState(false)
  function submitPassword(e){
      setFinalPassword(password)
      e.preventDefault();

  }
  useEffect(() => {
  },[finalPassword, bruteForce, dictionary])
  
  if(finalPassword.length>0 && bruteForce){
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={submitPassword}>
              <label>
                  Enter password to crack: 
                  <input type="text" onChange={e => setPassword(e.target.value)}/>
              </label>
              <input type="submit" value="Submit" />
          </form>
          <h3>Attempting to brute force the password: {finalPassword}</h3>
          <BruteForcePassword passwordToCrack={finalPassword}/>
        </header>
        
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={submitPassword}>
              <label>
                  Enter password to crack: 
                  <input type="text" onChange={e => setPassword(e.target.value)}/>
              </label>
              <label>
                <input type="checkbox" checked={bruteForce} onChange={e => setBruteForce(e.target.checked)}/>
                Brute force
              </label>
              <label>
                <input type="checkbox" checked = {dictionary} onChange={e => setDictionary(e.target.checked)}/>
                Dictionary
              </label>
              
              <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );

  }
  
}

export default App;
