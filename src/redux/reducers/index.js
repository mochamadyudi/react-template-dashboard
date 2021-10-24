import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Product from './Product'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    product:Product
});

export default reducers;