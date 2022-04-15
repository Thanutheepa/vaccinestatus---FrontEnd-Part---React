import React from 'react';
//import "./Modal.css";
// import GenerateQr from './GenerateQr';
import PrintPdf from './PrintPdf';




function Modal({closeModel}) {
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
      <PrintPdf/>
      <div className="footer">
        
          <button onClick={()=>{ closeModel(false);}} id='cancelBtn'>Cancel</button><br/>
          <br/>
          
      </div>
      
        </div>
    </div>
  )
}

export default Modal;