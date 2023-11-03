import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = '',
    let str = 'ABCDEFGHIJKLMNOPQRSTUVEXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed)  str+= '0123456789'
    if (charAllowed)  str+= '!@#$%*{}~^'

    for (let i = 1; i <= array.length; i++) {
      
      
    }


  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
