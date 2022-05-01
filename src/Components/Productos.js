import React, { useState, useEffect } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Service/productosServices";
import { Row } from "react-bootstrap";

function Productos() {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getAllProductos();
        setListadoProductos(response.data.results);
        setResponse(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, []);

  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <div>
        <h1>Listado de Productos</h1>
        <Row>
          {listadoProductos.map((listadoProducto) => (
            <Producto
              nombre={listadoProducto.title}
              thumbnail={listadoProducto.thumbnail}
              precio={listadoProducto.price}
              id={listadoProducto.id}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;
