
import { Link } from "react-router-dom"
export default function Menubar(props) {
  return (
    <>
    
 <ul className="menu-bar" style={{color:props.fontcolor,backgroundColor:props.bgcolor}}>
    <li><Link to="/" style={{color:props.fontcolor}}>Home</Link> </li>
    <li> <Link to="/services" style={{color:props.fontcolor}}>Services</Link></li>
    <li> <Link to="/team" style={{color:props.fontcolor}}>Team</Link></li>
    <li> <Link to="/contact" style={{color:props.fontcolor}}>Contact</Link></li>
    <li><Link to="/EventHandling" style={{color:props.fontcolor}}>Event EG</Link></li>
    <li> <Link to="/stateeg1" style={{color:props.fontcolor}}>State eg1</Link></li>
    <li> <Link to="/calc" style={{color:props.fontcolor}}>Calculator</Link></li>
 </ul>
    </>
  )
}
