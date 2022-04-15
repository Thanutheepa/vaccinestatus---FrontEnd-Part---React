import React from "react";
import axios from "axios";

const ApiCrud = () => {
    return(
        
        axios.get("https://localhost:7072/api/[Organizations]/"). then((response) =>{
            console.log(response)
        },
        <h1>presenting data</h1>
        )
    
    )
}

export default ApiCrud;