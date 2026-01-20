import React from 'react'

export default function Teammember(props) {
    //   props= {mname:"John", designation:"Software Developer"}
    let name = props.mname
    let designation = props.designation
    let mimg = props.mimg
  return (
    <div className='team-member'>
        <img src={mimg} alt="" />
        <h2>{name}</h2>
        {designation}

    </div>
  )
}
