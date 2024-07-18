import React from 'react'
import { useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const{setuser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        // prevent form submission
        e.preventDefault()
        setuser({userName,password})
    }
  return (
    <div>
        <input 
        type="text"
        value={userName}
        placeholder='username'
        onChange={(e) => setUserName(e.target.value)}
         />
         {""}
         <input 
         type="password" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder='password'
         />

         <button
         onClick={handleSubmit}
         >submit</button>
    </div>
  )
}

export default Login