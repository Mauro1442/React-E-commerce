import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/buttonWithLoading";
import AlertCustom from "../Components/Alert";
import { loginMessage } from "../Utils/errorMessage";
// 27.00
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const onSubmit = async (data) => {
    //envio a firebase
    setLoading(true);
    console.log("Form", data);
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("responseUser", responseUser.user.uid);
      setLoading(false);
      setAlert({ variant: "success", text: "Bienvenido" });
    } catch (e) {
      console.log(e);
      setLoading(false);

      setAlert({ variant: "danger", text: loginMessage[e.code] });
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>El campo es obligatorio</span>}
        <Input
          label="Password"
          type="password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.password && <span>El campo es obligatorio</span>}

        <ButtonWithLoading loading={loading}>Ingresar</ButtonWithLoading>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Form>
    </>
  );
}

export default Login;
