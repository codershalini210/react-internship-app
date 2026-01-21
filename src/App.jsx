import First from "./components/First"
import Welcome from "./components/Welcome"
import "./App.css"
import Menubar from "./components/Menubar"
import Teammember from "./components/Teammember"
import Services from "./components/Services"
import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import TeamMembers from "./components/TeamMembers"
export default function App() {
  return (
      <> 
      <Menubar></Menubar>
      <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/services" element={<Services></Services>}></Route>
    <Route path="/team" element={<TeamMembers></TeamMembers>}></Route>
      </Routes>
      <h2>Design and Developed by SR </h2>
  </>
  )
}

// export default App
