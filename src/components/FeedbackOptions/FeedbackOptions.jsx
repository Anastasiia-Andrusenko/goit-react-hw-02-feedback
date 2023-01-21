import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
// import Button from "components/Button/Button";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
    return <>
        <ul className={css.btn_list}>
          <li className={css.item}>
            <button
              name={options[0]}
              onClick={onLeaveFeedback}
              className={classNames(css.btn, css.good)}
              type="button">
                {options[0]}
            </button>
          </li>
          <li className={css.item}>
            <button
              name={options[1]}
              onClick={onLeaveFeedback}
              className={classNames(css.btn, css.ntrl)}>
                {options[1]}
            </button>
          </li>
          <li className={css.item}>
            <button
              name={options[2]}
              onClick={onLeaveFeedback}
              className={classNames(css.btn, css.bad)}>
                {options[2]}
            </button>
          </li>
        </ul>
    </>
}

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return <ul className={css.btn_list}>
//     {options.map((option) => <li key={option}>
//       <Button
//         onclick={() => onLeaveFeedback()}
//         type="button"
//         name={option}>
//         {option}
//       </Button>
//     </li>
//     )}
//   </ul>
// }

export default FeedbackOptions;