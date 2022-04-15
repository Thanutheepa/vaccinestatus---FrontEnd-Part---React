import React, {useState} from 'react';
import Modal from './Modal';




function ShowApp() {
    const [openModal, setOpenModal] = useState(false);
  return (
    
    <div className="ShowApp">
      <h1>Hey, Click on the button to open the Actions.</h1>
      
      <button
        className="openModalBtn"
        onClick={() => {
            setOpenModal(true);
        }}
      >
        ShowQRCode
      </button>
      {openModal && <Modal closeModel={setOpenModal}/>} 
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
    
    </div>
  );
}

export default ShowApp;