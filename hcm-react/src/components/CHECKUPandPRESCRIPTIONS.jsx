function CHECKUPandPRESCRIPTIONS() {
  async function PushCheckupData(val) {
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
  return (
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
                style={{
                  color: "bisque",
                  backgroundColor: "black !important",
                }}
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
                <div className="input-group" style={{ maxHeight: "70vh" }}>
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
              <b id="prev_amt">₹400.00</b>
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
                id="present_amt"
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
                id="paid_amt"
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
              <b id="left_amt">₹400.00</b>
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas asperiores dolores maiores fugit facilis ipsam
                      ab, nemo provident quae ad{" "}
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
  );
}

export default CHECKUPandPRESCRIPTIONS;
