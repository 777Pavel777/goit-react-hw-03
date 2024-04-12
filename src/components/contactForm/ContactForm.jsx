import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(8, 'Too short!')
    .max(50, 'Too long!')
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
      initialValues={{ id: nanoid(), name: '', number: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.formVlaue}>
          <label className={css.textItem}>Name</label>
          <Field className={css.contactItem} name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formVlaue}>
          <label className={css.textItem}>Number</label>
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
