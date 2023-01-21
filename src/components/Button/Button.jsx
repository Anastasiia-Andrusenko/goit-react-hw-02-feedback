import PropTypes from "prop-types";

import css from '../FeedbackOptions/FeedbackOptions.module.css';


const Button = ({ children, onLeaveFeedback, type }) => {
  return <button onClick={onLeaveFeedback} className={css.btn} type={type}>{children}</button>
}

export default Button;


Button.propTypes = {
  children: PropTypes.element.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  type: PropTypes.string,
}