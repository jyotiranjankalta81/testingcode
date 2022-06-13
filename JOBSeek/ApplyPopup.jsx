import React from 'react'
import "./ApplyPopup.css"

export default function ApplyPopup({Apply}) {
  return (
    <div className="applypp_container">
        <div className="apply-container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              Apply(false);
            }}
          >
            X
          </button>
        </div>

            <div className="apply_content">
                <div className="apply_heading">
                    {/* <h2>Q1</h2>
                    <h2>Why do you think you are good fit</h2> */}
                    <form>
  <p><label for="Apply">Q1 Why do you think you are good fit</label></p>
  <textarea ></textarea>
  <br/>
  {/* <input type="submit" value="Submit"/> */}
</form>
<div className="btn_ns">
    <button className="btn_grp_ns">Next</button>
    <button className="btn_grp_ns">Skip</button>

</div>

                </div>

            </div>
        </div>
      
    </div>
  )
}
