import React, { useState, useEffect } from "react";
import "./styles/nav-styles.css";
import "./styles/details.css";
import CHECKUPandPRESCRIPTIONS from "./CHECKUPandPRESCRIPTIONS";
function Input() {
  // State to manage left side tabs
  const [activeTab, setActiveTab] = useState("personal");
  // State to manage right side tabs
  const [activeRightTab, setActiveRightTab] = useState("home2");

  // Function to handle left side tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to handle right side tab change
  const handleRightTabChange = (tabName) => {
    setActiveRightTab(tabName);
  };

  const [labFields, setLabFields] = useState([
    { test: "", date: "", remarks: "", file: null },
  ]);
  const [isEditable, setIsEditable] = useState(true);

  const savelab = () => {
    setIsEditable(!isEditable);
  };

  const addlab = () => {
    setLabFields([
      ...labFields,
      { test: "", date: "", remarks: "", file: null },
    ]);
  };

  const deletelab = (index) => {
    if (labFields.length > 1) {
      const newLabFields = labFields.filter((_, i) => i !== index);
      setLabFields(newLabFields);
    }
  };

  const handleLabFieldChange = (index, field, value) => {
    const newLabFields = [...labFields];
    newLabFields[index][field] = value;
    setLabFields(newLabFields);
  };
  // Additional states and functions for form handling can go here
  const [medicineFields, setMedicineFields] = useState([
    { medicine: "", dose: "" },
  ]);
  const [Editable, setEditable] = useState(true);

  const addMedicine = () => {
    setMedicineFields([...medicineFields, { medicine: "", dose: "" }]);
  };

  const deleteMedicine = (index) => {
    if (medicineFields.length > 1) {
      const newMedicineFields = medicineFields.filter((_, i) => i !== index);
      setMedicineFields(newMedicineFields);
    }
  };

  const handleMedicineFieldChange = (index, field, value) => {
    const newMedicineFields = [...medicineFields];
    newMedicineFields[index][field] = value;
    setMedicineFields(newMedicineFields);
  };
  const contentStyle = {
    maxHeight: "70vh",
    overflowY: "scroll",
    overflowX: "hidden",
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    WebkitOverflowScrolling: "touch" /* iOS Safari */,
  };

  let l_id;
  async function PushData(val) {
    //val is the id of the form
    const form = document.getElementById(val);
    const formData = new FormData(form);

    // Convert formData to a plain object
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    console.log(formDataObj);
    //remove photo from formDataObj
    delete formDataObj.photo;
    // const url = "./action.php";
    const response = await fetch(
      "http://localhost/HCM-React/hcm-react/action.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formDataObj, action: "insert" }),
      }
    );

    const responseText = await response.text(); // Get response as json
    try {
      const result = JSON.parse(responseText); // Parse the JSON
      if (result.status) {
        console.log(result);
        l_id = result.data.lastInsertedId;
        console.log(l_id);
      } else {
        console.error("Error: ", result.message);
      }
    } catch (error) {
      console.error("Failed to parse JSON response: ", responseText);
    }
  }

  async function PushLabData(val) {
    // val is the id of the form
    const form = document.getElementById(val);
    const formData = new FormData(form);

    // Convert formData to a plain object
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    console.log(formDataObj);

    // Remove photo from formDataObj
    delete formDataObj.photo;

    // Make the initial request to insert the lab data
    const response = await fetch(
      "http://localhost/HCM-React/hcm-react/action.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formDataObj, action: "insert_lab" }),
      }
    );

    const responseText = await response.text(); // Get response as json
    try {
      const result = JSON.parse(responseText); // Parse the JSON
      if (result.status) {
        console.log(result);
        const lastInsertedId = result.data.lastInsertedId;
        console.log(lastInsertedId);

        // Update the formDataObj with the last inserted ID as caseno
        formDataObj.caseno = lastInsertedId;

        // Make another request to update the caseno column in lab_details table
        const updateResponse = await fetch(
          "http://localhost/HCM-React/hcm-react/action.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: formDataObj, action: "update_lab" }),
          }
        );

        const updateResponseText = await updateResponse.text(); // Get response as json
        try {
          const updateResult = JSON.parse(updateResponseText); // Parse the JSON
          if (updateResult.status) {
            console.log("caseno updated successfully");
          } else {
            console.error("Error: ", updateResult.message);
          }
        } catch (error) {
          console.error("Failed to parse JSON response: ", updateResponseText);
        }
      } else {
        console.error("Error: ", result.message);
      }
    } catch (error) {
      console.error("Failed to parse JSON response: ", responseText);
    }
  }

  async function UpdateData(val) {
    const form = document.getElementById(val);
    const formData = new FormData(form);

    const formDataObj = {};
    formData.forEach((value, key) => {
      if (key === "mind[]") {
        if (!formDataObj[key]) {
          formDataObj[key] = [];
        }
        formDataObj[key].push(value);
      } else {
        formDataObj[key] = value;
      }
    });

    // Rename mind[] to mind
    if (formDataObj["mind[]"]) {
      formDataObj["mind"] = formDataObj["mind[]"];
      delete formDataObj["mind[]"];
    }

    console.log(formDataObj);

    const response = await fetch(
      "http://localhost/HCM-React/hcm-react/action.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formDataObj, action: "update", id: l_id }),
      }
    );

    const responseText = await response.text();
    try {
      const result = JSON.parse(responseText);
      if (result.status) {
        console.log(result);
      } else {
        console.error("Error: ", result.message);
      }
    } catch (error) {
      console.error("Failed to parse JSON response: ", responseText);
    }
  }

  return (
    <div style={{ backgroundColor: "#0b6e4f" }}>
      <div className="">
        <div className="row p-3" style={{ padding: "0px", margin: "auto" }}>
          <div className="col-md-7 p-2" style={{ padding: "0px" }}>
            <div
              className="p-2 rounded-3"
              style={{ backgroundColor: "#ffffff" }}
            >
              <ul className="nav rounded-3">
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item active"
                    data-toggle="tab"
                    href="#personal"
                  >
                    Personal Details
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#history"
                  >
                    Patient History
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#measurements"
                  >
                    Measurements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#mind"
                  >
                    Mind
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#observations"
                  >
                    General Observations
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#vitals"
                  >
                    Vitals
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#symptoms"
                  >
                    Symptoms and Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link left-nav-item"
                    data-toggle="tab"
                    href="#lab"
                  >
                    Lab Tests
                  </a>
                </li>
              </ul>

              <div
                className="tab-content p-3"
                id="content"
                style={{ maxHeight: "80vh", overflowY: "scroll", contentStyle }}
              >
                <div id="personal" className="tab-pane fade show active">
                  <form id="personal1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Personal Details</h3>
                      <button
                        type="button"
                        className="btn btn-success"
                        value="personal1"
                        onClick={(e) => {
                          e.preventDefault();
                          PushData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    {/* Rest of personal details form */}
                    <div id="content">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="name"
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="gender">Gender</label>
                              <br />
                              <div className="m-2">
                                <div
                                  className="inline p-3"
                                  style={{ display: "inline" }}
                                >
                                  <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    className="custom-control-input"
                                    value="male"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="male"
                                  >
                                    Male
                                  </label>
                                </div>
                                <div
                                  className="inline p-3"
                                  style={{ display: "inline" }}
                                >
                                  <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    className="custom-control-input"
                                    value="female"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="female"
                                  >
                                    Female
                                  </label>
                                </div>
                                <div
                                  className="inline p-3"
                                  style={{ display: "inline" }}
                                >
                                  <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    className="custom-control-input"
                                    value="other"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="other"
                                  >
                                    Other
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-floating mb-3">
                              <input
                                type="number"
                                className="form-control"
                                id="age"
                                placeholder="age"
                                name="age"
                              />
                              <label htmlFor="age">Age</label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-floating mb-3">
                              <input
                                type="date"
                                className="form-control"
                                id="date"
                                placeholder="date"
                                name="dob"
                              />
                              <label htmlFor="date">Date</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-floating mb-3">
                            <select
                              className="form-select"
                              id="marital"
                              aria-label="Marital Status"
                              name="marital"
                            >
                              <option selected>Select</option>
                              <option value="married">Married</option>
                              <option value="unmarried">Unmarried</option>
                              <option value="divorced">Divorced</option>
                              <option value="widow">Widow</option>
                            </select>
                            <label htmlFor="marital">Marital Status</label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="complexion"
                              placeholder="Complexion"
                            />
                            <label htmlFor="complexion">Complexion</label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="constitution"
                              placeholder="constitution"
                              name="constitution"
                            />
                            <label htmlFor="constitution">Constitution</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Enter address"
                          id="address"
                          name="address"
                        ></textarea>
                        <label htmlFor="address">Address</label>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="contact"
                              placeholder="contact"
                              name="mobile"
                            />
                            <label htmlFor="contact">Contact</label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="occupation"
                              placeholder="occupation"
                              name="occupation"
                            />
                            <label htmlFor="occupation">Occupation</label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="child"
                              placeholder="child"
                              name="child"
                            />
                            <label htmlFor="child">Child</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="photo">Patient Image (Optional)</label>
                        <input
                          type="file"
                          className="form-control"
                          id="photo"
                          name="photo"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div id="history" className="tab-pane fade">
                  <form action="" id="history1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>History</h3>
                      <button
                        value="history1"
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          UpdateData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    {/* Rest of history form */}
                    <div id="content">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "13vh" }}
                          placeholder="Past History"
                          id="past"
                          name="past"
                        ></textarea>
                        <label htmlFor="past">Past History</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "13vh" }}
                          placeholder="Family History"
                          id="family"
                          name="family"
                        ></textarea>
                        <label htmlFor="family">Family History</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "13vh" }}
                          placeholder="Present Complain"
                          id="present"
                          name="present"
                        ></textarea>
                        <label htmlFor="present">Present Complain</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "13vh" }}
                          placeholder="disease"
                          id="disease"
                          name="disease"
                        ></textarea>
                        <label htmlFor="disease">
                          Suffering from other disease
                        </label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "13vh" }}
                          placeholder="cause"
                          id="cause"
                          name="cause"
                        ></textarea>
                        <label htmlFor="cause">Cause of Disease if any</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="measurements" className="tab-pane fade">
                  <form action="" id="measurements1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Measurements</h3>
                      <button
                        value="measurements1"
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          UpdateData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    {/* Rest of measurements form */}
                    <div id="content">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="height"
                              name="height"
                              placeholder="height"
                            />
                            <label htmlFor="height">Height (in Meters)</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="weight"
                              name="weight"
                              placeholder="weight"
                            />
                            <label htmlFor="weight">Weight (in Kgs)</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="temperature"
                              placeholder="temperature"
                              name="temperature"
                            />
                            <label htmlFor="temperature">
                              Temperature (Fahrenheit)
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="pulse"
                              placeholder="pulse"
                              name="pulse"
                            />
                            <label htmlFor="pulse">Pulse</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group mb-3">
                            <div className="form-floating">
                              <input
                                type="number"
                                className="form-control"
                                id="systolic"
                                placeholder="Systolic"
                                name="systolic"
                              />
                              <label htmlFor="systolic">Systolic (mm Hg)</label>
                            </div>
                            <span
                              className="input-group-text"
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              /
                            </span>
                            <div className="form-floating">
                              <input
                                type="number"
                                className="form-control"
                                id="diastolic"
                                placeholder="Diastolic"
                                name="diastolic"
                              />
                              <label htmlFor="diastolic">
                                Diastolic (mm Hg)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="mind" className="tab-pane fade">
                  <form action="" id="mind1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Mind</h3>
                      <button
                        value="mind1"
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          UpdateData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    <div id="content">
                      <div className="input-group mt-3">
                        <div
                          className="btn-group p-3 bg-white row rounded-3 ms-1"
                          role="group"
                          aria-label="Basic checkbox toggle button group"
                          style={{ width: "100%" }}
                        >
                          {[
                            "Absent Mind",
                            "Forgetfulness",
                            "Timid",
                            "Jealousness",
                            "Suspicious",
                            "Confuse Minded",
                            "Over Sensitive",
                            "Sadness",
                            "Aggressive",
                            "Angerness",
                            "Hot Temprament",
                            "Overthinking",
                            "Proudy",
                            "Over Proudy",
                          ].map((label, index) => (
                            <div
                              className="col-md-4 d-flex align-items-center"
                              key={index}
                            >
                              <input
                                type="checkbox"
                                style={{ border: "1px black" }}
                                name="mind[]"
                                value={label}
                                className="btn-check"
                                id={`btncheck${index + 1}`}
                                autoComplete="off"
                              />
                              <label
                                className="btn rounded-3 btn-checker w-100"
                                htmlFor={`btncheck${index + 1}`}
                              >
                                {label}
                              </label>
                            </div>
                          ))}
                          <div className="col-md-4 d-flex align-items-center">
                            <button
                              type="reset"
                              id="clear-selection-button"
                              className="btn rounded-3 w-100"
                            >
                              Clear Selection
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div id="observations" className="tab-pane fade">
                  <form action="" id="observations1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>General Observations</h3>
                      <button
                        value="observations1"
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          UpdateData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    <div id="content">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="head/neck"
                          id="head"
                          name="head"
                        ></textarea>
                        <label htmlFor="head">Head/Neck</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="mouth"
                          id="mouth"
                          name="mouth"
                        ></textarea>
                        <label htmlFor="mouth">Mouth/Tongue</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="eye"
                          id="eye"
                          name="eye"
                        ></textarea>
                        <label htmlFor="eye">Eye/Ear</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="face"
                          id="face"
                          name="face"
                        ></textarea>
                        <label htmlFor="face">Face/Color</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="nose"
                          id="nose"
                          name="nose"
                        ></textarea>
                        <label htmlFor="nose">Nose</label>
                      </div>
                      <br />
                      <div className="input-group mb-3">
                        <span className="input-group-text">Chest</span>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="respiratory"
                            placeholder="Respiratory"
                            name="respiratory"
                          ></textarea>
                          <label htmlFor="respiratory">Respiratory</label>
                        </div>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="cardiac"
                            placeholder="Cardiac"
                            name="cardiac"
                          ></textarea>
                          <label htmlFor="cardiac">Cardiac</label>
                        </div>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="abdomen"
                          id="abdomen"
                          name="abdomen"
                        ></textarea>
                        <label htmlFor="abdomen">Abdomen/Pelvis</label>
                      </div>
                      <br />
                      <div className="input-group mb-3">
                        <span className="input-group-text">Genitalia</span>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="menses"
                            placeholder="Menses"
                            name="menses"
                          ></textarea>
                          <label htmlFor="menses">Menses</label>
                        </div>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="genitalia"
                            placeholder="Genitalia"
                            name="other"
                          ></textarea>
                          <label htmlFor="genitalia">Genitalia</label>
                        </div>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="limb"
                          id="limb"
                          name="limb"
                        ></textarea>
                        <label htmlFor="limb">Limb</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="back"
                          id="back"
                          name="back"
                        ></textarea>
                        <label htmlFor="back">Back/Lumber</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "13vh" }}
                          placeholder="skin"
                          id="skin"
                          name="skin"
                        ></textarea>
                        <label htmlFor="skin">
                          Skin/Condition/Perspiration
                        </label>
                      </div>
                      <br />
                    </div>
                  </form>
                </div>
                <div id="vitals" className="tab-pane fade">
                  <form action="" id="vitals1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Vitals</h3>
                      <button
                        value="vitals1"
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          UpdateData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    {/* Rest of symptoms form */}
                    <div id="content">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="appetite"
                          id="appetite"
                          name="appetite"
                        ></textarea>
                        <label htmlFor="appetite">Appetite</label>
                      </div>
                      <br />

                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="thirst"
                          id="thirst"
                          name="thirst"
                        ></textarea>
                        <label htmlFor="thirst">Thirst</label>
                      </div>
                      <br />

                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="stool"
                          id="stool"
                          name="stool"
                        ></textarea>
                        <label htmlFor="stool">Stool</label>
                      </div>
                      <br />

                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="urine"
                          id="urine"
                          name="urine"
                        ></textarea>
                        <label htmlFor="urine">Urine</label>
                      </div>
                      <br />

                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="sleep"
                          id="sleep"
                          name="sleep"
                        ></textarea>
                        <label htmlFor="sleep">Sleep/Dream</label>
                      </div>
                      <br />

                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="discharge"
                          id="discharge"
                          name="discharge"
                        ></textarea>
                        <label htmlFor="discharge">Discharge (if any)</label>
                      </div>
                      <br />
                    </div>
                  </form>
                </div>
                <div id="symptoms" className="tab-pane fade">
                  <form action="" id="symptoms1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Symptoms and Conditions</h3>
                      <button
                        value="symptoms1"
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          UpdateData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    <div id="content">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="addiction"
                          id="addiction"
                          name="addiction"
                        ></textarea>
                        <label htmlFor="addiction">Addiction (if any)</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="desire"
                          id="desire"
                          name="desire"
                        ></textarea>
                        <label htmlFor="desire">Desire</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="aversion"
                          id="aversion"
                          name="aversion"
                        ></textarea>
                        <label htmlFor="aversion">Aversion</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="aggravation"
                          id="aggravation"
                          name="aggravation"
                        ></textarea>
                        <label htmlFor="aggravation">Aggravation</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          style={{ minHeight: "10vh" }}
                          placeholder="amelioration"
                          id="amelioration"
                          name="amelioration"
                        ></textarea>
                        <label htmlFor="amelioration">Amelioration</label>
                      </div>
                      <br />
                    </div>
                  </form>
                </div>
                <div
                  id="lab"
                  className={`tab-pane fade ${
                    activeTab === "lab" && "show active"
                  }`}
                >
                  <form id="lab1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Lab Tests</h3>
                      <button
                        type="button"
                        className="btn btn-success"
                        value="lab1"
                        onClick={(e) => {
                          e.preventDefault();
                          PushLabData(e.target.value);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    {/* Rest of lab tests form */}
                    <div id="lab-fields">
                      {labFields.map((field, index) => (
                        <div className="input-group mb-2" key={index}>
                          <select
                            name="lab[]"
                            className="form-select"
                            aria-label="status-select"
                            style={{
                              borderTopLeftRadius: "10px",
                              borderBottomLeftRadius: "10px",
                            }}
                            value={field.test}
                            onChange={(e) =>
                              handleLabFieldChange(
                                index,
                                "test",
                                e.target.value
                              )
                            }
                            disabled={!isEditable}
                          >
                            <option value="">Select Lab Test</option>
                            <option value="Blood Test">Blood Test</option>
                            <option value="Biopsy">Biopsy</option>
                          </select>
                          <input
                            type="date"
                            name="dt[]"
                            className="form-control"
                            value={field.date}
                            onChange={(e) =>
                              handleLabFieldChange(
                                index,
                                "date",
                                e.target.value
                              )
                            }
                            disabled={!isEditable}
                          />
                          <input
                            name="remarks[]"
                            style={{ width: "400px" }}
                            type="text"
                            className="form-control"
                            value={field.remarks}
                            onChange={(e) =>
                              handleLabFieldChange(
                                index,
                                "remarks",
                                e.target.value
                              )
                            }
                            placeholder="Remarks"
                            disabled={!isEditable}
                          />
                          <input
                            className="form-control p-3 bg-light"
                            style={{ width: "50px" }}
                            type="file"
                            name="file[]"
                            onChange={(e) =>
                              handleLabFieldChange(
                                index,
                                "file",
                                e.target.files[0]
                              )
                            }
                            disabled={!isEditable}
                          />
                          <button
                            className="btn btn-success"
                            type="button"
                            onClick={savelab}
                          >
                            <i className="fa-solid fa-check"></i>
                          </button>
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => deletelab(index)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={addlab}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
<CHECKUPandPRESCRIPTIONS/>
        </div>
      </div>
    </div>
  );
}

export default Input;
