import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={s.item} key={id}>
            {name}: &nbsp;{number}
            <button
              className={s.deleteButton}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
