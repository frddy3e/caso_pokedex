import React from "react";
import PropTypes from "prop-types";
import Styles from "./inputTextIcon.module.css";
/**
 * A component to render a text input
 * @component
 * @example
 * const id = "name";
 * const label = "Name";
 * const value = "Bulbasaur";
 * const onChange = () => {};
 * const icon = <i className="fas fa-search"></i>;
 * const placeholder = "Search";
 * return (
 * <InputText id={id} label={label} value={value} onChange={onChange} />
 * )
 */
const InputTextIcon = (props) => {
  const { id, value, onChange, type, error, icon, placeholder } = props;
  return (
    <div data-testid="input-text-icon" className={Styles.inputTextIcon}>
      {icon}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={Styles.inputText}
        data-testid="input-text-input-icon"
      />
      {error && <span data-testid="input-text-icon-error">{error}</span>}
    </div>
  );
};

InputTextIcon.defaultProps = {
  type: "text",
};

InputTextIcon.propTypes = {
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
  error: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputTextIcon;
