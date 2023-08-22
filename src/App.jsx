import {Routes, Route } from 'react-router-dom'
import Frontend from './components/layout/frontend'
import Backend from './components/layout/Backend'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Frontend />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/admin' element={<Backend />} >
          <Route index element={<Dashboard/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
