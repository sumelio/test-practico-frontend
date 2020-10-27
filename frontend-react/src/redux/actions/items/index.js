import {FETCH_ITEM_DETAIL, FETCH_ITEMS, LOADING} from '../../../constants';
import { createAction } from 'redux-actions';
import {getItems, getItemDetail} from '../../../api/ApiMethods'
import {endPoint} from "../../../api/urls";

export const fetchItems = createAction(
    FETCH_ITEMS, (search, abortController) => getItems(endPoint, search, abortController)()
    );

export const fetchItemDetail = createAction(
    FETCH_ITEM_DETAIL, (itemId, abortController) => getItemDetail(endPoint, itemId, abortController)()
    );

export const loading = createAction(LOADING, isLoading => isLoading);