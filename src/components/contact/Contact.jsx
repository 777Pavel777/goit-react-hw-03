import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p className={css.contactItem}>
          <FaUser className={css.iconUser} />
          {name}
        </p>
        <p className={css.contactItem}>
          <FaPhoneAlt className={css.iconUser} />
          {number}
        </p>
      </div>
      <div className={css.btnContainer}>
        <button onClick={() => onDelete(id)} className={css.btnDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
