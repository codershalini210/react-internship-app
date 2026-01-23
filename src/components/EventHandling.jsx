import React from 'react'

export default function EventHandling() {
    let hi = () => 
    {
        alert("good Morning ")
    }
    let hello = (name)=>
    {
      alert("welcome "+name)
    }
      return (
    <div>
        <input type="button" value="hi" onClick={()=>hi()}  />
        <input type="button" value="hello" onClick={()=>hello('John')}  />
    </div>
  )
}
