import React, {useState} from "react";
import data from "../mock-data.json";

const BasicTable=()=>{
    const [contacts, setContacts]= useState(data);


    return(
        <div className='App-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>ContactPerson</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <tr>
            <td>contact.name</td>
            <td>contact.address</td>
            <td>contact.phoneNumber</td>
            <td>contact.contactPerson</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    );
};
export default BasicTable;
