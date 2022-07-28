import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {ThreeDots } from 'react-loader-spinner'
import { Controls } from '../components/Controls';
import { useNavigate } from 'react-router-dom';
import { selectFilteredCountries,selectCountriesInfo } from '../store/countries/countries-selectors';
import { loadingCountries } from '../store/countries/countries-actions';
import { selectControls} from '../store/controls/controls-selectors';

export const HomePage = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {search,region} = useSelector(selectControls)
    const countries = useSelector((state)=>selectFilteredCountries(state,{search,region}))
    const {status,error,quantity}=useSelector(selectCountriesInfo)
    useEffect(()=>{
      if(!quantity){
        dispatch(loadingCountries())
      }
    }, [quantity,dispatch])
    return(
        <>
            <Controls />
            {error&&<h2>Can't fetch data</h2>}
            {status==='loading' && 
              <div style={{marginLeft:'auto',marginRight:'auto',width:'250px'}}>
                <ThreeDots color="var(--color-ui-base)" height={80} width={250}/>
              </div>}
            {status==='received'&&(
                <List>
                {
                  countries.map(el=>{
                    const countryInfo={
                      img:el.flags.png,
                      name:el.name,
                      info:[
                        {
                          title:'Population',
                          description:el.population.toLocaleString()
                        },
                        {
                          title:'Region',
                          description:el.region
                        },
                        {
                          title:'Capital',
                          description:el.capital
                        }
                      ]
                    }
                    return (
                      <Card key={el.name} 
                      onClick={() => navigate(`/country/${el.name}`)}
                      {...countryInfo}/>
                    )
                  })
                }
              </List>
            )}
        </>
    )
}