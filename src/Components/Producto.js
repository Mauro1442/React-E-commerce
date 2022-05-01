import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
const styles = {
  card: {
    width: "18rem",
    minHeight: "300px",
    marginBottom: "20px",
  },
  img: {
    width: "100px",
  },
};

function Producto(props) {
  console.log("Props", props);
  const { nombre, precio, descripcion, thumbnail, children, id } = props;
  return (
    <>
      <Col>
        <Card style={styles.card}>
          <Card.Img variant="top" src={thumbnail} style={styles.img} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio} </Card.Text>
            <Button variant="primary" as={Link} to={"/producto/" + id}>
              Ver detalle
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default Producto;
