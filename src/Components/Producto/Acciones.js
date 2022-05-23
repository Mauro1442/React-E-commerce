import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import AuthContext from "../../Context/AuthContext";

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

function Acciones(props) {
  console.log("Props", props);
  const { id } = props;
  return (
    <>
      <AuthContext.Consumer>
        {(context) => (
          <>
            <Button variant="primary" as={Link} to={"/producto/" + id}>
              Ver detalle
            </Button>
            <br></br>
            {context.userLogin && (
              <Button
                variant="danger"
                as={Link}
                to={"/productos/modificar/" + id}
              >
                Modificar
              </Button>
            )}
          </>
        )}
      </AuthContext.Consumer>
    </>
  );
}
export default Acciones;
