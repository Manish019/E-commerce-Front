
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './Pages/Home/Index'

function App() {

  return (
<>
<BrowserRouter>
<Header /> 
<Routes>
  <Route path='/' exact={true} element={<Home />} />
</Routes>
</BrowserRouter>

</>


  )

}


export default App
