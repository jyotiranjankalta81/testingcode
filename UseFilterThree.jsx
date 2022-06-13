import React from "react";
import "./UseFilterThree.css";

export default function UseFilterThree() {
  return (
    <div>
      <div className="usefilter3_container">
        <div className="usefilter3_form">
          <form>
            <div className="checkboxRS">
              <h3>Rotational Shift</h3>
              <div className="checkboxRS_container">
                <div className="checkbpx_yes_container">
                  <input type="checkbox" />
                  <label className="containerc1">Yes </label>
                </div>
                <div className="checkbox_no_container">
                  <input type="checkbox" />
                  <label className="containerc1">NO</label>
                </div>
              </div>
            </div>
            <div className="checkboxRS">
              <h3>Shift</h3>
              <div className="checkboxRS_container">
                <div className="checkbox_yes_container">
                  <input type="checkbox" />
                  <label className="containerc1">Night</label>
                </div>
                <div className="checkbox_no_container">
                <input type="checkbox" />

<label className="containerc1">Day</label>
                </div>

              </div>
            </div>
            <div className="form-row3">
              <label htmlFor="GET"> GET</label>
              <input type="text" placeholder="GET" name="Name" />
            </div>
            <div className="form-row3">
              <label htmlFor="Relocation"> Relocation</label>
              <input type="text" placeholder="Relocation" name="Name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
