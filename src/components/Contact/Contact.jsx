import css from "./Contact.module.css";
export default function Contact({ id, name, number, deleteContact }) {
  return (
    <li className={css.contact}>
      <span className={css.name}>{name}</span>
      <span className={css.number}>{number}</span>
      <button className={css.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
