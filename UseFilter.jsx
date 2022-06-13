import React,{useState} from 'react'
import UseFilterOne from './UseFilterOne';
import UseFilterTwo from './UseFilterTwo';
import UseFilterThree from './UseFilterThree';
import UseFilterFour from "./UseFilterFour"
import Funnel from "../assets/funnel.png"
import "./UseFilter.css"
export default function UseFilter() {
    const[page,setPage]=useState(0);
    const PageDisplay= () =>{
        if (page=== 0){
        return<UseFilterOne/>;

    }
    else if (page===1){
        return<UseFilterTwo/>;
        
    }else if(page===2){
        return<UseFilterThree/>
    }
    else{
        return<UseFilterFour/>
    }
}
  return (
    <div className="usefilter_form_container">
      <div className="usefilter_header">
          <img src={Funnel} alt="" />
          <h3>Filters</h3>
          <button className="skip_btn">Skip</button>
      </div>
      <div className="UF_form_container">
          <div className="form_container_body">{PageDisplay ()}</div>
          <div className="form_container_footer">
              <button className="form_btn">Save</button>
              <button className="form_btn" onClick={()=>{setPage((currPage)=>currPage+1)}}>Next</button>

          </div>
      </div>
    </div>
  )
}
