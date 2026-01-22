import React from 'react'
import HomeParts from './HomeParts'
import imgcontact from "../assets/contactbg.jfif"
export default function  Contact() {
    let formcontent = 
<form className="contact-form">
  <div className="form-group">
    <label>Name</label>
    <input type="text" placeholder="Enter your name" required />
  </div>

  <div className="form-group">
    <label>Email</label>
    <input type="email" placeholder="Enter your email" required />
  </div>

  <div className="form-group">
    <label>Contact No</label>
    <input type="tel" placeholder="Enter your contact number" required />
  </div>

  <div className="form-group">
    <label>Message</label>
    <textarea rows="4" placeholder="Enter your message" required></textarea>
  </div>

  <div className="form-actions">
    <button type="submit">Submit</button>
    <button type="reset">Cancel</button>
  </div>
</form>
;

  return (
    <div className='flex'>
        
        <HomeParts setright={false} hmain="Contact US"
        hsub="feel free to contact " content={formcontent}
        imgsrc={imgcontact}></HomeParts>
    </div>
  )
}
