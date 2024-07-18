import React, { useContext } from 'react'
import UserContext from './context/UserContext'

function Pofile() {
  const {user} = useContext(UserContext)
  if(!user) return <h1>No user found</h1>
  return (
    <div>
      <h1>Pofile : {user.useNname}</h1>
    </div>
  )
}

export default Pofile