import PropTypes from "prop-types";

import css from '../FeedbackOptions/FeedbackOptions.module.css';


const Button = ({ children, onClick, type }) => {
  return <button onClick={onClick} className={css.btn} type={type}>{children}</button>
}

export default Button;