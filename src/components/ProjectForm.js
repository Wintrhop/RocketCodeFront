import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import styles from "../styles/components/ProjectForm.module.scss";

const ProjectForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      try {
        const username = form.name.value;
        const pValue = form.projectValue.value;
        const pDepartment = form.proectDepartment.value;
        const city = form.city.value;

        const user = {
          username,
          pValue,
          pDepartment,
          city,
        };

        // const { data } = await axios.post(
        //   `${process.env.NEXT_PUBLIC_INVENTORY_BACK_API}/auth/local/logIn`,
        //   user
        // );
        console.log("datos", user);
        Swal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          icon: "success",
          title: "Proyecto Creado",
        });
        form.name.value ="";
        form.projectValue.value="";
        form.proectDepartment.value="";
        form.city.value="";
        setValidated(false);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error al crear el proyecto",
          icon: "error",
          confirmButtonText: "Perfecto",
        });
      }
    }
  };
  return (
    <div className={styles.container}>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <FloatingLabel label="Nombre del Cliente" className="mb-4">
            <Form.Control
              required
              id="name"
              type="text"
              placeholder="Pedro Garcia"
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un nombre
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel label="Valor del Proyecto" className="mb-4">
            <Form.Control
              required
              id="projectValue"
              type="number"
              placeholder="1.000"
              
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar una Cantidad
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel label="Departamento del Proyecto" className="mb-4">
            <Form.Control
              required
              id="proectDepartment"
              type="text"
              placeholder="Department"
              
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un departamento del proyecto
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel label="Ciudad" className="mb-4">
            <Form.Control
              required
              id="city"
              type="text"
              placeholder="city"
              
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar una Ciudad
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button className={styles.signInBtn} variant="primary" type="submit">
          Crear Projecto
        </Button>
      </Form>
    </div>
  );
};

export default ProjectForm;
