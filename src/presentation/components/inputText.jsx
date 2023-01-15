import React from "react";
import PropTypes from "prop-types";
import Styles from "./inputText.module.css";
/**
 * A component to render a text input
 * @component
 * @example
 * const id = "name";
 * const label = "Name";
 * const value = "Bulbasaur";
 * const onChange = () => {};
 * return (
 * <InputText
 * id={id}
 * label={label}
 * value={value}
 * onChange={onChange}
 * type="text"
 * error="Error"
 * />
 * )
 */
const InputText = (props) => {
  const { id, label, value, onChange, type, error } = props;
  return (
    <div data-testid="input-text">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={Styles.inputText}
        data-testid="input-text-input"
      />
      {error && <span data-testid="input-text-error">{error}</span>}
    </div>
  );
};

InputText.propTypes = {
  /**
   * The id of the input
   */
  id: PropTypes.string,
  /**
   * The label to show in the input
   */
  label: PropTypes.string,
  /**
   * The value of the input
   */
  value: PropTypes.string,
  /**
   * The function to call when the user changes the value of the input
   */
  onChange: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default InputText;
