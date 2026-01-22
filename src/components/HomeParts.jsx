import React from 'react'
import i1 from "../assets/img1.jfif"
export default function HomeParts(props) {
    let right = props.setright;
    let heading= props.hmain;
    let subheading = props.hsub;
    let content = props.content;
    let imgsrc = props.imgsrc;
    let ui =<div className='flex'>
        <div className='sideimg'><img src={imgsrc} alt="" /></div>
        <div className='content'>
            <h2>{heading}</h2>
            <h4>{subheading}</h4>
             {content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea nesciunt consequatur, quidem eveniet nisi, et, libero ut asperiores vitae minus laborum. Mollitia consectetur numquam voluptatibus debitis officiis. Aut, natus.</div>
    </div>
    if(right)
    {
        ui =<div className='flex'>
        
        <div className='content'>
            <h2>{heading}</h2>
            <h4>{subheading}</h4>
             {content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, omnis impedit unde perferendis vero maiores expedita consequuntur ad vel totam odio, dolorum cumque praesentium voluptatum velit voluptas doloremque, nisi non.</div>
        <div className='sideimg'><img src={imgsrc} alt="" /></div>
    </div>
    }
  return (
    <div>
    {ui}
    </div>
  )
}
