import Contact from '../contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.containerCards}>
        {contacts.map(contact => (
          <li className={css.userCard} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
