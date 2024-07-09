import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Input = () => {
  // const [caseno, setCaseno] = useState(null);
  // const [l_id, setL_id] = useState(null);

  useEffect(() => {
    function updateLeftToBePaid() {
      var prev_amt =
        parseFloat(
          $("#prev_amt")
            .text()
            .replace(/[^\d.-]/g, "")
        ) || 0;
      var present_amt = parseFloat($("#present_amt").val()) || 0;
      var paid_amt = parseFloat($("#paid_amt").val()) || 0;
      var left_amt = prev_amt + present_amt - paid_amt;
      $("#left_amt").text(`₹${left_amt.toFixed(2)}`);
    }

    // Trigger calculation on input change
    $("#present_amt, #paid_amt").on("input", updateLeftToBePaid);

    // Clean up event listeners on component unmount
    return () => {
      $("#present_amt, #paid_amt").off("input", updateLeftToBePaid);
    };
  }, []);

  const [activeTab, setActiveTab] = useState("personal");
  const [activeRightTab, setActiveRightTab] = useState("home2");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

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
  const { caseno } = useParams();
  const [patientData, setPatientData] = useState({
    name: "",
    gender: "",
    age: "",
    date: "",
    marital: "",
    complexion: "",
    constitution: "",
    address: "",
    mobile: "",
    occupation: "",
    child: "",
    past: "",
    family: "",
    present: "",
    disease: "",
    cause: "",
    height: "",
    weight: "",
    temperature: "",
    pulse: "",
    systolic: "",
    diastolic: "",
    mind: [],
    head: "",
    mouth: "",
    eye: "",
    face: "",
    nose: "",
    respiratory: "",
    cardiac: "",
    abdomen: "",
    menses: "",
    other: "",
    limb: "",
    skin: "",
    appetite: "",
    thirst: "",
    stool: "",
    urine: "",
    sleep: "",
    discharge: "",
    addiction: "",
    desire: "",
    aversion: "",
    aggravation: "",
    amelioration: "",
    remarks: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(
          `http://localhost/HCM-React/hcm-react/get_patient_data.php?caseno=${caseno}`
        );
        const data = await response.json();
        if (data.error) {
          setMessage(data.error);
        } else {
          setPatientData(data);
        }
      } catch (error) {
        setMessage("Failed to fetch patient data");
      }
    };

    fetchPatientData();
  }, [caseno]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "mind") {
      const newMind = checked
        ? [...patientData.mind, value]
        : patientData.mind.filter((item) => item !== value);
      setPatientData({ ...patientData, mind: newMind });
    } else {
      setPatientData({ ...patientData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/HCM-React/hcm-react/update_patient_data.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ caseno, ...patientData }),
        }
      );
      const data = await response.json();
      if (data.error) {
        setMessage(data.error);
      } else {
        setMessage("Patient data updated successfully");
      }
    } catch (error) {
      setMessage("Failed to update patient data");
    }
  };
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
    // if (formDataObj["mind[]"]) {
    //   formDataObj["mind"] = formDataObj["mind[]"];
    //   delete formDataObj["mind[]"];
    // }
    delete formDataObj.photo;
    // console.log(l_id);
    console.log(formDataObj);

    const response = await fetch(
      "http://localhost/HCM-React/hcm-react/action.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: formDataObj,
          action: "update",
          id: caseno,
        }),
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
      <form>
        <input type="hidden" name="case_no" id="case_no" value="" />
      </form>
      <div className="">
        <div
          className="row p-3"
          style={{ padding: "0px", margin: "auto" }}
        ></div>
        <div className="col-md-7 p-2" style={{ padding: "0px" }}>
          <div className="p-2 rounded-3" style={{ backgroundColor: "#ffffff" }}>
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
                  id="history-anchor"
                >
                  Patient History
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link left-nav-item"
                  data-toggle="tab"
                  href="#measurements"
                  id="measurements-anchor"
                >
                  Measurements
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link left-nav-item"
                  data-toggle="tab"
                  href="#mind"
                  id="mind-anchor"
                >
                  Mind
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link left-nav-item"
                  data-toggle="tab"
                  href="#observations"
                  id="observations-anchor"
                >
                  General Observations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link left-nav-item"
                  data-toggle="tab"
                  href="#vitals"
                  id="vitals-anchor"
                >
                  Vitals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link left-nav-item"
                  data-toggle="tab"
                  href="#symptoms"
                  id="symptoms-anchor"
                >
                  Symptoms and Conditions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link left-nav-item"
                  data-toggle="tab"
                  href="#lab"
                  id="lab-anchor"
                >
                  Lab Tests
                </a>
              </li>
            </ul>

            <div
              className="tab-content p-3"
              id="content"
              style={{
                maxHeight: "80vh",
                overflowY: "scroll",
                contentStyle,
              }}
            >
              <div id="personal" className="tab-pane fade show active">
                <form id="personal1">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Personal Details</h3>
                    <button
                      type="button"
                      id="save-button-to-personalhistory"
                      className="btn btn-success save-button"
                      data-tab-id="personal"
                      value="personal1"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        document.getElementById("history-anchor").click();
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
                        value={patientData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <br />
                            <div className="">
                              <div
                                className="inline  p-2"
                                style={{ display: "inline" }}
                              >
                                <input
                                  type="radio"
                                  id="male"
                                  name="gender"
                                  className="custom-control-input"
                                  value="male"
                                  checked={patientData.gender === "male"}
                                  onChange={handleChange}
                                />
                                <label
                                  className="custom-control-label p-1"
                                  htmlFor="male"
                                >
                                  Male
                                </label>
                              </div>
                              <div
                                className="inline  p-2"
                                style={{ display: "inline" }}
                              >
                                <input
                                  type="radio"
                                  id="female"
                                  name="gender"
                                  className="custom-control-input"
                                  value="female"
                                  checked={patientData.gender === "female"}
                                  onChange={handleChange}
                                />
                                <label
                                  className="custom-control-label p-1"
                                  htmlFor="female"
                                >
                                  Female
                                </label>
                              </div>
                              <div
                                className="inline p-2 "
                                style={{ display: "inline" }}
                              >
                                <input
                                  type="radio"
                                  id="other"
                                  name="gender"
                                  className="custom-control-input"
                                  value="other"
                                  checked={patientData.gender === "other"}
                                  onChange={handleChange}
                                />
                                <label
                                  className="custom-control-label p-1"
                                  htmlFor="other"
                                >
                                  Other
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="age"
                              placeholder="age"
                              name="age"
                              value={patientData.age}
                              onChange={handleChange}
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
                              value={patientData.date}
                              onChange={handleChange}
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
                            value={patientData.marital}
                            onChange={handleChange}
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
                            name="complexion"
                            placeholder="Complexion"
                            value={patientData.complexion}
                            onChange={handleChange}
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
                            value={patientData.constitution}
                            onChange={handleChange}
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
                        value={patientData.address}
                        onChange={handleChange}
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
                            value={patientData.mobile}
                            onChange={handleChange}
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
                            value={patientData.occupation}
                            onChange={handleChange}
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
                            value={patientData.child}
                            onChange={handleChange}
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
                      className="btn btn-success save-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        document.getElementById("measurements-anchor").click();
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
                        value={patientData.past}
                        onChange={handleChange}
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
                        value={patientData.family}
                        onChange={handleChange}
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
                        value={patientData.present}
                        onChange={handleChange}
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
                        value={patientData.disease}
                        onChange={handleChange}
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
                        value={patientData.cause}
                        onChange={handleChange}
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
                      className="btn btn-success save-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        document.getElementById("mind-anchor").click();
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
                            value={patientData.height}
                            onChange={handleChange}
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
                            value={patientData.weight}
                            onChange={handleChange}
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
                            value={patientData.temperature}
                            onChange={handleChange}
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
                            value={patientData.pulse}
                            onChange={handleChange}
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
                              value={patientData.systolic}
                              onChange={handleChange}
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
                              value={patientData.diastolic}
                              onChange={handleChange}
                            />
                            <label htmlFor="diastolic">Diastolic (mm Hg)</label>
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
                      id="mind-save"
                      className="btn btn-success save-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        // document
                        //   .getElementById("mind-save")
                        //   .addEventListener("click", function () {
                        //     document
                        //       .getElementById("observations-anchor")
                        //       .click();
                        //   });
                        document.getElementById("observations-anchor").click();
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
                              checked={patientData.mind.includes(label)}
                              onChange={handleChange}
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
                      className="btn btn-success save-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        document.getElementById("vitals-anchor").click();
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
                        value={patientData.head}
                        onChange={handleChange}
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
                        value={patientData.mouth}
                        onChange={handleChange}
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
                        value={patientData.eye}
                        onChange={handleChange}
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
                        value={patientData.face}
                        onChange={handleChange}
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
                        value={patientData.nose}
                        onChange={handleChange}
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
                          value={patientData.respiratory}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="respiratory">Respiratory</label>
                      </div>
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="cardiac"
                          placeholder="Cardiac"
                          name="cardiac"
                          value={patientData.cardiac}
                          onChange={handleChange}
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
                        value={patientData.abdomen}
                        onChange={handleChange}
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
                          value={patientData.menses}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="menses">Menses</label>
                      </div>
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="genitalia"
                          placeholder="Genitalia"
                          name="other"
                          value={patientData.other}
                          onChange={handleChange}
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
                        value={patientData.limb}
                        onChange={handleChange}
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
                        value={patientData.back}
                        onChange={handleChange}
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
                        value={patientData.skin}
                        onChange={handleChange}
                      ></textarea>
                      <label htmlFor="skin">Skin/Condition/Perspiration</label>
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
                      id="vitals-save"
                      className="btn btn-success save-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        // document
                        //   .getElementById("vitals-save")
                        //   .addEventListener("click", function () {
                        //     document
                        //       .getElementById("symptoms-anchor")
                        //       .click();
                        //   });
                        document.getElementById("symptoms-anchor").click();
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
                        value={patientData.appetite}
                        onChange={handleChange}
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
                        value={patientData.thirst}
                        onChange={handleChange}
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
                        value={patientData.stool}
                        onChange={handleChange}
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
                        value={patientData.urine}
                        onChange={handleChange}
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
                        value={patientData.sleep}
                        onChange={handleChange}
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
                        value={patientData.discharge}
                        onChange={handleChange}
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
                      id="symptoms-save"
                      className="btn btn-success save-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateData(e.target.value);
                        // document
                        //   .getElementById("symptoms-save")
                        //   .addEventListener("click", function () {
                        //     document.getElementById("lab-anchor").click();
                        //   });
                        document.getElementById("lab-anchor").click();
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
                        value={patientData.addiction}
                        onChange={handleChange}
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
                        value={patientData.desire}
                        onChange={handleChange}
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
                        value={patientData.aversion}
                        onChange={handleChange}
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
                        value={patientData.aggravation}
                        onChange={handleChange}
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
                        value={patientData.amelioration}
                        onChange={handleChange}
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
                      className="btn btn-success save-button"
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
                            handleLabFieldChange(index, "test", e.target.value)
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
                            handleLabFieldChange(index, "date", e.target.value)
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
                          className="btn btn-success save-button"
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
      </div>
    </div>
  );
};

export default Input;
