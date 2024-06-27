// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function Input() {
//   return (
//     <div>
//       <div style={{ backgroundColor: "#0b6e4f" }}>
//         <div className="">
//           <div className="row p-3" style={{ padding: "0px", margin: "auto" }}>
//             <div className="col-md-7 p-2 " style={{ padding: "0px" }}>
//               <div
//                 className=" p-2  rounded-3"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 <ul className=" nav  rounded-3 ">
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item active"
//                       data-toggle="tab"
//                       href="#personal"
//                     >
//                       Personal Details
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item"
//                       data-toggle="tab"
//                       href="#history"
//                     >
//                       History
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item"
//                       data-toggle="tab"
//                       href="#measurements"
//                     >
//                       Measurements
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item"
//                       data-toggle="tab"
//                       href="#observations"
//                     >
//                       General Observations
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item"
//                       data-toggle="tab"
//                       href="#vitals"
//                     >
//                       Vitals
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item"
//                       data-toggle="tab"
//                       href="#symptoms"
//                     >
//                       Symptoms and Conditions
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link left-nav-item"
//                       data-toggle="tab"
//                       href="#lab"
//                     >
//                       Lab Tests
//                     </a>
//                   </li>
//                 </ul>

//                 <div
//                   className="tab-content p-3"
//                   id="content"
//                   style={{ maxHeight: "80vh", overflowY: "scroll" }}
//                 >
//                   <div id="personal" className="tab-pane fade show active">
//                     <form>
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3>Personal Details</h3>
//                         <button type="submit" className="btn btn-success ">
//                           Save
//                         </button>
//                       </div>
//                       <div id="content">
//                         <div className="form-floating mb-3">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="name"
//                             placeholder="name"
//                           />
//                           <label htmlFor="name">Name</label>
//                         </div>
//                         <div className="form-group">
//                           <div className="row">
//                             <div className="col-md-4">
//                               <div className="form-group">
//                                 <label htmlFor="gender">Gender</label>
//                                 <br />
//                                 <div className="m-2">
//                                   <div
//                                     className="inline p-3"
//                                     style={{ display: "inline" }}
//                                   >
//                                     <input
//                                       type="radio"
//                                       id="male"
//                                       name="gender"
//                                       className="custom-control-input"
//                                       value="male"
//                                     />
//                                     <label
//                                       className="custom-control-label"
//                                       htmlFor="male"
//                                     >
//                                       Male
//                                     </label>
//                                   </div>
//                                   <div
//                                     className="inline p-3"
//                                     style={{ display: "inline" }}
//                                   >
//                                     <input
//                                       type="radio"
//                                       id="female"
//                                       name="gender"
//                                       className="custom-control-input"
//                                       value="female"
//                                     />
//                                     <label
//                                       className="custom-control-label"
//                                       htmlFor="female"
//                                     >
//                                       Female
//                                     </label>
//                                   </div>
//                                   <div
//                                     className="inline p-3"
//                                     style={{ display: "inline" }}
//                                   >
//                                     <input
//                                       type="radio"
//                                       id="other"
//                                       name="gender"
//                                       className="custom-control-input"
//                                       value="other"
//                                     />
//                                     <label
//                                       className="custom-control-label"
//                                       htmlFor="other"
//                                     >
//                                       Other
//                                     </label>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-md-4">
//                               <div className="form-floating mb-3">
//                                 <input
//                                   type="number"
//                                   className="form-control"
//                                   id="age"
//                                   placeholder="age"
//                                 />
//                                 <label htmlFor="age">Age</label>
//                               </div>
//                             </div>
//                             <div className="col-md-4">
//                               <div className="form-floating mb-3">
//                                 <input
//                                   type="date"
//                                   className="form-control"
//                                   id="date"
//                                   placeholder="date"
//                                 />
//                                 <label htmlFor="date">Date</label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-4">
//                             <div className="form-floating mb-3">
//                               <select
//                                 className="form-select"
//                                 id="marital"
//                                 aria-label="Marital Status"
//                               >
//                                 <option selected>Select</option>
//                                 <option value="married">Married</option>
//                                 <option value="unmarried">Unmarried</option>
//                                 <option value="divorced">Divorced</option>
//                                 <option value="widow">Widow</option>
//                               </select>
//                               <label htmlFor="marital">Marital Status</label>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="complexion"
//                                 placeholder="Complexion"
//                               />
//                               <label htmlFor="complexion">Complexion</label>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="constitution"
//                                 placeholder="constitution"
//                               />
//                               <label htmlFor="constitution">Constitution</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             placeholder="Enter address"
//                             id="address"
//                           ></textarea>
//                           <label htmlFor="address">Address</label>
//                         </div>
//                         <br />
//                         <div className="row">
//                           <div className="col-md-4">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="contact"
//                                 placeholder="contact"
//                               />
//                               <label htmlFor="contact">Contact</label>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="occupation"
//                                 placeholder="occupation"
//                               />
//                               <label htmlFor="occupation">Occupation</label>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="child"
//                                 placeholder="child"
//                               />
//                               <label htmlFor="child">Child</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="photo">
//                             Patient Image (Optional)
//                           </label>
//                           <input
//                             type="file"
//                             className="form-control"
//                             id="photo"
//                           />
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                   <div id="history" className="tab-pane fade">
//                     <form action="">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3>History</h3>
//                         <button type="submit" className="btn btn-success ">
//                           Save
//                         </button>
//                       </div>
//                       <div id="content">
//                         <div className="form-floating mb-3">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "13vh" }}
//                             placeholder="Past History"
//                             id="past"
//                           ></textarea>
//                           <label htmlFor="past">Past History</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "13vh" }}
//                             placeholder="Family History"
//                             id="family"
//                           ></textarea>
//                           <label htmlFor="family">Family History</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "13vh" }}
//                             placeholder="Present Complain"
//                             id="present"
//                           ></textarea>
//                           <label htmlFor="present">Present Complain</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "13vh" }}
//                             placeholder="disease"
//                             id="disease"
//                           ></textarea>
//                           <label htmlFor="disease">
//                             Suffering from other disease
//                           </label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "13vh" }}
//                             placeholder="cause"
//                             id="cause"
//                           ></textarea>
//                           <label htmlFor="cause">Cause of Disease if any</label>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                   <div id="measurements" className="tab-pane fade">
//                     <form action="">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3>Measurements</h3>
//                         <button type="submit" className="btn btn-success ">
//                           Save
//                         </button>
//                       </div>
//                       <div id="content">
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="height"
//                                 placeholder="height"
//                               />
//                               <label htmlFor="height">Height (in Meters)</label>
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="weight"
//                                 placeholder="weight"
//                               />
//                               <label htmlFor="weight">Weight (in Kgs)</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="temperature"
//                                 placeholder="temperature"
//                               />
//                               <label htmlFor="temperature">
//                                 Temperature (Fahrenheit)
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-floating mb-3">
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 id="pulse"
//                                 placeholder="pulse"
//                               />
//                               <label htmlFor="pulse">Pulse</label>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="input-group mb-3">
//                               <div className="form-floating">
//                                 <input
//                                   type="number"
//                                   className="form-control"
//                                   id="systolic"
//                                   placeholder="Systolic"
//                                 />
//                                 <label htmlFor="systolic">
//                                   Systolic (mm Hg)
//                                 </label>
//                               </div>
//                               <span className="input-group-text">/</span>
//                               <div className="form-floating">
//                                 <input
//                                   type="number"
//                                   className="form-control"
//                                   id="diastolic"
//                                   placeholder="Diastolic"
//                                 />
//                                 <label htmlFor="diastolic">
//                                   Diastolic (mm Hg)
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                   <div id="observations" className="tab-pane fade">
//                     <form action="">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3>General Observations</h3>
//                         <button type="submit" className="btn btn-success ">
//                           Save
//                         </button>
//                       </div>
//                       <div id="content">
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="head/neck"
//                             id="head"
//                           ></textarea>
//                           <label htmlFor="head">Head/Neck</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="mouth"
//                             id="mouth"
//                           ></textarea>
//                           <label htmlFor="mouth">Mouth/Tongue</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="eye"
//                             id="eye"
//                           ></textarea>
//                           <label htmlFor="eye">Eye/Ear</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="face"
//                             id="face"
//                           ></textarea>
//                           <label htmlFor="face">Face/Color</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="nose"
//                             id="nose"
//                           ></textarea>
//                           <label htmlFor="nose">Nose</label>
//                         </div>
//                         <br />
//                         <div className="input-group mb-3">
//                           <span className="input-group-text">Chest</span>
//                           <div className="form-floating">
//                             <textarea
//                               className="form-control"
//                               id="respiratory"
//                               placeholder="Respiratory"
//                             ></textarea>
//                             <label htmlFor="respiratory">Respiratory</label>
//                           </div>
//                           <div className="form-floating">
//                             <textarea
//                               className="form-control"
//                               id="cardiac"
//                               placeholder="Cardiac"
//                             ></textarea>
//                             <label htmlFor="cardiac">Cardiac</label>
//                           </div>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="abdomen"
//                             id="abdomen"
//                           ></textarea>
//                           <label htmlFor="abdomen">Abdomen/Pelvis</label>
//                         </div>
//                         <br />
//                         <div className="input-group mb-3">
//                           <span className="input-group-text">Genitalia</span>
//                           <div className="form-floating">
//                             <textarea
//                               className="form-control"
//                               id="menses"
//                               placeholder="Menses"
//                             ></textarea>
//                             <label htmlFor="menses">Menses</label>
//                           </div>
//                           <div className="form-floating">
//                             <textarea
//                               className="form-control"
//                               id="genitalia"
//                               placeholder="Genitalia"
//                             ></textarea>
//                             <label htmlFor="genitalia">Genitalia</label>
//                           </div>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="limb"
//                             id="limb"
//                           ></textarea>
//                           <label htmlFor="limb">Limb</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="back"
//                             id="back"
//                           ></textarea>
//                           <label htmlFor="back">Back/Lumber</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "13vh" }}
//                             placeholder="skin"
//                             id="skin"
//                           ></textarea>
//                           <label htmlFor="skin">
//                             Skin/Condition/Perspiration
//                           </label>
//                         </div>
//                         <br />
//                       </div>
//                     </form>
//                   </div>
//                   <div id="vitals" className="tab-pane fade">
//                     <form action="">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3>Vitals</h3>
//                         <button type="submit" className="btn btn-success ">
//                           Save
//                         </button>
//                       </div>

