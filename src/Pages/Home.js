import React, { Component } from "react";
import Productos from "../Components/Productos";
import firebase from "../Config/firebase";

function Home() {
  console.log("firebase", firebase);
  return (
    <div>
      <div>
        <Productos />
      </div>
    </div>
  );
}

export default Home;
