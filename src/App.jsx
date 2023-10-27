

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Pagamento } from './pages/Pagamento'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route> 
        <Route path='/Pagamento' element={<Pagamento/>}>
        </Route> 
      
     
     </Routes>
    
    </>
  )
}

export default App