//                       <div id="content">
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="appetite"
//                             id="appetite"
//                           ></textarea>
//                           <label htmlFor="appetite">Appetite</label>
//                         </div>
//                         <br />

//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="thirst"
//                             id="thirst"
//                           ></textarea>
//                           <label htmlFor="thirst">Thirst</label>
//                         </div>
//                         <br />

//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="stool"
//                             id="stool"
//                           ></textarea>
//                           <label htmlFor="stool">Stool</label>
//                         </div>
//                         <br />

//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="urine"
//                             id="urine"
//                           ></textarea>
//                           <label htmlFor="urine">Urine</label>
//                         </div>
//                         <br />

//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="sleep"
//                             id="sleep"
//                           ></textarea>
//                           <label htmlFor="sleep">Sleep/Dream</label>
//                         </div>
//                         <br />

//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="discharge"
//                             id="discharge"
//                           ></textarea>
//                           <label htmlFor="discharge">Discharge (if any)</label>
//                         </div>
//                         <br />
//                       </div>
//                     </form>
//                   </div>
//                   <div id="symptoms" className="tab-pane fade">
//                     <form action="">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3>Symptoms and Conditions</h3>
//                         <button type="submit" className="btn btn-success ">
//                           Save
//                         </button>
//                       </div>
//                       <div id="content">
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="addiction"
//                             id="addiction"
//                           ></textarea>
//                           <label htmlFor="addiction">Addiction (if any)</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="desire"
//                             id="desire"
//                           ></textarea>
//                           <label htmlFor="desire">Desire</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="aversion"
//                             id="aversion"
//                           ></textarea>
//                           <label htmlFor="aversion">Aversion</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="aggravation"
//                             id="aggravation"
//                           ></textarea>
//                           <label htmlFor="aggravation">Aggravation</label>
//                         </div>
//                         <br />
//                         <div className="form-floating">
//                           <textarea
//                             className="form-control"
//                             style={{ minHeight: "10vh" }}
//                             placeholder="amelioration"
//                             id="amelioration"
//                           ></textarea>
//                           <label htmlFor="amelioration">Amelioration</label>
//                         </div>
//                         <br />
//                       </div>
//                     </form>
//                   </div>
//                   <div id="lab" className="tab-pane fade">
//                     <form action="">
//                       <div id="lab-fields">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                           <h3>Lab Tests</h3>
//                           <button type="submit" className="btn btn-success ">
//                             Save
//                           </button>
//                         </div>
//                         <div id="content">
//                           <div
//                             className="input-group mb-2"
//                             style={{ minHeight: "7vh" }}
//                           >
//                             <select
//                               name="lab[]"
//                               id="option"
//                               className="form-select"
//                               aria-label="status-select"
//                               style="border-top-left-radius: 10px; border-bottom-left-radius: 10px;"
//                             >
//                               <option selected>Select Lab Test</option>
//                               <option>Blood Test</option>
//                               <option>Biopsy</option>
//                             </select>
//                             <input
//                               type="date"
//                               style={{ minHeight: "7vh" }}
//                               name="dt[]"
//                               className="form-control "
//                               aria-label="Sizing example input"
//                               aria-describedby="inputGroup-sizing-default"
//                               placeholder="Enter DOB"
//                             />

