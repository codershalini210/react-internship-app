
import { Link } from "react-router-dom"
export default function Menubar() {
  return (
    <>
    
 <ul className="menu-bar">
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/services">Services</Link></li>
    <li> <Link to="/team">Team</Link></li>
    <li> <Link to="/contact">Contact</Link></li>
 </ul>
    </>
  )
}
