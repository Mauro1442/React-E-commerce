import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByIdProductos } from "../Service/productosServices";
import { Button } from "react-bootstrap";

const estiloDetalle = {
  img: {
    width: "400px",
  },
};
function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getByIdProductos(id);
        setProducto(response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, [id]);
  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <div>
        <h1>{producto.data().name}</h1>
        <p>sku: {producto.data().sku}</p>
        <p>Descripcion: {producto.data().description}</p>
        <p>Precio: {producto.data().price}</p>{" "}
        <Button variant="primary">Comprar</Button>
        <div>
          {false &&
            producto.pictures.map((picture) => (
              <img src={picture.url} style={estiloDetalle.img}></img>
            ))}
        </div>
      </div>
    );
  }
}

export default Detalle;
