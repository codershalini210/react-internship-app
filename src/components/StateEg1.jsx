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
    let cartbtn = <input type="button" value="Add to cart" onClick={()=>seti(1)} />
    let qtybtn = <div><input type="button" value="-" disabled={i<1?true:false} onClick={()=>decrement()} /> {i}
       <input type="button" value="+" disabled={i<5?false:true} onClick={()=>increment()}/>
        </div>
  return (
    <div>
{i==0?cartbtn:qtybtn}
       
      
        
    </div>
  )
}
