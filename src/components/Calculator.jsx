import React from 'react'
import { useState } from 'react'
export default function Calculator() {
    const [a,seta] = useState(0)
    const [b,setb] = useState(0)
    const [result,setresult] = useState()
  return (
    <div style={{marginLeft:'25%',textAlign:'center',width:'50%'}}>Calculator:
        <br />
        <p>
            a : <input type="text" onChange={(e)=>seta(parseInt(e.target.value))}/>
        </p>
        <p>
            b : <input type="text" onChange={(e)=>setb(parseInt(e.target.value))}/>
        </p>
      
        <input type="button" value="+" onClick={()=>setresult(a+b)} />
        <input type="button" value="-" onClick={()=>setresult(a-b)} />
        <input type="button" value="*" onClick={()=>setresult(a*b)} />
        <input type="button" value="/" onClick={()=>setresult(a/b)} />
        <h2 style={{color:"blue"}}>{result}</h2>
    </div>
  )
}
