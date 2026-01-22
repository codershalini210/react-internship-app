import First from "./components/First"
import Welcome from "./components/Welcome"
import "./App.css"
import Menubar from "./components/Menubar"
import Teammember from "./components/Teammember"
import Services from "./components/Services"
import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import TeamMembers from "./components/TeamMembers"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
export default function App() {
  return (
      <> 
      <Menubar></Menubar>
      <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/services" element={<Services></Services>}></Route>
    <Route path="/team" element={<TeamMembers></TeamMembers>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
  </>
  )
}

// export default App
