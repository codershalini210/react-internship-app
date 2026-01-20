import React from 'react'

export default function Service(props) {
  return (
    <div className='service'>
        <h2>{props.name}</h2>
        <hr />
        <p>{props.desc}</p>
        <p>Projects Completed : <b>{props.pdone}</b></p>
 </div>
  )
}
