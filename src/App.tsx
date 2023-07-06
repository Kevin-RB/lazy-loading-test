import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import { lazy } from 'react'

//lazy loading routes
const ContentPage = lazy(() => import('./pages/Content'))



function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='content' element={<ContentPage />} />
      </Routes>
    </Layout>
  )
}

export default App
