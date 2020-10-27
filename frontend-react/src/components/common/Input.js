import React from 'react';

const Input = ({reference='', defaultValue='', placeholder='', type=''}) =>  (
        <input
            ref={reference}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={type}
        />
    )

export default Input;