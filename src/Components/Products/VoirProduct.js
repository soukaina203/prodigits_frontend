import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';
export default function VoirProduct() {
    const [data, setData] = useState(null);
    const { id } = useParams();
  
    const fetchProduct = async () => {
        const d = await axios.get(`http://127.0.0.1:8000/api/product/show/${id}`);
        console.log(d.data);
        setData(d.data);
    };
    useEffect(() => {
        fetchProduct();
    }, [])

    // Use the ID to fetch user details from an API or do something else


    return (
        <div>
        {data !== null ?  
        <div>
            <h1>{data.product.title}</h1>
            <h1>{data.product.description}</h1>
            <h1>{data.product.price}</h1>
            
                   
                  
            
            
        </div> : ""}
        </div>
    );
};