//                             <input
//                               name="remarks[]"
//                               style={{ minHeight: "7vh", width: "400px" }}
//                               type="text"
//                               className="form-control "
//                               id="lab_remarks"
//                               aria-label="Sizing example input"
//                               aria-describedby="inputGroup-sizing-default"
//                               placeholder="Remarks"
//                             />
//                             <input
//                               className="form-control  p-3 bg-light  "
//                               style={{ minHeight: "7vh", width: "50px" }}
//                               type="file"
//                               name="file[]"
//                               placeholder=""
//                               aria-label=""
//                               id="file-upload"
//                             />

//                             {/* <!-- <input type="file" className="form-control border-0 vh-10" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"> --> */}
//                             <button
//                               className="btn btn-success"
//                               onclick="savelab()"
//                               type="button"
//                               id="inputGroupFileAddon04"
//                             >
//                               <i className="fa-solid fa-check"></i>
//                             </button>
//                             <button
//                               className="btn btn-danger"
//                               onclick="deletelab(this)"
//                               type="button"
//                               id=""
//                             >
//                               <i className="fa-solid fa-trash"></i>
//                             </button>
//                             <button
//                               className="btn btn-primary"
//                               onclick="addlab()"
//                               type="button"
//                               id=""
//                             >
//                               <i className="fa-solid fa-plus"></i>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-5 p-2  " style={{ padding: "0px" }}>
//               <ul
//                 className="nav  nav-fill rounded-3"
//                 style="border-radius: 20px !important;"
//               >
//                 <li
//                   className="nav-item mb-2"
//                   style={{ paddingLeft: "3px", paddingRight: "3px" }}
//                 >
//                   <a
//                     style={{ textAlign: "center" }}
//                     className="p-3 text nav-link rounded-3 right-nav right-nav-item active"
//                     data-toggle="tab"
//                     href="#home2"
//                   >
//                     Checkup
//                   </a>
//                 </li>
//                 <li
//                   className="nav-item mb-2"
//                   style={{ paddingLeft: "3px", paddingRight: "3px" }}
//                 >
//                   <a
//                     style={{ textAlign: "center" }}
//                     className="p-3 text nav-link rounded-3 right-nav right-nav-item"
//                     data-toggle="tab"
//                     href="#menu12"
//                   >
//                     Prescriptions
//                   </a>
//                 </li>
//                 <li
//                   className="nav-item mb-2"
//                   style="padding-left: 3px; padding-right: 3px;"
//                 >
//                   <a
//                     style={{ textAlign: "center" }}
//                     className="p-3 text nav-link rounded-3 right-nav right-nav-item"
//                     data-toggle="tab"
//                     href="#menu22"
//                   >
//                     Payment
//                   </a>
//                 </li>
//                 <li
//                   className="nav-item mb-2"
//                   style="padding-left: 3px; padding-right: 3px;"
//                 >
//                   <a
//                     style={{ textAlign: "center" }}
//                     className="p-3 text nav-link rounded-3 right-nav right-nav-item"
//                     data-toggle="tab"
//                     href="#menu32"
//                   >
//                     History
//                   </a>
//                 </li>
//               </ul>

