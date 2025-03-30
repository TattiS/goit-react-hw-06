import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { createAction } from "@reduxjs/toolkit";

function Contact({ contactInfo }) {
  const deleteContactAF = createAction("contacts/deleteContact");
  const dispatch = useDispatch();

  return (
    <li className={css.containerContact}>
      <div className={css.infoContainer}>
        <div className={css.fieldWrapper}>
          <svg width={20} height={20}>
            <use href="/src/img/sprite.svg#icon-user"></use>
          </svg>
          <p className={css.txtUsername}>{contactInfo.name}</p>
        </div>
        <div className={css.fieldWrapper}>
          <svg width={20} height={20}>
            <use href="/src/img/sprite.svg#icon-phone"></use>
          </svg>
          <p className={css.txtPhone}>{contactInfo.number}</p>
        </div>
      </div>
      <button
        className={css.btnDelete}
        onClick={() => {
          dispatch(deleteContactAF(contactInfo.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
