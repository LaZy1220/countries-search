import { useParams } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {clearDetails, loadingCountry} from '../store/details/details-actions'
import { useNavigate } from "react-router"
import {IoArrowBack} from 'react-icons/io5'
import { selectDetails } from "../store/details/details-selectors"
import { useEffect } from "react"
import { Button } from "../components/Button"
import { Info } from "../components/Info"
export const Details= ()=>{
    const {name} = useParams()
    const navigate = useNavigate()
    const {country,status,error} = useSelector(selectDetails)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadingCountry(name))
        return ()=>{
            dispatch(clearDetails())
        }
    },[name,dispatch])
    return (
        <>
            <Button onClick={()=>navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {error&&<h2>Can't fetch data</h2>}
            {status==='loading'&&<h2>Loading...</h2>}
            {country &&(<Info push={navigate} {...country}/>)}
        </>
    )
}