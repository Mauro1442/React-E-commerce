import Home from "../Pages/Home";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import Detalle from "../Pages/Detalle";
import NotFound from "../Pages/NotFound";
import ProductosAlta from "../Pages/ProductosAlta";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductosModificar from "../Pages/ProductosModificar";
function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/alta" element={<Registro />} />
      <Route path="/ingresar" element={<Login />} />
      <Route path="/productos/alta" element={<ProductosAlta />} />
      <Route path="/productos/modificar/:id" element={<ProductosModificar />} />
      <Route path="/producto/:id" element={<Detalle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Public;
