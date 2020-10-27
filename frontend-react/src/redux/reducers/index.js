import { combineReducers } from 'redux';
import { items, isLoading, itemDetail } from './items';

export default combineReducers({
    items, itemDetail, isLoading
});
