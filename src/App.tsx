import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contactinfo from "./components/ContactInfo";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Product from "./pages/Product";
import ContactForm from "./components/ContactForm";
import ContactLayout from "./layouts/ContactLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="Contact" element={<ContactLayout/>}>
          <Route path="info" element={<Contactinfo />}></Route>
          <Route path="form" element={<ContactForm />}></Route>
        </Route>
        <Route path="jobs" element={<Jobs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;