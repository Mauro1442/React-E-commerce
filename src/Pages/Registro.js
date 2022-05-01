import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //envio a firebase
    console.log("Form", data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          register={{ ...register("nombre", { required: true }) }}
        />
        {errors.nombre && <span>El campo es obligatorio</span>}
        <Input
          label="Apellido"
          register={{ ...register("apellido", { required: true }) }}
        />
        {errors.apellido && <span>El campo es obligatorio</span>}
        <Input
          label="Email"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>El campo es obligatorio</span>}
        <Input
          label="Password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.password && <span>El campo es obligatorio</span>}

        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </>
  );
}

export default Registro;
