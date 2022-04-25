import { Link } from "react-router-dom";
const estilo = {
  img: {
    width: "80px",
  },
};
function Producto(props) {
  console.log("Props", props);
  const { nombre, precio, descripcion, thumbnail, children, id } = props;
  return (
    <>
      <div>
        <p>Nombre: {nombre}</p>
        <img src={thumbnail} style={estilo.img}></img>
        <p>Precio: {precio}</p>
        {children}
        <button>Comprar</button>
        <Link to={"/producto/" + id}>Ver Detalle</Link>
      </div>
    </>
  );
}
export default Producto;
