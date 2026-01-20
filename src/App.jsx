import First from "./components/First"
import Welcome from "./components/Welcome"
import "./App.css"
import Menubar from "./components/Menubar"
import Teammember from "./components/Teammember"
export default function App() {
  return (
      <>
      <Menubar></Menubar>
      <div className="team-members">
      <Teammember mname="John" mimg="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
       designation="Software Developer"></Teammember>
      <Teammember mname="Ron" mimg="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
       designation="Software Tester"></Teammember>
      <Teammember mname="Maria" mimg="https://c8.alamy.com/comp/2PYYR6T/business-woman-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-business-leader-vector-illustration-2PYYR6T.jpg"
      designation="HR"></Teammember>
      
      </div>
  </>
  )
}

// export default App
