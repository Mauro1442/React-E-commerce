import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByIdProductos } from "../Service/productosServices";

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
        <p>Nombre: {producto.data().name}</p>
        <p>Precio: {producto.data().price}</p>
        <p>Descripcion: {producto.data().description}</p>

        <button>Comprar</button>
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
