import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format "111-22-22"')
    .required('Required!'),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (value, actions) => {
    onAdd(value);
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.formValue}>
          <label htmlFor={nameId} className={css.textItem}>
            Name
          </label>
          <Field className={css.contactItem} name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formValue}>
          <label htmlFor={numberId} className={css.textItem}>
            Number
          </label>
          <Field className={css.contactItem} name="number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.buttonContainer}>
          <button className={css.contactButton} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
