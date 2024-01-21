import { Form, Card, CardBody, FormLabel, Button, FormGroup, FormControl } from "react-bootstrap";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
  alert(`
        Nama : ${values.username}
        Email : ${values.email}
        Password : ${values.password}
      `);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function Index() {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <Card className="w-50">
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-4">
            <FormLabel htmlFor="form_username">Username</FormLabel>
            <FormControl value={values.username} onChange={handleChange} name="username" type="text" placeholder="Enter your name" onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} />
            {errors.username && touched.username && <p>{errors.username}</p>}
          </FormGroup>

          <FormGroup className="mb-4">
            <FormLabel htmlFor="form_email">Email</FormLabel>
            <FormControl value={values.email} onChange={handleChange} name="email" type="email" placeholder="Enter your email" onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </FormGroup>

          <FormGroup className="mb-4">
            <FormLabel htmlFor="form_password">Password</FormLabel>
            <FormControl value={values.password} onChange={handleChange} name="password" type="password" placeholder="Enter your password" onBlur={handleBlur} className={errors.password && touched.password ? "input-error" : ""} />
            {errors.password && touched.password && <p>{errors.password}</p>}
          </FormGroup>
        </Form>

        <Button disabled={isSubmitting} type="submit">
          Login
        </Button>
      </CardBody>
    </Card>
  );
}

export default Index;
