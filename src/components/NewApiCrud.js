import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Organizations from './Organizations';
import Organization from './Organization';

function NewApiCrud() {

    const [organizations, setOrganizations] = useState([])

    const fetchOrganizations = async () => {
        const response = await axios.get['https://localhost:7072/api/[Organizations]/'];
        return response.data
    }

    useEffect(async () =>{
        setOrganizations(await fetchOrganizations())
    },[])

  return (
    <div>
         {Organizations.map((organization, index) =>{
            return <Organization key={index} name={organization.name} address={organization.address} /> 
        })} 
        {/* <Organizations/> */}
    </div>
  )
}

export default NewApiCrud;