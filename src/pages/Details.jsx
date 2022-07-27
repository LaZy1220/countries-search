import { useParams } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {loadingCountry} from '../store/details/details-actions'
import { useNavigate } from "react-router"
import {IoArrowBack} from 'react-icons/io5'
import { selectCountry } from "../store/details/details-selectors"
import { useEffect } from "react"
export const Details= ()=>{
    const {name} = useParams()
    const navigate = useNavigate()
    const country = useSelector(selectCountry)
    const dispatch = useDispatch()
    console.log(country);
    useEffect(()=>{
        dispatch(loadingCountry(name))
    },[name,dispatch])
    return (
        <div>
            <button onClick={()=>navigate(-1)}>
                <IoArrowBack/> back
            </button>
            Details : {name}
        </div>
    )
}