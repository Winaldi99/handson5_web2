import './App.css'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Jobs from './pages/Jobs'

function App() {
  const router = createBrowserRouter(
    createRouterFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}>
        <Route path="product" element={<Product/>}>
        <Route path="contact" element={<Contact/>}>
        <Route path="jobs" element={<Jobs/>}>
      </Route>
    )
  )
  return (
    <>
      <RootProvider router={router}/>
    </>
  )
}

export default App
