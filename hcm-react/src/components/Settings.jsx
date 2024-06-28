import React from 'react';

function Settings() {
  const togglePasswordVisibility = () => {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    passwordField.setAttribute(
      'type',
      passwordFieldType === 'password' ? 'text' : 'password'
    );
  };

  return (
    <div style={{ backgroundColor: '#0b6e4f', height: '100vh' }} className="d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="bg-white mx-5 w-50 rounded-3 text-align-center mt-5 p-3 fs-6" style={{ minWidth: '100%' }}>
          <form method="POST" action="">
            <div className="input-group mb-3">
              <span className="input-group-text p-3" style={{ backgroundColor: '#0b6e4f', color: 'bisque' }}>File No.</span>
              <input type="number" name="file_number" className="form-control right-align" aria-label="File Number" style={{ backgroundColor: '#d1d3ab' }} placeholder="Enter File Number" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text p-3" style={{ backgroundColor: '#0b6e4f', color: 'bisque' }}>Password</span>
              <input type="password" name="password" id="password" className="form-control right-align" aria-label="Password" style={{ backgroundColor: '#d1d3ab' }} placeholder="Enter Password" />
              <div className="input-group-append">
                <button type="button" className="btn rounded-0 h-100 bg-light" style={{ borderRadius: '0px 10px 10px 0px !important' }} onClick={togglePasswordVisibility}>
                  <i className="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
            <button type="submit" className="rounded-3 p-3 border-0 w-100" style={{ backgroundColor: '#1da453', color: 'white', fontWeight: '500' }}>
              SAVE <i className="fa-solid fa-check"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
