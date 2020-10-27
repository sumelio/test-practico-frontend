import React from 'react';
import {Link} from "react-router-dom";

const logo_ml = require('../../assets/Logo_ML.png');

const Logo = () => (
        <div className='col-sm-auto align-self-center text-center'>
            <Link to='/'>
                <img className='logo' alt="Mercado Libre" src={logo_ml}/>
            </Link>
        </div>
    )
export default Logo;