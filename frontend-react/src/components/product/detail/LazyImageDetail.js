import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledResponsiveImage = styled.img`
  margin: auto;

  @media (max-width: 576px) {
    height: ${(props) => `${props.size * 0.3}px`};
    width: ${(props) => `${props.size * 0.3}px`};
  }

  @media (min-width: 576px) {
    height: ${(props) => `${props.size / 1.25}px`};
    width: ${(props) => `${props.size / 1.25}px`};
  }

  @media (min-width: 768px) {
    height: ${(props) => `${props.size * 0.7}px`};
    width: ${(props) => `${props.size * 0.7}px`};
  }

  @media (min-width: 992px) {
    height: ${(props) => `${props.size / 1.75}px`};
    width: ${(props) => `${props.size / 1.75}px`};
  }

  @media (min-width: 1200px) {
    height: ${(props) => `${props.size}px`};
    width: ${(props) => `${props.size}px`};
  }
`;

const LazyImageDetail = ({ size, src, alt, title }) => {


  return (
    <LazyLoad>
      <StyledResponsiveImage
        className="fluid-image"
        size={size}
        src={src}
        alt={alt}
        title={title}
      />
    </LazyLoad>
  );
};

LazyImageDetail.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  };

export default LazyImageDetail;
