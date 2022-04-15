import React, {useState} from 'react';
import data from "../mock-data.json";
// import data from "../mock-vaccineData.json";
const MedicalInstitute=()=>{
    const [MedicalInstitute, setMedicalInstitute]= useState(data);
// function MedicalInstitute() {
  return (
    <div>
        <h1>
            Enter the Vaccine Datas and View Vaccination Details..!
        </h1>
        <div>
        <table className="vaccine-table">
        <thead>
          <tr >
            <th>userName</th>
            <th>date</th>
            <th>vaccineCentreId</th>
            <th>userId</th>
            {/* <th>vaccineBatchId</th> */}
          </tr>
        </thead>
        <tbody>
          {MedicalInstitute.map((MedicalInstitute, index)=>(
            <tr key={index}>
            <td >{MedicalInstitute.userName}</td>
            <td>{MedicalInstitute.date}</td>
            <td>{MedicalInstitute.vaccineCentreId}</td>
            <td>{MedicalInstitute.userId}</td>
            {/* <td><button >ShowQRCode</button></td> */}
            {/* <td><button >{organization.Actions}</button></td> */}
          </tr>
          ))}
          
        </tbody>
      </table>
        </div>
    </div>
    
  );


};export default MedicalInstitute;