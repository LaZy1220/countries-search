import { SET_COUNTRY,SET_LOADING,SET_ERROR } from "./details-consts";

const initialState = {
    status:'idle',
    county:null,
    error:null,   
}

export const detailsReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case SET_COUNTRY:{
            return {
                ...state,
                status:'received',
                county:payload,
            }
        }
        case SET_LOADING:{
            return{
                ...state,
                status:'loading'
            }
        }
        case SET_ERROR:{
            return{
                ...state,
                status:'rejected',
                error:payload,
            }
        }
        default:{
            return state
        }
    }
}