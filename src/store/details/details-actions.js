import axios from "axios";
import { searchByCountry } from "../../config";
import { SET_COUNTRY,SET_ERROR,SET_LOADING } from "./details-consts";

export const setCountry = (county)=>({
    type:SET_COUNTRY,
    payload:county,
})
export const setError  =(error)=>({
    type:SET_ERROR,
    payload:error
})
export const setLoading = ()=>({
    type:SET_LOADING,
})

export const loadingCountry = (name)=>(dispatch)=>{
    dispatch(setLoading())
    axios.get(searchByCountry(name))
    .then(({data})=>dispatch(setCountry(data[0])))
    .catch((error)=>dispatch(setError(error.message)))
}