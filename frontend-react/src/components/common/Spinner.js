import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSpinner = styled.div`
  margin: auto;

  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  margin: auto;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const Spinner = ({ size }) => {
  return <StyledSpinner size={size} />;
};

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
};
export default Spinner;
