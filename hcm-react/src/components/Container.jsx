import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/navbar.css';
import './styles/styles.css';
import './styles/table-styles.css';
import details from "./Images And Icons/add_patient.png";
import account from "./Images And Icons/user-doctor-solid.svg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const HomeopathicConsultancyManagement = () => {

  return (

    

    
    <div style={{ backgroundColor: '#0b6e4f' }}>
      
      <nav className="navbar shadow navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" id="spmsbranding" href="/">IDEAL</a>
          <div className="d-flex align-items-center justify-content-center w-50 position-relative searchbar">
            <input
              id="searchbar-input"
              type="text"
              className="searchbar w-100"
              placeholder="Search"
            />
            <button className="btn rounded-5" id="searchbutton">
              <i style={{ color: 'white' }} className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <a
            href="/details"
            id="tooltip"
            className="btn rounded-5 ms-auto position-relative fs-4"
          >
            <span id="tooltiptext">Enter Patient Details</span>
            <img
              className="nav-buttons"
              src={details}
              style={{ height: '28px', opacity: '85%', transform: 'translateY(-10%)' }}
              alt=""
            />
          </a>
          <div className="btn-group border-0 rounded-5">
            <button
              type="button"
              id="tooltip"
              className="btn rounded-5"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span id="tooltiptext">Account</span>
              <img
                className="nav-buttons"
                src={account}
                style={{ height: '25px', opacity: '85%', transform: 'translateY(-9%)' }}
                alt=""
              />
            </button>
            <ul className="dropdown-menu border-0 p-2" style={{ transform: 'translateX(-75%)' }}>
              <li>
                <a
                  className="dropdown-item p-2 rounded-3 btn mb-1 profile-setting-button justify-content-center d-flex"
                  href="/profile"
                >
                  <div className="me-auto w-100" style={{ display: 'inline' }}>
                    <i className="fa-solid fa-user-doctor"></i>
                  </div>
                  <span className="w-100" style={{ textAlign: 'right' }}>
                    Profile
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item p-2 rounded-3 btn mt-2 profile-setting-button justify-content-center d-flex"
                  href="/settings"
                >
                  <div className="me-auto w-100" style={{ display: 'inline' }}>
                    <i style={{ fontSize: '13px' }} className="fa-solid fa-gear"></i>
                  </div>
                  <span className="w-100" style={{ textAlign: 'right' }}>
                    Settings
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  href="/login"
                  className="dropdown-item p-3 rounded-3 btn btn-danger logout-button justify-content-center d-flex"
                  style={{ backgroundColor: 'rgba(255, 0, 0, 0.115)' }}
                >
                  <div className="me-auto w-100" style={{ display: 'inline' }}>
                    <i style={{ fontSize: '13px', color: 'red' }} className="fa-solid fa-right-from-bracket"></i>
                  </div>
                  <span className="w-100" style={{ textAlign: 'right', color: 'red' }}>
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <br /><br /><br /><br />

      <div className="container justify-content-center d-flex">
        <div className="mx-3 rounded-5" style={{ backgroundColor: '#d1d3ab', width: '60%' }}>
          <div className="input-group m-0 rounded-5">
            <div
              className="btn-group p-1 bg-white row rounded-3 ms-0"
              role="group"
              aria-label="Basic checkbox toggle button group"
              style={{ width: '100%' }}
            >
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck1"
                  autoComplete="off"
                />
                <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck1">
                  Case No.
                </label>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck2"
                  autoComplete="off"
                />
                <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck2">
                  File No.
                </label>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck3"
                  autoComplete="off"
                />
                <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck3">
                  Mobile No.
                </label>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck4"
                  autoComplete="off"
                />
                <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck4">
                  Name
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-white mx-3 rounded-3 text-align-center p-3 fs-6 table-container">
        <div className="table-responsive" style={{ maxHeight: '65vh', overflowY: 'scroll', overflowX: 'scroll' }}>
          <table id="table" className="table table-striped p-3">
            <thead>
              <tr>
                <th scope="col">Case No.</th>
                <th scope="col">File No.</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Last Visited</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>A123</td>
                <td>John Doe</td>
                <td>1234567890</td>
                <td>2023-12-31</td>
                <td>
                  <div className="btn-container">
                    <a
                      id="tooltip"
                      className="btn rounded-4 mb-1 mt-1 w-100 edit-button action-button"
                      href="/edit"
                      style={{ backgroundColor: '#d1d3ab' }}
                    >
                      <span id="tooltiptext">Edit</span>
                      <i className="fa-solid fa-pen-to-square" style={{ color: 'black' }}></i>
                    </a>
                    <a
                      id="tooltip"
                      className="btn rounded-4 mt-1 mb-1 w-100 checkup-button action-button"
                      href="/checkup"
                      style={{ backgroundColor: '#0b6e4f' }}
                    >
                      <span id="tooltiptext">Patient Checkup</span>
                      <i className="fa-solid fa-notes-medical" style={{ color: 'white' }}></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>B456</td>
                <td>Jane Smith</td>
                <td>9876543210</td>
                <td>2023-11-25</td>
                <td>
                  <div className="btn-container">
                    <a
                      id="tooltip"
                      className="btn rounded-4 mb-1 mt-1 w-100 edit-button action-button"
                      href="/edit"
                      style={{ backgroundColor: '#d1d3ab' }}
                    >
                      <span id="tooltiptext">Edit</span>
                      <i className="fa-solid fa-pen-to-square" style={{ color: 'black' }}></i>
                    </a>
                    <a
                      id="tooltip"
                      className="btn rounded-4 mt-1 mb-1 w-100 checkup-button action-button"
                      href="/checkup"
                      style={{ backgroundColor: '#0b6e4f' }}
                    >
                      <span id="tooltiptext">Patient Checkup</span>
                      <i className="fa-solid fa-notes-medical" style={{ color: 'white' }}></i>
                    </a>
                  </div>
                </td>
              </tr>
              {/* Add more static rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeopathicConsultancyManagement;
