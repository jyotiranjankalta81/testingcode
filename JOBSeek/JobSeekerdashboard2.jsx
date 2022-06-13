import {Add} from "@mui/icons-material";
import Eye from "../assets/eye.png"
import Hr from "../assets/hr.png"
import Share from "../assets/share.png"
import Saved from "../assets/saved.png"
import { useState } from "react";
import SharePopup from "./SharePopup"
import HrpingPopup from "./HrpingPopup"
import ApplyPopup from "./ApplyPopup";
import React from "react";
import "./JobSeekerdashboard.css";
import LOGO from "../assets/Logo.png";
import {RiMenuLine} from "react-icons/ri"
import DropDown from "../DropDown/DropDown";
import Background from "../assets/background.png"
import ProfilePic from "../assets/Profilephoto.svg";
import Data from "../../JOBSeekerDashboardData";
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Notification from "../assets/notification.png"
export default function JobSeekerdashboard() {
  const[dropdown ,setDropdown]=useState(false)
  const sideBarCollapsed=localStorage.getItem("sideBar-collapsed")
const[isExpanded,setIsExpanded]=useState(sideBarCollapsed ? true : false
  );
const handleToggler=()=>{
    if(isExpanded) {
        setIsExpanded(false);
        localStorage.setItem("sideBar-collapsed", true);
        return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sideBar-collapsed");

}


  return (
    <div className="Jobseekerdashboard-Container" style={{ backgroundImage: `url(${Background})` }}>
      <div className={isExpanded ? "SideBar" : "SideBar collapsed"}>
        <div className="Side-Bar-Logo">
        <RiMenuLine className="sidebar-icon" onClick={handleToggler}/>

          <img src={LOGO} alt="" />
        </div>
        <div className="Dashboard-SideBar">
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Jobs Available
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
                       <button className="DropDown-Category-BTN">
              Applied Jobs
            </button>

          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Track Your Jobs
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Saved Jobs
            </button>

          </div>
          {/* <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              PET
            </button>
          </div> */}
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              GET
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Connect HR
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Track Referral
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
            Blogs
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Freelance World
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Certifications
            </button>
          </div>
        </div>
      </div>
      <div className="Jobseekerdashboard-Row">
        <div className="JOBS-Section">
          <div className="Profile-Tab">
            <div className="Welcome-Section">
              <h3>Welcome:</h3>
              <h3>FINDMYNEXT</h3>
            </div>
            <div className="Faq_FB">
              <button className="faq_fb">FAQ</button>
              <button className="faq_fb">FEEDBACK</button>

            </div>

            <div className="Profile-Section">
              <img  onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}src={ProfilePic} alt="-" />
              {dropdown &&<DropDown/>}
              <h3>Akash Singh</h3>
              <h4>Profile Complete:50%</h4>
            </div>
            <div className="credit_notification">
              <div className="credit">
                <p>100 INR</p>
                <h3>Credits</h3>
              </div>
              <div className="notification_tab">
              {/* <CircleNotificationsIcon/> */}
<img src={Notification} alt="" />
              </div>
            </div>

          </div>
          <div className="input_fieldd">
            <div className="inputfieldd">
            <input type="text" placeholder="Search" name="Dates"/>

            </div>

          </div>

          <div className="JOB-Seeker-Cards-Section">
            {Data.map((CardList, index) => (
              <JobsListCards key={index} {...CardList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function JobsListCards(props) {
  const[shareFamily,setShareFamily] =useState(false);
  const[pingHr,setPingHr] =useState(false);
  const[applyJob,setApplyJob] =useState(false);


  const { Name, Experience, JobMode, Skills, Income } = props;
  return (
    <div className="JOB-Seeker-Card">
      <div className="JOB-Card">
        <div className="JOB-Name">
          <h2>{Name}</h2>
          <h4>{Experience}</h4>
        </div>
        <div className="JOB-Skills">
          <h4>{JobMode}</h4>
          <h4>{Skills}</h4>
        </div>
        <div className="Earning">
          <h4>{Income}</h4>
        </div>
        <div className="jobseeker_btns">
        <div className="Apply-JOB-Button">
          <button className="Apply-JOB-BTN" onClick={()=>{setApplyJob(true);}}>Apply</button>
          {applyJob && <ApplyPopup Apply={setApplyJob}/>}

        </div>
        <div className="Reaction-Buttons">
        <button className="RB">
          {" "}
          <img src={Eye} alt=""  />{" "}
        </button>
        <button className="RB" onClick={()=>{setShareFamily(true);}}>

          <img src={Share} alt="" />
        </button>
        {shareFamily && <SharePopup Share={setShareFamily}/>}

        <button className="RBH" onClick={()=>{setPingHr(true);}}>
          <img src={Hr} alt="" />

        </button>
        {pingHr && <HrpingPopup Ping={setPingHr}/>}

        <button className="RBS">
          {" "}
          <img src={Saved}alt="" />{" "}
        </button>
      </div>
        </div>


      </div>
    </div>
  );
}
