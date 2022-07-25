import {SET_COUNTRIES,SET_ERROR,SET_LOADING} from './countries-consts'

const initialState = {
    status:'idle',
    list:[],
    error:null,
}

export const countriesReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case SET_COUNTRIES:{
            return {
                ...state,
                status:'received',
                list:payload,
            }
        }
        case SET_LOADING:{
            return{
                ...state,
                status:'loading',
                error:null,
            }
        }
        case SET_ERROR:{
            return {
                ...state,
                status:'rejected',
                error:payload
            }
        }
        default:{
            return state
        }
    }
}