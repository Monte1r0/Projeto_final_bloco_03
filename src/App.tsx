import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias"
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria"
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria"



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              {/* <Route path="/produtos" element={<ListaProdutos />} /> */}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
