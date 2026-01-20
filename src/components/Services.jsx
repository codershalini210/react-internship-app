import React from 'react'
import Service from './Service';
export default function Services() {
    let servicesary = [
  {
    id: 1,
    name: "Web Development",
    description: "Design and development of responsive, fast, and secure websites using modern technologies.",
    projectdone: "120+"
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications for Android and iOS platforms.",
    projectdone: "85+"
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "User-centric interface and experience design focused on usability and visual appeal.",
    projectdone: "95+"
  },
  {
    id: 4,
    name: "E-Commerce Solutions",
    description: "Custom e-commerce platforms with secure payment gateways and scalable architecture.",
    projectdone: "60+"
  },
  {
    id: 5,
    name: "Cloud Services",
    description: "Cloud setup, migration, and maintenance for scalable and cost-effective infrastructure.",
    projectdone: "40+"
  },
  {
    id: 6,
    name: "Digital Marketing",
    description: "SEO, social media marketing, and online branding to boost digital presence.",
    projectdone: "110+"
  },
  {
    id: 7,
    name: "Software Testing & QA",
    description: "Manual and automated testing to ensure high-quality, bug-free software delivery.",
    projectdone: "75+"
  },
  {
    id: 8,
    name: "Enterprise Software Development",
    description: "Robust enterprise-level applications tailored to business needs.",
    projectdone: "30+"
  },
  {
    id: 9,
    name: "API Development & Integration",
    description: "Secure and scalable APIs for seamless system integration and data exchange.",
    projectdone: "65+"
  },
  {
    id: 10,
    name: "IT Consulting",
    description: "Expert guidance to help businesses choose the right technology solutions.",
    projectdone: "50+"
  }
];
let ServicesUI = servicesary.map((s)=>
{
    return <Service name={s.name} desc={s.description} pdone={s.projectdone}></Service>
})
  return (
    <div>
        <h1>Services</h1>
        <div className='services'>
        {ServicesUI}
        </div>

    </div>
  )
}
