import Sidebar from './Sidebar'
import Header from './Header'
import Home from './Home'
import './App.css'


function App() {
 

  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="content">
      <Header/>
      <Home/>
      </div>

    </div>
  )
}

export default App
