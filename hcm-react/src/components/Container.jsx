// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'datatables.net-dt/css/jquery.dataTables.css';
// // import 'font-awesome/css/font-awesome.min.css';
// import $ from 'jquery';
// import 'datatables.net';

// const HomeopathicConsultancyManagement = () => {

//   useEffect(() => {
//     const loadTable = () => {
//       $('#table').DataTable();
//     };

//     loadTable();
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#0b6e4f' }}>
//       <nav className="navbar shadow navbar-expand-lg fixed-top">
//         <div className="container-fluid">
//           <a className="navbar-brand me-auto" id="spmsbranding" href="index.html">IDEAL</a>
//           <div className="d-flex align-items-center justify-content-center w-50 position-relative searchbar">
//             <input type="text" className="searchbar w-100" placeholder="Search" aria-label="Search" />
//             <button className="btn rounded-5" id="searchbutton">
//               <i style={{ color: 'white' }} className="fa fa-search"></i>
//             </button>
//           </div>
//           <a href="details.html" id="tooltip" className="btn rounded-5 ms-auto position-relative fs-4">
//             <span id="tooltiptext">Enter Patient Details</span>
//             <img className="nav-buttons" src="Images And Icons/add_patient.png" style={{ height: '25px', opacity: '85%', transform: 'translateY(-7%)' }} alt="" />
//           </a>
//           <div className="btn-group border-0 rounded-5">
//             <button type="button" id="tooltip" className="btn rounded-5" data-bs-toggle="dropdown" aria-expanded="false">
//               <span id="tooltiptext">Account</span>
//               <img className="nav-buttons" src="Images And Icons/user-doctor-solid.svg" style={{ height: '25px', opacity: '85%', transform: 'translateY(-9%)' }} alt="" />
//             </button>
//             <ul className="dropdown-menu border-0 p-2" style={{ transform: 'translateX(-75%)' }}>
//               <li>
//                 <a className="dropdown-item p-2 rounded-3 btn mb-1 profile-setting-button justify-content-center d-flex" href="profile.html">
//                   <div className="me-auto w-100" style={{ display: 'inline' }}>
//                     <i className="fa fa-user-md"></i>
//                   </div>
//                   <span className="w-100" style={{ textAlign: 'right' }}>Profile</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item p-2 rounded-3 btn mt-2 profile-setting-button justify-content-center d-flex" href="settings.html">
//                   <div className="me-auto w-100" style={{ display: 'inline' }}>
//                     <i style={{ fontSize: '13px' }} className="fa fa-cog"></i>
//                   </div>
//                   <span className="w-100" style={{ textAlign: 'right' }}>Settings</span>
//                 </a>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>
//                 <a href="login.html" className="dropdown-item p-3 rounded-3 btn btn-danger logout-button justify-content-center d-flex" style={{ backgroundColor: 'rgba(255, 0, 0, 0.115)' }}>
//                   <div className="me-auto w-100" style={{ display: 'inline' }}>
//                     <i style={{ fontSize: '13px', color: 'red' }} className="fa fa-sign-out"></i>
//                   </div>
//                   <span className="w-100" style={{ textAlign: 'right', color: 'red' }}>Logout</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <br /><br /><br /><br /><br />
//       <div className="container justify-content-center d-flex">
//         <div className="mx-3 rounded-5" style={{ backgroundColor: '#d1d3ab', width: '60%' }}>
//           <div className="input-group m-0 rounded-5">
//             <div className="btn-group p-1 bg-white row rounded-3 ms-0" role="group" aria-label="Basic checkbox toggle button group" style={{ width: '100%' }}>
//               <div className="col-md-3 d-flex align-items-center">
//                 <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
//                 <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck1">Case No.</label>
//               </div>
//               <div className="col-md-3 d-flex align-items-center">
//                 <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
//                 <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck2">File No.</label>
//               </div>
//               <div className="col-md-3 d-flex align-items-center">
//                 <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
//                 <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck3">Mobile No.</label>
//               </div>
//               <div className="col-md-3 d-flex align-items-center">
//                 <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
//                 <label className="btn rounded-3 btn-checker w-100" htmlFor="btncheck4">Name</label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3 bg-white mx-3 rounded-3 text-align-center p-3 fs-6">
//         <div className="table-responsive">
//           <table id="table" className="table table-striped p-3">
//             <thead>
//               <tr>
//                 <th scope="col">Case No.</th>
//                 <th scope="col">File No.</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Mobile No.</th>
//                 <th scope="col">Last Visited</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>111</td>
//                 <td>Umang Hirani</td>
//                 <td>7984940336</td>
//                 <td>30-10-2004</td>
//                 <td>
//                   <div className="btn-container">
//                     <a id="tooltip" className="btn rounded-4 mb-1 mt-1 w-100 edit-button action-button" href="edit.html" style={{ backgroundColor: '#d1d3ab' }}>
//                       <span id="tooltiptext">Edit Patient Details</span>
//                       <i className="fa fa-pencil-square-o"></i>
//                     </a>
//                     <a id="tooltip" className="btn rounded-4 mb-1 mt-1 w-100 add-button action-button" href="checkup-page.html" style={{ backgroundColor: '#0b6e4f', color: 'white' }}>
//                       <span id="tooltiptext">Patient Checkup</span>
//                       <i className="fa fa-medkit"></i>
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>1</td>
//                 <td>121</td>
//                 <td>Jay Mangukiya</td>
//                 <td>8160844068</td>
//                 <td>22-10-2004</td>
//                 <td>
//                   <div className="btn-container">
//                     <a id="tooltip" className="btn rounded-4 mb-1 mt-1 w-100 edit-button action-button" href="edit.html" style={{ backgroundColor: '#d1d3ab' }}>
//                       <span id="tooltiptext">Edit Patient Details</span>
//                       <i className="fa fa-pencil-square-o"></i>
//                     </a>
//                     <a id="tooltip" className="btn rounded-4 mb-1 mt-1 w-100 add-button action-button" href="checkup-page.html" style={{ backgroundColor: '#0b6e4f', color: 'white' }}>
//                       <span id="tooltiptext">Patient Checkup</span>
//                       <i className="fa fa-medkit"></i>
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>1</td>
//                 <td>130</td>
//                 <td>Aryan Mahida</td>
//                 <td>8302814982</td>
//                 <td>08-08-2003</td>
//                 <td>
//                   <div className="btn-container">
//                     <a id="tooltip" className="btn rounded-4 mb-1 mt-1 w-100 edit-button action-button" href="edit.html" style={{ backgroundColor: '#d1d3ab' }}>
//                       <span id="tooltiptext">Edit Patient Details</span>
//                       <i className="fa fa-pencil-square-o"></i>
//                     </a>
//                     <a id="tooltip" className="btn rounded-4 mb-1 mt-1 w-100 add-button action-button" href="checkup-page.html" style={{ backgroundColor: '#0b6e4f', color: 'white' }}>
//                       <span id="tooltiptext">Patient Checkup</span>
//                       <i className="fa fa-medkit"></i>
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeopathicConsultancyManagement;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/navbar.css';
// import './navbar.css';
import './styles/styles.css';
import './styles/table-styles.css';

