import { Form, Button } from "react-bootstrap";

const Formulario = () => {

    const validar = (e) => {
        e.preventDefault();
        let form = document.getElementById("form")
        let nombre = document.getElementById("formBasicNombre")
        let apellido = document.getElementById("formBasicApellido")
        let dni = document.getElementById("formBasicDni")
        let email = document.getElementById("formBasicEmail")
        nombre.value != "" && apellido.value != "" && dni.value != "" && email.value != "" ? (
          alert("Datos enviados")
        ) : (
          alert("Completar todos los datos")
        )
        form.reset();
    }

  return (
    <section className="fondo py-4 px-4 rounded-4 border border-2 shadow">
      <Form id="form" className="fs-3" onSubmit={validar}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" minLength={3} maxLength={25}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control  type="text" placeholder="Ingrese su apellido" minLength={2} maxLength={25}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDni">
          <Form.Label>Dni</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su dni" min={800000} max={99999999}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control  type="email" placeholder="Ingrese su email"/>
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
