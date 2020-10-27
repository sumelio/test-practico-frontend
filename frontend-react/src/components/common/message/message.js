import React from "react";
import PropTypes from 'prop-types'

import "./style/message.scss";

const Message = ({ show, text}) => (
  <div className={`result ${show ? "result--show" : "result--hide"}`}>
    {text}
  </div>
);

Message.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string.isRequired
};

Message.defaultProps = {
  show: false
};

export default Message;
