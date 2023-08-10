import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className='modal-overlay'>
      <div onClick={e => e.stopPropagation()} className='modal-container'>
        <div className='upper-section'>
          <h1>Huge Annoucement!</h1>
          <p onClick={closeModal} className='close'>
            &times;
          </p>
        </div>
        <div className='middle-section'>
          <h3>I am open to new opportunity</h3>
          <i>Do you have an offer for me? Want to collaborate?</i>
          <p>
            I am a ReactJS developer and programming content creator. I code and
            write to 30,000+ on the weekdays and enjoy the family-time on the
            weekends. I believe that with conversations, new doors of
            opportunities are opened. So if you have a role for me, a
            collaboration opportunity or any career advice or you want to mentor
            me... I highly welcome that, please reach out to me. See you 🙂
          </p>
        </div>
        <div className='lower-section'>
          <a href='/#' onClick={closeModal} className='modal-btn btn-red'>
            Close
          </a>
          <a
            href='mailto:sunilnet4@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='modal-btn btn-green'
          >
            Lets Talk
          </a>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
