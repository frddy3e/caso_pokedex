import React from "react";
import Style from "./slider.module.css";
import PropTypes from "prop-types";

/**
 * This componet allows to render a slider to pick a value between a min and a max value.
 * @component
 */
const Slider = (props) => {
  const { id, label, value, onChange, type, error, minValue, maxValue } = props;
  return (
    <div data-testid="slider" className={Style.sliderAll}>
      <label htmlFor={id}>{label}</label>
      <p>{minValue}</p>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        min={minValue}
        max={maxValue}
        className={Style.slider}
        data-testid="slider-input"
      />
      {error && <span data-testid="slider-error">{error}</span>}
      <p>{maxValue}</p>
    </div>
  );
};

Slider.propTypes = {
  /**
   * The id of the input
   * @type {string}
   * @required
   * @example
   * const id = "name";
   * return (
   * <Slider id={id} />
   * )
   * */
  id: PropTypes.string,
  /**
   * The label to show in the input
   * @type {string}
   * @required
   * @example
   * const label = "Name";
   * return (
   * <Slider label={label} />
   * )
   * */
  label: PropTypes.string,
};

export default Slider;
