import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCar, faBook, faBell, faCog, faFileInvoiceDollar, faExchangeAlt, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import logo from '../assets/car.png'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Car Rent Logo" className="logo-img" /><h1 className="fw-bold">CAR RENT</h1>
       
      </div>
      <div className="menu">
        <div className="menu-item active">
          <FontAwesomeIcon icon={faTh} />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCar} />
          <span>Drivers</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBook} />
          <span>Bookings</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBell} />
          <span>Notifications</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </div>
      </div>
      <hr />
      <div className="menu">
        <div className="menu-section-title">Report</div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
          <span>Payment Details</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faExchangeAlt} />
          <span>Transactions</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFileAlt} />
          <span>Car Report</span>
        </div>
      </div>
      
        
        <button type="button" className="btn btn-secondary"><FontAwesomeIcon className='btn-logo' icon={faSignOutAlt} /><span className='button-text'>Logout</span></button>
        
      
    </div>
  );
};

export default Sidebar;
