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
        setListadoProductos(response);
        setResponse(response);
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
        <h1>Camaras</h1>
        <Row>
          {listadoProductos.map((listadoProducto) => (
            <Producto
              nombre={listadoProducto.data().name}
              thumbnail={listadoProducto.data().thumbnail}
              precio={listadoProducto.data().price}
              sku={listadoProducto.data().sku}
              id={listadoProducto.id}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;