//               <div className="tab-content  ">
//                 <div id="home2" className="tab-pane fade show active">
//                   <div
//                     className="rounded-3 p-2 "
//                     style={{ backgroundColor: "#d1d3ab21" }}
//                   >
//                     <div className="input-group ">
//                       <span
//                         className="input-group-text fixed-width p-3 border-0"
//                         id="inputGroup-sizing-default"
//                         style={{
//                           borderTopLeftRadius: "8px",
//                           borderBottomLeftRadius: "8px",
//                           color: "bisque",
//                         }}
//                       >
//                         Date
//                       </span>
//                       <input
//                         type="text"
//                         id="date"
//                         className="form-control border-0"
//                         aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default"
//                         placeholder="Enter Date"
//                       />
//                     </div>
//                     <div className="input-group mt-2">
//                       <span
//                         className="input-group-text fixed-width p-3 border-0"
//                         id="inputGroup-sizing-default"
//                         style={{ color: "bisque", minHeight: "20vh" }}
//                       >
//                         Remarks
//                       </span>
//                       <div className="form-floating">
//                         <textarea
//                           className="form-control border-0"
//                           style={{ minHeight: "20vh" }}
//                           placeholder="Enter Remarks (if any)"
//                         ></textarea>
//                       </div>
//                     </div>
//                     <div className="input-group mt-2">
//                       <span
//                         className="input-group-text fixed-width p-3 border-0"
//                         id="inputGroup-sizing-default"
//                         style={{ color: "bisque" }}
//                       >
//                         Photos
//                       </span>
//                       <input
//                         className="form-control rounded-3 p-3 bg-light border-0 "
//                         style={{
//                           borderTopLeftRadius: "0px",
//                           borderBottomLeftRadius: "0px",
//                         }}
//                         type="file"
//                         name=""
//                         placeholder=""
//                         aria-label=""
//                         id="file-upload"
//                       />
//                     </div>
//                     <button
//                       className="rounded-3 p-3 mt-2 border-0 w-100"
//                       id="save-checkup-button"
//                       style={{
//                         backgroundColor: "#1da453",
//                         color: "white",
//                         fontWeight: "500",
//                       }}
//                     />
//                     SAVE{" "}
//                     <img
//                       src="Images And Icons/arrow-right-solid (1).svg"
//                       style={{
//                         height: "10px",
//                         opacity: "100%",
//                         transform: "translateY(-15%)",
//                       }}
//                       alt=""
//                     />
//                   </div>
//                 </div>
//                 <div id="menu12" className="tab-pane fade">
//                   <div
//                     className="rounded-3 p-2 "
//                     style={{ backgroundColor: "#0e825dc6" }}
//                   >
//                     {/* <!-- <span className="input-group-text fixed-width p-3 border-0" id="inputGroup-sizing-default"
//                                     style="border-top-left-radius:8px;border-bottom-left-radius:8px; color: bisque;">Date</span> --> */}
//                     <input
//                       type="hidden"
//                       id="date"
//                       className="form-control border-0"
//                       aria-label="Sizing example input"
//                       aria-describedby="inputGroup-sizing-default"
//                       placeholder="Enter Date"
//                     />

