import useForm from "lab3/hooks/useForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormComponent() {
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
    email: "",
    password: "",
    checkbox: false,
  });

  const submitForm = () => {
    console.log("Form submitted:", values);
    // Reset form values after submission
    alert("Login successful");
    resetForm();
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e, submitForm)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter email"
          isInvalid={!!errors.email} // Bootstrap validation class
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          {"We'll never share your email with anyone else."}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="checkbox"
          checked={values.checkbox}
          onChange={handleChange}
          label="Check me out"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;
