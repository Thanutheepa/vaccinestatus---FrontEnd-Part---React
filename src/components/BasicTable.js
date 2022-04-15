import React, {useState} from "react";
import data from "../mock-data.json";

const BasicTable=()=>{
    const [organizations, setOrganizations]= useState(data);


    return(
        <div className='App-container'>
      <table className="app-table">
        <thead>
          <tr >
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>ContactPerson</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((organization, index)=>(
            <tr key={index}>
            <td >{organization.name}</td>
            <td>{organization.address}</td>
            <td>{organization.phoneNumber}</td>
            <td>{organization.contactPerson}</td>
            {/* <td><button >ShowQRCode</button></td> */}
            <td><button >{organization.Actions}</button></td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    );
};
export default BasicTable;
