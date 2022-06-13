import React from 'react'
import "./UseFilterOne.css"

export default function UseFilterOne() {
  return (
    <div className="usefilter1_container">
      <div className="usefilter1_form">
          <form>
              <div className="linkedin_LI">
                  <label htmlFor="linkedin">Linkedin Profile</label>
                  <select id="lp">
                  <option value="lp"> Linkedin Profile</option>
                  <option value></option>
                  <option ></option>
                  <option ></option>


              </select>

              </div>
              <div className="form-row">
            <label htmlFor="dob"> DOB</label>
            <input type="text" placeholder="DOB" name="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="salary"> Salary</label>
            <input type="text" placeholder="Salary" name="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="Last Drawn Salary"> Last Drawn Salary</label>
            <input type="text" placeholder="Last Drawn Salary" name="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="company"> DOB</label>
            <input type="text" placeholder="Company" name="Name" />
          </div>

          </form>
      </div>
    </div>
  )
}
