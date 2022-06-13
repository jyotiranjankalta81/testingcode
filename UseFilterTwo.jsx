import React from 'react'
import "./UseFilterTwo.css"

export default function UseFilterTwo() {
  return (
    <div>
          <div className="usefilter2_container">
      <div className="usefilter2_form">
          <form>
              <div className="collg_uni_LI">
                  <label htmlFor="CU"></label>
                  <select id="lp">
                  <option value="lp"> College/University</option>
                  <option value></option>
                  <option ></option>
                  <option ></option>


              </select>

              </div>
              <div className="form-row">
            <label htmlFor="NP"> Notice Period</label>
            <input type="text" placeholder="Notice Period" name="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="Degree"> Degree</label>
            <input type="text" placeholder="Degree" name="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="Locations"> Locations</label>
            <input type="text" placeholder="Locations" name="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="Language Preferences"> Language Preferences</label>
            <input type="text" placeholder="Language Preferences" name="Name" />
          </div>

          </form>
      </div>
    </div>

    </div>
  )
}