const HomeopathicConsultancyManagement = () => {
  const [doctorId, setDoctorId] = useState(0);
  const [searchResult, setSearchResult] = useState('');
  const [btnChecks, setBtnChecks] = useState({
    btncheck1: true,
    btncheck2: false,
    btncheck3: false,
    btncheck4: false,
  });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setDoctorId(urlParams.get('id') || 0);
    setSearchResult(urlParams.get('search') || '');
    setBtnChecks({
      btncheck1: urlParams.has('btncheck1'),
      btncheck2: urlParams.has('btncheck2'),
      btncheck3: urlParams.has('btncheck3'),
      btncheck4: urlParams.has('btncheck4'),
    });
    fetchPatients(urlParams);
  }, []);

  const fetchPatients = async (params) => {
    // Example fetching logic; replace with your actual API call
    const search_term = params.get('search') || '';
    const conditions = [];
    if (params.has('btncheck1')) conditions.push(`caseno LIKE '%${search_term}%'`);
    if (params.has('btncheck2')) conditions.push(`fileno LIKE '%${search_term}%'`);
    if (params.has('btncheck3')) conditions.push(`mobile LIKE '%${search_term}%'`);
    if (params.has('btncheck4')) conditions.push(`name LIKE '%${search_term}%'`);

    // Example data; replace with actual data fetching
    const result = [
      {
        caseno: '001',
        fileno: 'A123',
        name: 'John Doe',
        mobile: '1234567890',
        date: '2023-12-31',
      },
    ];

    setPatients(result);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchResult) params.set('search', searchResult);
    Object.keys(btnChecks).forEach((key) => {
      if (btnChecks[key]) params.set(key, 'on');
    });
    window.location.href = `?${params.toString()}`;
  };

  return (
    <div style={{ backgroundColor: '#0b6e4f' }}>
      <nav className="navbar shadow navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" id="spmsbranding" href="index.php">IDEAL</a>
          <div className="d-flex align-items-center justify-content-center w-50 position-relative searchbar">
            <input
              id="searchbar-input"
              type="text"
              className="searchbar w-100"
              placeholder="Search"
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
            />
            <button className="btn rounded-5" id="searchbutton" onClick={handleSearch}>
              <i style={{ color: 'white' }} className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <a
            href={`details.php?id=${doctorId}`}
            id="tooltip"
            className="btn rounded-5 ms-auto position-relative fs-4"
          >
            <span id="tooltiptext">Enter Patient Details</span>
            <img
              className="nav-buttons"
              src="Images And Icons/add_patient.png"
              style={{ height: '25px', opacity: '85%', transform: 'translateY(-7%)' }}
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
                src="Images And Icons/user-doctor-solid.svg"
                style={{ height: '25px', opacity: '85%', transform: 'translateY(-9%)' }}
                alt=""
              />
            </button>
            <ul className="dropdown-menu border-0 p-2" style={{ transform: 'translateX(-75%)' }}>
              <li>
                <a
                  className="dropdown-item p-2 rounded-3 btn mb-1 profile-setting-button justify-content-center d-flex"
                  href={`profile.php?id=${doctorId}`}
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
                  href={`settings.php?id=${doctorId}`}
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
                  href="login.php"
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
                  checked={btnChecks.btncheck1}
                  onChange={() => setBtnChecks({ ...btnChecks, btncheck1: !btnChecks.btncheck1 })}
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
                  checked={btnChecks.btncheck2}
                  onChange={() => setBtnChecks({ ...btnChecks, btncheck2: !btnChecks.btncheck2 })}
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
                  checked={btnChecks.btncheck3}
                  onChange={() => setBtnChecks({ ...btnChecks, btncheck3: !btnChecks.btncheck3 })}
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
                  checked={btnChecks.btncheck4}
                  onChange={() => setBtnChecks({ ...btnChecks, btncheck4: !btnChecks.btncheck4 })}
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
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <tr key={patient.caseno}>
                    <td>{patient.caseno}</td>
                    <td>{patient.fileno}</td>
                    <td>{patient.name}</td>
                    <td>{patient.mobile}</td>
                    <td>{patient.date}</td>
                    <td>
                      <div className="btn-container">
                        <a
                          id="tooltip"
                          className="btn rounded-4 mb-1 mt-1 w-100 edit-button action-button"
                          href={`edit.php?caseno=${patient.caseno}`}
                          style={{ backgroundColor: '#d1d3ab' }}
                        >
                          <span id="tooltiptext">Edit Patient Details</span>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a
                          id="tooltip"
                          className="btn rounded-4 mb-1 mt-1 w-100 add-button action-button"
                          href={`checkup-page.php?caseno=${patient.caseno}&fileno=${patient.fileno}`}
                          style={{ backgroundColor: '#0b6e4f', color: 'white' }}
                        >
                          <span id="tooltiptext">Patient Checkup</span>
                          <i className="fa-solid fa-notes-medical"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No data found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeopathicConsultancyManagement;