//                     <div
//                       className=" rounded-3"
//                       style={{ maxHeight: "75vh", overflowY: "auto" }}
//                     >
//                       <div id="input-fields">
//                         <div
//                           className="input-group"
//                           style={{ maxHeight: "70vh" }}
//                         >
//                           <div className="input-group input-group-custom">
//                             <input
//                               type="text"
//                               className="form-control p-3 border-0 rounded-3 me-1"
//                               id="medicine-input"
//                               name="medicine[]"
//                               placeholder="Enter Medicine"
//                               style={{
//                                 backgroundColor: "#ffffff",
//                                 color: "black",
//                                 minWidth: "37%",
//                               }}
//                             />
//                             <input
//                               type="text"
//                               className="form-control p-3 border-0 rounded-3 ms-1 me-1"
//                               id="dose-input"
//                               name="dose[]"
//                               placeholder="Enter Dose"
//                               style={{
//                                 backgroundColor: "#ffffff",
//                                 color: "black",
//                                 minWidth: "37%",
//                               }}
//                             />
//                             <button
//                               type="button"
//                               className="form-control p-2 border-0 rounded-3 me-1 ms-1"
//                               id="remove"
//                               onclick="removeInputFields(this)"
//                               style={{
//                                 backgroundColor: "rgba(255, 0, 0, 0.654)",
//                                 color: "bisque",
//                                 minWidth: "5%",
//                                 textAlign: "center",
//                               }}
//                             >
//                               -
//                             </button>
//                             <button
//                               type="button"
//                               className="form-control p-2 border-0 rounded-3 ms-1"
//                               onclick="addInputFields()"
//                               id="add"
//                               style={{
//                                 backgroundColor: "#1da453",
//                                 color: bisque,
//                                 minWidth: "5%",
//                                 textAlign: "center",
//                               }}
//                             >
//                               +
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       id="payment-button"
//                       className="rounded-3 p-3 mt-2 border-0 w-100"
//                       style={{ backgroundColor: "#019fdece", color: "bisque" }}
//                     >
//                       PAYMENT{" "}
//                       <img
//                         src="Images And Icons/arrow-right-solid (1).svg"
//                         style={{
//                           height: "10px",
//                           opacity: "100%",
//                           transform: "translateY(-15%)",
//                         }}
//                         alt=""
//                       />
//                     </button>
//                   </div>
//                 </div>

//                 <div id="menu22" className="tab-pane fade w-100">
//                   <div
//                     className="  rounded-3 text-align-center  p-2 fs-6"
//                     style={{ minWidth: "100%", backgroundColor: "#0e825dc6" }}
//                   >
//                     {/* <!-- <div className="input-group mt-3 mb-2"> -->
//                             <!-- <span className="input-group-text fixed-width p-3 border-0" id="inputGroup-sizing-default"
//                                     style="border-top-left-radius:8px;border-bottom-left-radius:8px;background-color: #0b6e4f;color: bisque;">Date</span> --> */}
//                     <input
//                       type="hidden"
//                       id="date"
//                       className="form-control border-0 right-align"
//                       aria-label="Sizing example input"
//                       aria-describedby="inputGroup-sizing-default"
//                       placeholder="Enter Date"
//                       style={{ backgroundColor: "#d1d3ab3c" }}
//                     />
//                     {/* <!-- </div> --> */}

//                     <div
//                       className="justify-content-center align-items-center form-control  p-3 rounded-3 input-group-text-right"
//                       style={{ backgroundColor: "#ffffff", color: "black" }}
//                     >
//                       <span>Amount Previously Left to be paid:</span>{" "}
//                       <b>₹400.00</b>
//                     </div>

