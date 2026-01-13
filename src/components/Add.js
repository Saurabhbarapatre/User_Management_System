import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("First name required"),

  lastName: Yup.string().required("Last name required"),

  email: Yup.string().email("Invalid email").required("Email required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone required"),

  role: Yup.string().required("Role required"),
});

const Add = ({ item }) => {
  return (
    <div className="modal">
      <div className="box">
        <div className="list-1">
          <button className="cross-1" onClick={() => item()}>
            ✖
          </button>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              role: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              await fetch("https://dummyjson.com/users/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              alert("User Added ✅");
              resetForm();
              item();
            }}
          >
            {({ errors, touched }) => (
              <Form className="formik-box">
                <label>First Name</label>
                <Field name="firstName" className="field" />
                {touched.firstName && errors.firstName && (
                  <div className="error">{errors.firstName}</div>
                )}

                <label>Last Name</label>
                <Field name="lastName" className="field" />
                {touched.lastName && errors.lastName && (
                  <div className="error">{errors.lastName}</div>
                )}

                <label>Email</label>
                <Field name="email" className="field" />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}

                <label>Phone</label>
                <Field name="phone" className="field" />
                {touched.phone && errors.phone && (
                  <div className="error">{errors.phone}</div>
                )}

                <label>Role</label>
                <Field as="select" name="role" className="field">
                  <option value="">Select</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </Field>
                {touched.role && errors.role && (
                  <div className="error">{errors.role}</div>
                )}

                <br />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Add;
