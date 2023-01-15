import React from "react";
import ButtonStyle from "./button.module.css";
import PropTypes from "prop-types";
/**
 * The component renders a button. The button have a text, an Icon and can be disabled or enabled
 * @component
 * @example
 * const text = "Guardar";
 * const icon = <AiOutlineSave size={20} className={ButtonStyle.icon}/>;
 * const disabled = false;
 * const onClick = () => {};
 * return (
 * <Button text={text} icon={icon} disabled={disabled} onClick={onClick}/>
 * )
 */
const Button = (props) => {
  const { text, icon, disabled, onClick } = props;
  return (
    <div
      data-testid="button"
      onClick={!disabled ? onClick : () => {}}
      className={disabled ? ButtonStyle.myButtonDisabled : ButtonStyle.myButton}
    >
      {icon}
      {text}
    </div>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  /**
   * The text to show in the button
   */
  text: PropTypes.object,
  /**
   * The icon to show in the button
   */
  icon: PropTypes.object,
  /**
   * The function to call when the user clicks on the button
   */
  onClick: PropTypes.func,
  /**
   * The flag to indicate if the button is disabled or not
   */
  disabled: PropTypes.bool,
};

export default Button;
