import { Card, Grid, GridItem } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import CreateCard from './Card'
import axios from '../api';
// import fetchData from 'App.jsx'

const CardsList = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState(null);

    const fetchData = async (dayInfo) => {
        const response = await axios.get('/feed',
        {params: {
            start_date: dayInfo,
            end_date: dayInfo,}
            ,});
        const [date, neos] = Object.entries(response.data.near_earth_objects)[0];

        const maxEstimatedDiameter = Math.max(...neos.map((el) => {
            return el.estimated_diameter.kilometers.estimated_diameter_max
        }));

        const numberOfPotentiallyHazardousNEOs = neos.reduce((acc, el) => {
            if (el.is_potentially_hazardous_asteroid === true) {
                return acc + 1;
            } else {
                return acc;
            }
            }, 0);
            
        const closestNEO = Math.min(...neos.map((el)=>{
            return Number(el.close_approach_data[0].miss_distance.kilometers)
        }));

        const fastestNEO = Math.max(...neos.map((el) => {
            return Number(el.close_approach_data[0].miss_distance.kilometers)


        }));

        


        const dataForCard = {
            maxEstimatedDiameter,
            numberOfPotentiallyHazardousNEOs,
            closestNEO,
            fastestNEO,
            date,
        };

        setData(dataForCard);
    }

    useEffect(() => {
        if(!data) return;
        // const hazard = neos.map(arr => {return arr.closestNEO;})
        // .sort(function(a, b){return b - a})
        // .slice(0,2); 
         if(list.length === 6){   
            setList(list.slice(1).concat([data]));
        } else {
            setList([...list, data]);
        }
    }, [data]);



    useEffect(() => {
        const today = new Date();
        const currentDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), 1));
        fetchData(currentDate);

        const interval = setInterval(() => {
           currentDate.setDate(currentDate.getDate() + 1)
            if(currentDate.getDate() === today.getDate() + 1){
                currentDate.setDate(0)
                return;
            }
            fetchData(currentDate);
        }, 5000)

        return () => {
            clearInterval(interval);
        }
    }, []);
    


    return (
        
        <div>
             {list.map(item => {
                return (
                        <CreateCard data={item} key={item.date}/>
                )
            })}
        
        </div>

        
    )
}

export default CardsList;


       

