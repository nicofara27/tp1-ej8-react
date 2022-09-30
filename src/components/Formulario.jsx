import { Form, Button, Container } from "react-bootstrap";

const Formulario = () => {
  return (
    <section className="fondo py-4 px-4 rounded-4 border border-2 shadow">
      <Form className="fs-3">
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="nombre" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="Apellido" placeholder="Ingrese su apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDni">
          <Form.Label>Dni</Form.Label>
          <Form.Control type="dni" placeholder="Ingrese su dni" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <div className="text-center mt-4">
        <Button className="w-50 mt-3 mb-1 py-2 fs-3 rounded-pill border border-2 border-white" variant="dark" type="submit">
          Enviar
        </Button>
        </div>
      </Form>
    </section>
  );
};

export default Formulario;
