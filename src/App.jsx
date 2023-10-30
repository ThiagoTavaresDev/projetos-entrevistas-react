

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Pagamento} from './pages/Pagamento'
import { Confirmacao } from './pages/Confirmacao'




function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route> 
        <Route path='/Pagamento' element={<Pagamento/>}>
        </Route> 
        <Route path='/confirmacao' element={<Confirmacao />}>
        </Route> 
            
     
     </Routes>

    </>
  )
}

export default App
