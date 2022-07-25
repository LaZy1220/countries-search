import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {List} from '../components/List';
import {Card} from '../components/Card';
import { Controls } from '../components/Controls';
import { useNavigate } from 'react-router-dom';
import { selectAllCountries, selectCountriesInfo } from '../store/countries/counties-selectors';
import { loadingCountries } from '../store/countries/countries-actions';

export const HomePage = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const countries = useSelector(selectAllCountries)
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
            {status==='loading'&&<h2>Loading...</h2>}
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