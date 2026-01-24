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
import { useState } from "react"
export default function App() {
  //
  const [colorname,setcolorname] = useState("black")
  const [fontcolor,setfontcolor] = useState("white")
  let  changeTheme=(bgcolor,color)=>
  {
    setcolorname(bgcolor)
    setfontcolor(color)

  }
  return (
      <> 
      <div style={{textAlign:'right',backgroundColor:colorname}}>
        <input type="button"
         style={{height:'30px',width:'30px',backgroundColor:'black',color:'white'}} 
          value="A"
          onClick={()=>changeTheme('black','white')}/>
          
          <input type="button"  onClick={()=>changeTheme('yellow','black')}
         style={{height:'30px',width:'30px',backgroundColor:'yellow',color:'black'}} 
          value="A"/>

          <input type="button"
           onClick={()=>changeTheme('blue','white')}
         style={{height:'30px',width:'30px',backgroundColor:'blue',color:'white'}} 
          value="A"/>

          <input type="button"
           onClick={()=>changeTheme('yellowgreen','black')}
         style={{height:'30px',width:'30px',backgroundColor:'yellowgreen',color:'black'}} 
          value="A"/>
      </div>
      <Menubar bgcolor={colorname} fontcolor={fontcolor}></Menubar>
      <div style={{color:fontcolor,backgroundColor:colorname}}>
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
      </div>
  </>
  )
}

// export default App
