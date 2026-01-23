import React from 'react'
import { useState } from 'react';
export default function StateEg1() {
    const [i,seti] =useState(0)
    // let  i = 0 ;
    let increment = ()=>
    {
        seti(i+1)
        console.log(i)
    }
    let decrement = ()=>
    {
        seti(i-1)
        console.log(i)
    }
  return (
    <div>
       <input type="button" value="-" onClick={()=>decrement()} /> {i}
       <input type="button" value="+" onClick={()=>increment()}/>
        
    </div>
  )
}
