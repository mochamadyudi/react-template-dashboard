import {
    GET_PRODUCT,
    ERROR_GET_PRODUCT,
    LOADING_PRODUCT,
    NULL_PRODUCT
} from "../constants/Product";

const initialState = {
    list:{
        loading: true,
        data:null
    }
}

export default function(state = initialState, action){
    let {type,payload} = action
    switch (type){
        case GET_PRODUCT:
            return{
                ...state,
                list:{
                    ...state.list,
                    loading:false,
                    data:payload
                }
            }
        case LOADING_PRODUCT:
            return{
                ...state,
                list:{
                    ...state.list,
                    loading:true
                }
            }
        case NULL_PRODUCT:
        case ERROR_GET_PRODUCT:
            return{
                ...state,
                list:{
                    ...state.list,
                    loading:false,
                    data:[]
                }
            }
        default:
            return state;
    }
}