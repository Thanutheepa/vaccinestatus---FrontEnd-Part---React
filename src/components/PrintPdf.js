import React, { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import GenerateQr from "./GenerateQr";

const ComponentToPrint = forwardRef((props, ref) => {
  return (
  <div ref={ref}><div className="title">
  <h1>Company Kiva!</h1>
  <h2>Are you sure want to continue?</h2>
</div>
<div className="bodyQr">
    <h2>QR Code</h2>
   <GenerateQr/> 
  <p>Please can before enter the promise. If you want, You can print there!</p>
</div>
  </div>
  );
});

export default function PrintPdf() {
  const ref = useRef();

  return (
    <div className="print">
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <button onClick={handlePrint}>Print this out!</button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint ref={ref} />
    </div>
  );
}