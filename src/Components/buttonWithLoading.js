import React from "react";
import { Button, Spinner } from "react-bootstrap";
// 50.20
function ButtonWithLoading(props) {
  const { variant, type, loading } = props;
  return (
    <Button
      type={type || "submit"}
      variat={variant || "primary"}
      disabled={loading}
    >
      {loading && <Spinner animation="border" size="sm" />}
      {props.children}
    </Button>
  );
}

export default ButtonWithLoading;