//                     <div className="input-group mt-2">
//                       <span
//                         className="input-group-text  p-3 border-0"
//                         id="inputGroup-sizing-default"
//                         style={{
//                           backgroundColor: "rgb(255, 255, 255)",
//                           color: "black",
//                           fontWeight: "500",
//                           minWidth: "26%",
//                         }}
//                       >
//                         To be paid{" "}
//                       </span>
//                       <input
//                         type="number"
//                         className="form-control border-0 right-align"
//                         aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default"
//                         style={{
//                           backgroundColor: "rgba(255, 255, 255, 0.801)",
//                         }}
//                         placeholder="Enter Here  "
//                       />
//                     </div>
//                     <div className="input-group mt-2">
//                       <span
//                         className="input-group-text  p-3 border-0"
//                         id="inputGroup-sizing-default"
//                         style={{
//                           backgroundColor: "rgb(255, 255, 255)",
//                           color: "black",
//                           fontWeight: "500",
//                           minWidth: "26%",
//                         }}
//                       >
//                         Amount paid
//                       </span>
//                       <input
//                         type="number"
//                         className="form-control border-0 right-align"
//                         aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default"
//                         style={{
//                           backgroundColor: "rgba(255, 255, 255, 0.801)",
//                         }}
//                         placeholder="Enter Here  "
//                       />
//                     </div>

//                     <div
//                       className="justify-content-center form-control align-items-center  p-3 rounded-3 mt-2 input-group-text-right"
//                       style={{ backgroundColor: "#ffffff", color: "black" }}
//                     >
//                       <span className="">
//                         Amount that will be left to be paid:
//                       </span>{" "}
//                       <b>₹400.00</b>
//                     </div>

//                     <button
//                       className="rounded-3 p-3 mt-2 border-0 w-100"
//                       id="save-payment-button"
//                       style={{
//                         backgroundColor: "#1da453",
//                         color: "white",
//                         fontWeight: "500",
//                       }}
//                     >
//                       SAVE <i className="fa-solid fa-check"></i>
//                     </button>
//                   </div>
//                 </div>

//                 <div id="menu32" className="tab-pane fade w-100">
//                   <div className="w-100">
//                     <div
//                       className="history-div rounded-3"
//                       style={{ maxHeight: "100vh", overflowY: scroll }}
//                     >
//                       <div
//                         className="justify-content-center align-items-center mb-1 mt-1 p-1  rounded-3"
//                         style={{ backgroundColor: "#d1d3ab" }}
//                       >
//                         <div className="input-group">
//                           <span
//                             className="p-3 border-0 rounded-3 w-100 mb-1"
//                             id="inputGroup-sizing-default"
//                             style={{
//                               backgroundColor: "#0b6e4fef",
//                               color: "bisque",
//                               textAlign: "center",
//                               fontWeight: "600",
//                               fontSize: "20px",
//                             }}
//                           >
//                             30/10/2004
//                           </span>
//                           <span
//                             className="p-3 border-0 rounded-3 me-auto"
//                             id="inputGroup-sizing-default"
//                             style={{
//                               backgroundColor: "#0b6e4fef",
//                               color: "bisque",
//                               width: "50%",
//                             }}
//                           >
//                             <p>
//                               Lorem ipsum dolor sit, amet consectetur
//                               adipisicing elit. Voluptas asperiores dolores
//                               maiores fugit facilis ipsam ab, m, nemo provident
//                               quae ad{" "}
//                             </p>
//                           </span>
//                           <span
//                             className="p-3 border-0 rounded-3 ms-auto"
//                             id="inputGroup-sizing-default"
//                             style={{
//                               backgroundColor: "#0b6e4fef",
//                               color: "bisque",
//                               width: "49%",
//                             }}
//                           >
//                             <p>Medicine No. 1 x 3 Doze</p>
//                             <p>Medicine No. 1 x 3 Doze</p>
//                             <p>Medicine No. 1 x 3 Doze</p>
//                             <p>Medicine No. 1 x 3 Doze</p>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Input;

