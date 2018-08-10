import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import Footer from '../logs/logs'

const Page = () => (
    <li className="dropdown">
          <div
            className="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            // aria-haspopup="false"
            // aria-expanded="false">
            >
            <img alt="" className="support-3" src="../images/connection.png" />
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item">Secure Medical Record Chain</a>
            <a className="dropdown-item"> Private IPFS</a>
            <div className="dropdown-divider" />
            <Footer />
          </div>
        </li>

)

export default Page
