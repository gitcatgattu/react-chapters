import './App.css'
import ClockHeading from './components/ClockHeading' 
import ClockSlogan from './components/ClockSlogan' 
import CurrentTime from './components/CurrentTime' 
function App() {
console.log('app component printed')
  return (
    <center>
   <ClockHeading/>
   <ClockSlogan />
   <CurrentTime></CurrentTime>
    
    </center>

  )
}

export default App
