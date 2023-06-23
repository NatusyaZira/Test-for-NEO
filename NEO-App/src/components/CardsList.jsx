import { Card, Grid, GridItem } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import CreateCard from './Card'
import axios from '../api';

const CardsList = () => {

   

    const fetchData = async (dayInfo) => {
        const response = await axios.get('/feed',
        {params: {
            start_date: dayInfo,
            end_date: dayInfo,}
            ,});
        const [date, neos] = Object.entries(response.data.near_earth_objects)[0];

    }
    return (
        <div></div>
    )
}

export default CardsList