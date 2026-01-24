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
import EventHandling from "./components/EventHandling"
import StateEg1 from "./components/StateEg1"
import Calculator from "./components/Calculator"
export default function App() {
  return (
      <> 
      <Menubar></Menubar>
      <Routes>
        <Route path="StateEg1" element={<StateEg1></StateEg1>}>State eg1</Route>
        <Route path="/EventHandling" element={<EventHandling></EventHandling>}></Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/services" element={<Services></Services>}></Route>
    <Route path="/team" element={<TeamMembers></TeamMembers>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/calc" element={<Calculator></Calculator>}></Route>
      </Routes>
      <Footer></Footer>
  </>
  )
}

// export default App
