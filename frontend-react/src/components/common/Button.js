import React from 'react';

import styled from "styled-components";

const StyleButton = styled.button`
  width: 53.59px;
  height: 44.59px;
  
`
const Button = ({classes='', type='', alt='', content=''}) => (
        <StyleButton className={classes} type={type} alt={alt}>
            {content}
        </StyleButton>
    )

export default Button;