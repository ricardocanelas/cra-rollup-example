import React from "react";
import PropTypes from "prop-types";
import RButton from "react-bootstrap/Button";

import variables from "../assets/scss/_variable.scss";

const Button = ({ small, children }) => {
  const styles = {
    fontSize: small ? 12 : 16,
  };

  return (
    <React.Fragment>
      <RButton style={styles}>{children}</RButton>
      <pre>{JSON.stringify(variables, null, 2)}</pre>
    </React.Fragment>
  );
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
