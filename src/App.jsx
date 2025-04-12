
import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Add from './components/Add'
const App = () => {
  return (
  
    <Router>
<div className='App'>
  <Header />

<Routes>
  <Route path='/' element ={<Home />} />
  <Route path='/Add' element ={<Add />} />
  

</Routes>
  
</div>
    </Router>
  
  
  )
}

export default App