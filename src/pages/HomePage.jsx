import axios from 'axios';
import { useState,useEffect } from 'react';
import { ALL_COUNTRIES } from '../config';
import {List} from '../components/List';
import {Card} from '../components/Card';
import { Controls } from '../components/Controls';

export const HomePage = ()=>{
    const [counties,setCountries]=useState([])
    useEffect(()=>{
      axios.get(ALL_COUNTRIES).then(({data})=>setCountries(data))
    }, [])
    return(
        <>
            <Controls />
          <List>
            {
              counties.map(el=>{
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
                  <Card key={el.name}{...countryInfo}/>
                )
              })
            }
          </List>
        </>
    )
}