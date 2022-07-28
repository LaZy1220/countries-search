import { useParams } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {clearDetails, loadingCountry} from '../store/details/details-actions'
import { useNavigate } from "react-router"
import {IoArrowBack} from 'react-icons/io5'
import { selectDetails } from "../store/details/details-selectors"
import {ThreeDots } from 'react-loader-spinner'
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
            {status==='loading'&&
                <div style={{marginLeft:'auto',marginRight:'auto',width:'250px'}}>
                    <ThreeDots color="var(--color-ui-base)" height={80} width={250}/>
                </div>}
            {country &&(<Info push={navigate} {...country}/>)}
        </>
    )
}