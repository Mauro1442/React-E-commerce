import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //envio a firebase
    console.log("Form", data);
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("responseUser", responseUser.user.uid);
    } catch (e) {
      console.log(e);
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

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </>
  );
}

export default Login;