import React, { useState, useEffect } from "react";

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
                    History
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
                  <form>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Personal Details</h3>
                      <button type="submit" className="btn btn-success">
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
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div id="history" className="tab-pane fade">
                  <form action="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>History</h3>
                      <button type="submit" className="btn btn-success">
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
                        ></textarea>
                        <label htmlFor="cause">Cause of Disease if any</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="measurements" className="tab-pane fade">
                  <form action="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Measurements</h3>
                      <button type="submit" className="btn btn-success">
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
                              />
                              <label htmlFor="systolic">Systolic (mm Hg)</label>
                            </div>
                            <span className="input-group-text">/</span>
                            <div className="form-floating">
                              <input
                                type="number"
                                className="form-control"
                                id="diastolic"
                                placeholder="Diastolic"
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
                <div id="observations" className="tab-pane fade">
                  <form action="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>General Observations</h3>
                      <button type="submit" className="btn btn-success ">
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
                          ></textarea>
                          <label htmlFor="respiratory">Respiratory</label>
                        </div>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="cardiac"
                            placeholder="Cardiac"
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
                          ></textarea>
                          <label htmlFor="menses">Menses</label>
                        </div>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="genitalia"
                            placeholder="Genitalia"
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
                  <form action="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Vitals</h3>
                      <button type="submit" className="btn btn-success ">
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
                        ></textarea>
                        <label htmlFor="discharge">Discharge (if any)</label>
                      </div>
                      <br />
                    </div>
                  </form>
                </div>
                <div id="symptoms" className="tab-pane fade">
                  <form action="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Symptoms and Conditions</h3>
                      <button type="submit" className="btn btn-success ">
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
                  <form>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>Lab Tests</h3>
                      <button type="submit" className="btn btn-success">
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
          <div className="col-md-5 p-2" style={{ padding: "0px" }}>
            <ul
              className="nav nav-fill rounded-3"
              style={{ borderRadius: "20px !important" }}
            >
              <li
                className="nav-item mb-2"
                style={{ paddingLeft: "3px", paddingRight: "3px" }}
              >
                <a
                  style={{ textAlign: "center" }}
                  className="p-3 text nav-link rounded-3 right-nav right-nav-item active"
                  data-toggle="tab"
                  href="#home2"
                >
                  Checkup
                </a>
              </li>
              <li
                className="nav-item mb-2"
                style={{ paddingLeft: "3px", paddingRight: "3px" }}
              >
                <a
                  style={{ textAlign: "center" }}
                  className="p-3 text nav-link rounded-3 right-nav right-nav-item"
                  data-toggle="tab"
                  href="#menu12"
                >
                  Prescriptions
                </a>
              </li>
              <li
                className="nav-item mb-2"
                style={{ paddingLeft: "3px", paddingRight: "3px" }}
              >
                <a
                  style={{ textAlign: "center" }}
                  className="p-3 text nav-link rounded-3 right-nav right-nav-item"
                  data-toggle="tab"
                  href="#menu22"
                >
                  Payment
                </a>
              </li>
              <li
                className="nav-item mb-2"
                style={{ paddingLeft: "3px", paddingRight: "3px" }}
              >
                <a
                  style={{ textAlign: "center" }}
                  className="p-3 text nav-link rounded-3 right-nav right-nav-item"
                  data-toggle="tab"
                  href="#menu32"
                >
                  History
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="home2" className="tab-pane fade show active">
                <div
                  className="rounded-3 p-2"
                  style={{ backgroundColor: "#d1d3ab21" }}
                >
                  <div className="input-group">
                    <span
                      className="input-group-text fixed-width p-3 border-0"
                      id="inputGroup-sizing-default"
                      style={{
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                        color: "bisque",
                      }}
                    >
                      Date
                    </span>
                    <input
                      type="text"
                      id="date"
                      className="form-control border-0"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="Enter Date"
                    />
                  </div>

                  <div className="input-group mt-2">
                    <span
                      className="input-group-text fixed-width p-3 border-0"
                      id="inputGroup-sizing-default"
                      style={{ color: "bisque", minHeight: "20vh" }}
                    >
                      Remarks
                    </span>
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        style={{ minHeight: "20vh" }}
                        placeholder="Enter Remarks (if any)"
                      ></textarea>
                    </div>
                  </div>
                  <div className="input-group mt-2">
                    <span
                      className="input-group-text fixed-width p-3 border-0"
                      id="inputGroup-sizing-default"
                      style={{ color: "bisque" }}
                    >
                      Photos
                    </span>
                    <input
                      className="form-control rounded-3 p-3 bg-light border-0"
                      style={{
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                      type="file"
                      placeholder=""
                      aria-label=""
                      id="file-upload"
                    />
                  </div>
                  <button
                    className="rounded-3 p-3 mt-2 border-0 w-100"
                    id="save-checkup-button"
                    style={{
                      backgroundColor: "#1da453",
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    SAVE{" "}
                    <img
                      src="Images And Icons/arrow-right-solid (1).svg"
                      style={{
                        height: "10px",
                        opacity: "100%",
                        transform: "translateY(-15%)",
                      }}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div id="menu12" className="tab-pane fade">
                <div
                  className="rounded-3 p-2"
                  style={{ backgroundColor: "#0e825dc6" }}
                >
                  <input
                    type="hidden"
                    id="date"
                    className="form-control border-0"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Enter Date"
                  />
                  <div
                    className="rounded-3"
                    style={{ maxHeight: "75vh", overflowY: "auto" }}
                  >
                    <div id="input-fields">
                      <div
                        className="input-group"
                        style={{ maxHeight: "70vh" }}
                      >
                        <div className="input-group input-group-custom">
                          <input
                            type="text"
                            className="form-control p-3 border-0 rounded-3 me-1"
                            id="medicine-input"
                            name="medicine[]"
                            placeholder="Enter Medicine"
                            style={{
                              backgroundColor: "#ffffff",
                              color: "black",
                              minWidth: "37%",
                            }}
                          />
                          <input
                            type="text"
                            className="form-control p-3 border-0 rounded-3 ms-1 me-1"
                            id="dose-input"
                            name="dose[]"
                            placeholder="Enter Dose"
                            style={{
                              backgroundColor: "#ffffff",
                              color: "black",
                              minWidth: "37%",
                            }}
                          />
                          <button
                            type="button"
                            className="form-control p-2 border-0 rounded-3 me-1 ms-1"
                            id="remove"
                            onClick={() => removeInputFields(this)}
                            style={{
                              backgroundColor: "rgba(255, 0, 0, 0.654)",
                              color: "bisque",
                              minWidth: "5%",
                              textAlign: "center",
                            }}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            className="form-control p-2 border-0 rounded-3 ms-1"
                            onClick={() => addInputFields()}
                            id="add"
                            style={{
                              backgroundColor: "#1da453",
                              color: "bisque",
                              minWidth: "5%",
                              textAlign: "center",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    id="payment-button"
                    className="rounded-3 p-3 mt-2 border-0 w-100"
                    style={{ backgroundColor: "#019fdece", color: "bisque" }}
                  >
                    PAYMENT{" "}
                    <img
                      src="Images And Icons/arrow-right-solid (1).svg"
                      style={{
                        height: "10px",
                        opacity: "100%",
                        transform: "translateY(-15%)",
                      }}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div id="menu22" className="tab-pane fade w-100">
                <div
                  className="rounded-3 text-align-center p-2 fs-6"
                  style={{ minWidth: "100%", backgroundColor: "#0e825dc6" }}
                >
                  <input
                    type="hidden"
                    id="date"
                    className="form-control border-0 right-align"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Enter Date"
                    style={{ backgroundColor: "#d1d3ab3c" }}
                  />
                  <div
                    className="justify-content-center align-items-center form-control p-3 rounded-3 input-group-text-right"
                    style={{ backgroundColor: "#ffffff", color: "black" }}
                  >
                    <span>Amount Previously Left to be paid:</span>{" "}
                    <b>₹400.00</b>
                  </div>
                  <div className="input-group mt-2">
                    <span
                      className="input-group-text p-3 border-0"
                      id="inputGroup-sizing-default"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        color: "black",
                        fontWeight: 500,
                        minWidth: "26%",
                      }}
                    >
                      To be paid
                    </span>
                    <input
                      type="number"
                      className="form-control border-0 right-align"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.801)" }}
                      placeholder="Enter Here"
                    />
                  </div>
                  <div className="input-group mt-2">
                    <span
                      className="input-group-text p-3 border-0"
                      id="inputGroup-sizing-default"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        color: "black",
                        fontWeight: 500,
                        minWidth: "26%",
                      }}
                    >
                      Amount paid
                    </span>
                    <input
                      type="number"
                      className="form-control border-0 right-align"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.801)" }}
                      placeholder="Enter Here"
                    />
                  </div>
                  <div
                    className="justify-content-center form-control align-items-center p-3 rounded-3 mt-2 input-group-text-right"
                    style={{ backgroundColor: "#ffffff", color: "black" }}
                  >
                    <span>Amount that will be left to be paid:</span>{" "}
                    <b>₹400.00</b>
                  </div>
                  <button
                    className="rounded-3 p-3 mt-2 border-0 w-100"
                    id="save-payment-button"
                    style={{
                      backgroundColor: "#1da453",
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    SAVE <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>
              <div id="menu32" className="tab-pane fade w-100">
                <div className="w-100">
                  <div
                    className="history-div rounded-3"
                    style={{ maxHeight: "100vh", overflowY: "scroll" }}
                  >
                    <div
                      className="justify-content-center align-items-center mb-1 mt-1 p-1 rounded-3"
                      style={{ backgroundColor: "#d1d3ab" }}
                    >
                      <div className="input-group">
                        <span
                          className="p-3 border-0 rounded-3 w-100 mb-1"
                          id="inputGroup-sizing-default"
                          style={{
                            backgroundColor: "#0b6e4fef",
                            color: "bisque",
                            textAlign: "center",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          30/10/2004
                        </span>
                        <span
                          className="p-3 border-0 rounded-3 me-auto"
                          id="inputGroup-sizing-default"
                          style={{
                            backgroundColor: "#0b6e4fef",
                            color: "bisque",
                            width: "50%",
                          }}
                        >
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptas asperiores dolores maiores fugit
                            facilis ipsam ab, nemo provident quae ad{" "}
                          </p>
                        </span>
                        <span
                          className="p-3 border-0 rounded-3 ms-auto"
                          id="inputGroup-sizing-default"
                          style={{
                            backgroundColor: "#0b6e4fef",
                            color: "bisque",
                            width: "49%",
                          }}
                        >
                          <p>Medicine No. 1 x 3 Doze</p>
                          <p>Medicine No. 1 x 3 Doze</p>
                          <p>Medicine No. 1 x 3 Doze</p>
                          <p>Medicine No. 1 x 3 Doze</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
