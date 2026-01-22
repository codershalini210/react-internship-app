import React from 'react'
import Girl from "../assets/Girlbanner.webp"
import i1 from "../assets/img1.jfif"
import i2 from "../assets/img2.jfif"
import i3 from "../assets/img3.jfif"
import i4 from "../assets/img4.jfif"
import HomeParts from './HomeParts'
export default function Home() {
  let sections = [
  {
    heading: "Who We Are",
    subheading: "Building digital experiences",
    content:
      "We are a team of passionate developers and designers focused on creating scalable, user-friendly digital solutions.",
    imgsrc: i1
  },
  {
    heading: "Our Services",
    subheading: "What we offer",
    content:
      "From web development to data analytics, we provide end-to-end solutions tailored to business needs.",
    imgsrc: i2
  },
  {
    heading: "Our Process",
    subheading: "How we work",
    content:
      "We follow a structured approach—planning, designing, developing, testing, and delivering high-quality products.",
    imgsrc: i3
  },
  {
    heading: "Why Choose Us",
    subheading: "What makes us different",
    content:
      "We focus on quality, timely delivery, and long-term support to help businesses grow with confidence.",
    imgsrc: i4
  }
];
let sectionsUI = sections.map((s,index)=>
{
  let r = false
  if((index+1)%2 ==0)
  {
r= true;
  }
    return <HomeParts setright={r} hmain={s.heading} hsub={s.subheading}
  content={s.content} imgsrc={s.imgsrc}></HomeParts>
})

  return (
    <>
  <div>
    <div className='header-bg'>
<h1>Name of Company</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo assumenda dignissimos distinctio sequi similique sit aut nemo nulla molestias expedita in ipsam, suscipit tempore, enim quaerat delectus? Praesentium, optio dolores.</p>
    </div>
    {sectionsUI}
    </div>
    </>
  )







}
