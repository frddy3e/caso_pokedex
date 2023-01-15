import React from "react";
import PropTypes from "prop-types"

/**
 * Component that renders a title
 * @component
 * @example
 * const title = "My title";
 * return (
 * <Title title={title}/>
 * )
 */
const Title = (props) => {
    const {text} = props;
    return <h3 data-testid="title">{text}</h3>;
};

Title.defaultProps = {
    text: "Title"
};

Title.propTypes = {
    /**
     * The text to show in the title
     */
    text: PropTypes.string
};

export default Title;