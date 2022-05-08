import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("Form", data);
    try {
      const document = await firebase.firestore().collection("productos").add({
        name: data.name,
        price: data.price,
        description: data.description,
      });
      console.log("document", document);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.nombre && <span>El campo es obligatorio</span>}
        <Input
          label="Precio"
          type="number"
          register={{ ...register("price", { required: true }) }}
        />
        {errors.precio && <span>El campo es obligatorio</span>}
        <Input
          label="Descripcion"
          register={{ ...register("description", { required: true }) }}
        />
        {errors.descripcion && <span>El campo es obligatorio</span>}

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
}

export default ProductosAlta;
