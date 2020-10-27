import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledResponsiveImage = styled.img`
  margin: auto;
  border-radius: 4px;

  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
`;

const LazyImage = ({ size, src, alt, title, style }) => {
  return (
    <LazyLoad>
      <StyledResponsiveImage
        className="fluid-image"
        style={style}
        size={size}
        src={src}
        alt={alt}
        title={title}
      />
    </LazyLoad>
  );
};

LazyImage.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default LazyImage;
