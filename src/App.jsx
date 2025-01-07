import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { ContactPage } from './pages/ContactPage'
import { NoPage } from './pages/NoPage'
import { LoginPage } from './pages/LoginPage'
// import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { ProductPage } from './pages/ProductPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            {/* <Route path='/productDetails' element={<ProductDetailsPage />}/> */}
            <Route path='/products' element={<ProductPage />}/>
            <Route path='/*' element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
