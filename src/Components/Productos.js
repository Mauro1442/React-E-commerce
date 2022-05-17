import React, { useState, useEffect } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Service/productosServices";
import { Row } from "react-bootstrap";
import Loading from "./Loading";

function Productos() {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getAllProductos();
        setListadoProductos(response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div>
      <h1>Camaras</h1>
      <Loading loading={loading}>
        {loading && <div>Cargando ...</div>}

        <Row>
          {listadoProductos.map((listadoProducto) => (
            <Producto
              key={listadoProducto.id}
              nombre={listadoProducto.data().name}
              thumbnail={listadoProducto.data().thumbnail}
              precio={listadoProducto.data().price}
              sku={listadoProducto.data().sku}
              id={listadoProducto.id}
            />
          ))}
        </Row>
      </Loading>{" "}
    </div>
  );
}

export default Productos;
