import axios from 'axios'
import  {SET_COUNTRIES,SET_LOADING,SET_ERROR} from './countries-consts'
import {ALL_COUNTRIES} from '../../config'

export const setCountries = (countries)=>({
    type:SET_COUNTRIES,
    payload:countries,
})
export const setLoading = ()=>({
    type:SET_LOADING,
})
export const setError = (error)=>({
    type:SET_ERROR,
    payload:error
})

export const loadingCountries = ()=>(dispatch)=>{
    dispatch(setLoading())
    axios.get(ALL_COUNTRIES)
    .then(({data})=>dispatch(setCountries(data)))
    .catch((error)=>dispatch(setError(error.message)))
}