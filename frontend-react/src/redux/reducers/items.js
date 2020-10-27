import { handleActions } from 'redux-actions';
import { FETCH_ITEMS, FETCH_ITEM_DETAIL, LOADING } from '../../constants/index';

export const items = handleActions({
    [FETCH_ITEMS]       : (state, action) => action.payload,
}, []);

export const itemDetail = handleActions({
    [FETCH_ITEM_DETAIL] : (state, action) => action.payload,
}, []);

export const isLoading = handleActions ( {
    [LOADING]           : (state, action) => action.payload,
}, false );
