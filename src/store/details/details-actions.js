import axios from "axios";
import { searchByCountry,filterByCode } from "../../config";
import { CLEAR_DETAILS, SET_COUNTRY,SET_ERROR,SET_LOADING, SET_NEIGHBORS } from "./details-consts";

const setCountry = (county)=>({
    type:SET_COUNTRY,
    payload:county,
})
const setError  =(error)=>({
    type:SET_ERROR,
    payload:error
})
const setLoading = ()=>({
    type:SET_LOADING,
})
export const clearDetails = ()=>({
    type:CLEAR_DETAILS,
})
const setNeighbors = (countries)=>({
    type:SET_NEIGHBORS,
    payload:countries
})
export const loadingCountry = (name)=>(dispatch)=>{
    dispatch(setLoading())
    axios.get(searchByCountry(name))
    .then(({data})=>dispatch(setCountry(data[0])))
    .catch((error)=>dispatch(setError(error.message)))
}
export const loadingNeighbors = (borders)=>(dispatch)=>{
    axios.get(filterByCode(borders))
    .then(({data})=>dispatch(setNeighbors(data.map((c)=>c.name))))
    .catch(console.error)
}