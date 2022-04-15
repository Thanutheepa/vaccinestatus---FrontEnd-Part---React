// import React from 'react';

// function CheckedInAndCheckedOut() {
//   return (
//     <div>Hi
        
//     </div>
//   )
// }

// export default CheckedInAndCheckedOut;
import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
 import { QrReader } from 'react-qr-reader';
// import PrintPdf from './PrintPdf';
import History from './History';

function CheckedInAndCheckedOut() {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
     const [scanResultWebCam, setScanResultWebCam] =  useState('');
     const classes = useStyles();
    const qrRef = useRef(null);
    const [openHistory, setOpenHistory] = useState(false);
  
    const generateQrCode = async () => {
      try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
      }catch (error) {
        console.log(error);
      }
    }
     const handleErrorFile = (error) => {
      console.log(error);
     }
     const handleScanFile = (result) => {
         if (result) {
              setScanResultFile(result);
          }
      }
     const onScanFile = () => {
        qrRef.current.openImageDialog();
      }
     const handleErrorWebCam = (error) => {
     console.log(error);
     }
     const handleScanWebCam = (result) => {
      if (result){
          setScanResultWebCam(result);
       }
     }
  return (
    <Container className={classes.conatiner}>
    <Card>
        <h2 className={classes.title}>Checked IN & Checked OUT </h2>
        <CardContent>
             <Grid container spacing={2}>
                {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>  
                    <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                    <Button className={classes.btn} variant="contained" 
                      color="primary" onClick={() => generateQrCode()}>Generate</Button>
                      <br/>
                      <br/>
                      <br/>
                      {imageUrl ? (
                        <a href={imageUrl} download>
                            <img src={imageUrl} alt="img"/>
                        </a>) : null}
                  </Grid>  */}
                {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                  <QrReader
                    ref={qrRef}
                    delay={300}
                    style={{width: '100%'}}
                    onError={handleErrorFile}
                    onScan={handleScanFile}
                    legacyMode
                  />
                  <h3>Scanned Code: {scanResultFile}</h3>
                </Grid>  */}
                 <Grid item xl={4} lg={4} md={6} sm={12} xs={12}> 
                   <h3>Qr Code Scan by Web Cam</h3>
                   <QrReader
                   delay={300}
                   style={{width: '100%'}}
                   onError={handleErrorWebCam}
                   onScan={handleScanWebCam}
                   />
                   <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                 </Grid>
                 <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                  <QrReader
                    ref={qrRef}
                    delay={300}
                    style={{width: '100%'}}
                    onError={handleErrorFile}
                    onScan={handleScanFile}
                    legacyMode
                  />
                  <h3>Scanned Code: {scanResultFile}</h3>
                </Grid>  
                 <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                     <h1>View History</h1>
                     <label>Sabaragamuwa University Of Sri Lanka, Belihuloya 2022.03.05 08.28 am ChekedIN</label>
                     <label>City hospital, Ratnapura 2022.02.26 04.28 am ChekedIN</label>
                     <label>Pharmacy, Pumbahinna 2022.03.15 10.59 am ChekedIN & 2022.03.17 9.26 pm CheckedOUT</label>
                 </Grid>
                 <Grid item xl={4} lg={24} md={18} sm={12} xs={12}>
                     {/* <h1>View History</h1> */}
                     <button
        className="openHistoryBtn"
        onClick={() => {
            setOpenHistory(true);
        }}
      >
        View History
      </button>
      {openHistory && <History closeModel={setOpenHistory}/>} 
                 </Grid>
            </Grid>   
            
        </CardContent>
    </Card>
</Container>

  );
}
const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
export default CheckedInAndCheckedOut;

