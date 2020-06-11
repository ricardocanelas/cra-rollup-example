import React from "react";
import PropTypes from "prop-types";

const Button = ({ small, children }) => {
  const styles = {
    fontSize: small ? 12 : 16,
  };

  return <button style={styles}>{children}</button>;
};

Button.displayName = "Button";
Button.defaultProps = {
  children: null,
  small: false,
};
Button.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
};

export default Button;
