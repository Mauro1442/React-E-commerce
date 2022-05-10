import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import { useParams } from "react-router-dom";
import { getByIdProductos, update } from "../Service/productosServices";

function ProductosModificar() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdProductos(id);
        setValue("name", response.data().name);
        setValue("price", response.data().price);
        setValue("sku", response.data().sku);

        setValue("description", response.data().description);
      } catch (e) {}
    };
    request();
  }, [id, setValue]);
  const onSubmit = async (data) => {
    console.log("Form", data);
    try {
      const document = await update(id, data);

      console.log("document", document);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async () => {
    const document = await firebase.db.doc("productos/" + id).delete();
  };
  return (
    <>
      <Button variant="danger" type="submit" onClick={handleDelete}>
        Eliminar
      </Button>
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
          label="sku"
          type="number"
          register={{ ...register("sku", { required: true }) }}
        />
        {errors.sku && <span>El campo es obligatorio</span>}
        <Input
          label="Descripcion"
          register={{ ...register("description", { required: true }) }}
        />
        {errors.descripcion && <span>El campo es obligatorio</span>}

        <Button variant="primary" type="submit">
          Modificar
        </Button>
      </Form>
    </>
  );
}

export default ProductosModificar;
