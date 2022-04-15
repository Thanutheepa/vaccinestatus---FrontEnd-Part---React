import React from 'react';
// import "./Modal.css";
// import GenerateQr from './GenerateQr';
// import PrintPdf from './PrintPdf';




function History({closeModel}) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
        <div className="titleCloseBtn">  
            <button onClick={()=> closeModel(false)}>X</button>
            </div>
        {/* <div className="title">
        <h1>Company Kiva!</h1>
        <h2>Are you sure want to continue?</h2>
      </div>
      <div className="body">
          <h2>QR Code</h2>
         {/* <GenerateQr/> */}
        {/* <p>Please can before enter the promise. If you want, You can print there!</p> */}
      {/* </div> */} 
      {/* <PrintPdf/> */}
      <div>
      <br/>
                     <label>Sabaragamuwa University Of Sri Lanka, Belihuloya 2022.03.05 08.28 am ChekedIN</label><br/><br/>
                     <label>City hospital, Ratnapura 2022.02.26 04.28 am ChekedIN</label><br/><br/>
                     <label>Pharmacy, Pumbahinna 2022.03.15 10.59 am ChekedIN & 2022.03.17 9.26 pm CheckedOUT</label><br/><br/>
                 
      </div>
      <div className="footer">
        
          <button onClick={()=>{ closeModel(false);}} id='cancelBtn'>Cancel</button>
          
          
      </div>
      
        </div>
    </div>
  )
}

export default History;