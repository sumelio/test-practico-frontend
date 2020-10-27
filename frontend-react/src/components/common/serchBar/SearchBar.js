import React, {useRef, useEffect, useState, useCallback} from 'react';
import {withRouter} from 'react-router';
import { connect } from "react-redux";
import {
    getLoadingState
  } from "../../../redux/selectors/items";

import './style/SearchBar.scss';
import Logo from "../Logo";
import Button from "../Button";
import Input from "../Input";
import Spinner from '../Spinner';

const ic_search = require('../../../assets/ic_Search.png');

const SearchBar = (props) => {

    const searchInput = useRef('');
    const [searchInputValue, setSearchInputValue] = useState('');
    let searchParam = new URLSearchParams(props.location.search).get("search");

    const handleSearchSubmit = useCallback( e => {
        e.preventDefault();
        const [searchInput] = e.target.children;
        props.history.push({pathname: '/items', search:`search=${searchInput.value}`, state:searchInput.value});
    }, [])

    useEffect( () => {
        setSearchInputValue(searchParam);
        searchInput.current.focus()
    }, [] );

    return (
        <div className='container-fluid search-container'>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='row'>
                        <Logo />
                        <div className='col'>
                            <form className='input-group d-flex' onSubmit={handleSearchSubmit}>
                                <Input defaultValue={searchInputValue && searchInputValue !== '' ? searchInputValue : ''} reference={searchInput} placeholder="Nunca dejes de buscar" type='text' />
                                <Button classes='search-button' type='submit' alt='Buscar' content={
                                    props.isLoading ? <Spinner size={20}/>: <img src={ic_search} alt="Search"/>} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

  
  const mapStateToProps = (state) => ({
    isLoading: getLoadingState(state),
  });
  
  export default connect(mapStateToProps, {})(
    withRouter(SearchBar)
  );