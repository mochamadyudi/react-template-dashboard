import data from '../../assets/data/dummy/product-list.data.json'
import {GET_PRODUCT} from "../constants/Product";
import {AUTHENTICATED} from "../constants/Auth";

export const GetProduct = (page = 1, max_result = 20)=> {
    try{
        return {
            type: GET_PRODUCT,
            payload:data
        }
    }catch(err){
        throw err;
    }
}