import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/navbar.css";
import "./styles/details.css";
import "./styles/styles.css";
import "./styles/table-styles.css";
import detailsIcon from "./Images And Icons/add_patient.png";
import accountIcon from "./Images And Icons/user-doctor-solid.svg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Container = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    caseNo: true,
    fileNo: true,
    name: true,
    mobileNo: true,
  });

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/HCM-React/hcm-react/fetch_data.php"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        console.log("Fetched data:", jsonData);

        if (jsonData.status) {
          setData(jsonData.data);
        } else {
          setError(jsonData.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  const filteredData = data.filter((item) => {
    const { caseNo, fileNo, name, mobileNo } = selectedFilters;
    const search = searchTerm.toLowerCase();

    return (
      (caseNo && item.caseno?.toString().toLowerCase().includes(search)) ||
      (fileNo && item.fileno?.toString().toLowerCase().includes(search)) ||
      (name && item.name?.toLowerCase().includes(search)) ||
      (mobileNo && item.mobile.toString().toLowerCase().includes(search))
    );
  });

  const handleEditAndCheckup = (caseno) => {
    history.push(`/edit-and-checkup/${caseno}`);
  };

  return (
    <div style={{ backgroundColor: "#0b6e4f" }}>
      <nav className="navbar shadow navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/">
            IDEAL
          </a>
          <div className="d-flex align-items-center justify-content-center w-50 position-relative searchbar">
            <input
              id="searchbar-input"
              type="text"
              className="searchbar w-100"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn rounded-5" id="searchbutton">
              <i
                style={{ color: "white" }}
                className="fas fa-search"
              ></i>
            </button>
          </div>
          <a
            href="/details"
            className="btn rounded-5 ms-auto position-relative fs-4"
          >
            <span className="tooltiptext">Enter Patient Details</span>
            <img
              className="nav-buttons"
              src={detailsIcon}
              style={{
                height: "28px",
                opacity: "85%",
                transform: "translateY(-10%)",
              }}
              alt=""
            />
          </a>
          <div className="btn-group border-0 rounded-5">
            <button
              type="button"
              className="btn rounded-5"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="tooltiptext">Account</span>
              <img
                className="nav-buttons"
                src={accountIcon}
                style={{
                  height: "25px",
                  opacity: "85%",
                  transform: "translateY(-9%)",
                }}
                alt=""
              />
            </button>
            <ul
              className="dropdown-menu border-0 p-2"
              style={{ transform: "translateX(-75%)" }}
            >
              <li>
                <a
                  className="dropdown-item p-2 rounded-3 btn mb-1 profile-setting-button justify-content-center d-flex"
                  href="/profile"
                >
                  <i className="fas fa-user-md"></i>
                  <span style={{ marginLeft: "10px" }}>Profile</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item p-2 rounded-3 btn mt-2 profile-setting-button justify-content-center d-flex"
                  href="/settings"
                >
                  <i className="fas fa-cog"></i>
                  <span style={{ marginLeft: "10px" }}>Settings</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  href="/login"
                  className="dropdown-item p-3 rounded-3 btn btn-danger logout-button justify-content-center d-flex"
                  style={{ backgroundColor: "rgba(255, 0, 0, 0.115)" }}
                >
                  <i className="fas fa-sign-out-alt" style={{ color: "red" }}></i>
                  <span style={{ marginLeft: "10px", color: "red" }}>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container justify-content-center d-flex">
        <div
          className="mx-3 rounded-5"
          style={{ backgroundColor: "#d1d3ab", width: "60%" }}
        >
          <div className="input-group m-0 rounded-5">
            <div
              className="btn-group p-1 bg-white row rounded-3 ms-0"
              role="group"
              aria-label="Basic checkbox toggle button group"
              style={{ width: "100%" }}
            >
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="caseNo"
                  autoComplete="off"
                  checked={selectedFilters.caseNo}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="btn rounded-3 btn-checker w-100"
                  htmlFor="caseNo"
                >
                  Case No.
                </label>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="fileNo"
                  autoComplete="off"
                  checked={selectedFilters.fileNo}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="btn rounded-3 btn-checker w-100"
                  htmlFor="fileNo"
                >
                  File No.
                </label>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobileNo"
                  autoComplete="off"
                  checked={selectedFilters.mobileNo}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="btn rounded-3 btn-checker w-100"
                  htmlFor="mobileNo"
                >
                  Mobile No.
                </label>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="name"
                  autoComplete="off"
                  checked={selectedFilters.name}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="btn rounded-3 btn-checker w-100"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-white mx-3 rounded-3 text-align-center p-3 fs-6 table-container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div
            className="table-responsive"
            style={{
              maxHeight: "65vh",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <table id="my-table" className="table table-striped p-3">
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
                {filteredData.length > 0 ? (
                  filteredData.map((entry) => (
                    <tr key={entry.caseno}>
                      <td>{entry.caseno}</td>
                      <td>{entry.fileno}</td>
                      <td>{entry.name}</td>
                      <td>{entry.mobile}</td>
                      <td>{entry.date}</td>
                      <td>
                        <button
                          className="btn rounded-4 mt-1 mb-1 w-100 checkup-button action-button"
                          onClick={() => handleEditAndCheckup(entry.caseno)}
                          style={{ backgroundColor: "#0b6e4f" }}
                        >
                          <span className="tooltiptext">Patient Checkup</span>
                          <i
                            className="fas fa-edit"
                            style={{ color: "white" }}
                          ></i>
                          <div
                            style={{
                              display: "inline",
                              margin: "10px",
                              color: "white",
                            }}
                          >
                            |
                          </div>
                          <i
                            className="fas fa-notes-medical"
                            style={{ color: "white" }}
                          ></i>
                        </button>
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
        )}
      </div>
    </div>
  );
};

export default Container;
