import React from 'react'
import "./UseFilterFour.css"

export default function UseFilterFour() {
  return (
    <div className="usefilter1_container">
    <div className="usefilter1_form">
        <form>
            <div className="form-row4">
          <label htmlFor="dob"> Department</label>
          <input type="text" placeholder="Department" name="Name" />
        </div>
        <div className="form-row4">
          <label htmlFor="Job/Title"> Job/Title</label>
          <input type="text" placeholder="Job/Title" name="Name" />
        </div>
        <div className="form-row4">
          <label htmlFor="Salary/Stiphend"> Salary/Stiphend</label>
          <input type="text" placeholder="Salary/Stiphend" name="Name" />
        </div>
        <div className="form-row4">
          <label htmlFor="cTC"> CTC</label>
          <input type="text" placeholder="CTC" name="Name" />
        </div>

        </form>
    </div>
  </div>

  )
}
