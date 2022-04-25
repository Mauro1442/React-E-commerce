import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";

function Login() {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
