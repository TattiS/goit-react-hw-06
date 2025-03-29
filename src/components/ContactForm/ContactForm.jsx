import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

function ContactForm({ onAdd }) {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const initInfo = { name: "", number: "" };
  const validScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Check the format: 333-33-33")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const submitHandler = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    actions.resetForm({
      values: {
        name: "",
        number: "",
      },
    });
  };
  return (
    <Formik
      initialValues={initInfo}
      onSubmit={submitHandler}
      validationSchema={validScheme}
    >
      <Form className={css.contactFormContainer}>
        <label htmlFor={nameInputId} className={css.contactLabel}>
          Name
        </label>
        <Field
          className={css.contactInput}
          type="text"
          name="name"
          id={nameInputId}
        />
        <ErrorMessage className={css.errorMsg} name="name" component="span" />
        <label htmlFor={numberInputId} className={css.contactLabel}>
          Number
        </label>
        <Field
          className={css.contactInput}
          type="tel"
          name="number"
          id={numberInputId}
        />
        <ErrorMessage className={css.errorMsg} name="number" component="span" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
