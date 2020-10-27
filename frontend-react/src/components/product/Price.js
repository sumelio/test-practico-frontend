import React from 'react';
import {formatNumber} from "../../Helper";

const ic_shipping = require('../../assets/ic_shipping.png');

const Price = ({amount, decimals, showDecimal, free_shipping}) => 
        <div className='price'>
            <span className='price__amount'>{`$ ${formatNumber(amount)}`}</span>
            <span className='price__decimals'> {`${showDecimal ? ( decimals || '00') : ''}`}</span>
            {free_shipping &&
            <span className='price__shipping'>
                <img src={ic_shipping} alt="Envío Gratis" title="Envío Gratis"/>
            </span>
            }
        </div>

export default Price;