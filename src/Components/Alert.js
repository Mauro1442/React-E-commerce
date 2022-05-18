import Alert from "react-bootstrap/Alert";

function AlertCustom(props) {
  const { text, variant } = props;
  return <Alert variant={variant}>{text}</Alert>;
}
export default AlertCustom;
