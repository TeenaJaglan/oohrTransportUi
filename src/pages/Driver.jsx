import React from "react";

const Driver=()=>{
    return (
        <>
        {/* 
        _______________________IMPORTANT DRIVER DETAILS__________________________________________
        */}
            <div className="bg-white rounded shadow m-3 p-3">
        <h3 className="bg-success m-3 text-white shadow">DRIVER DETAILS</h3>
      <div className="m-3 p-2">
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">Driver Name:</div>
          <div className="col m-1 border border-success rounded">Abhay Kumar</div>
        </div>
        
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">Address:</div>
          <div className="col m-1 border border-success rounded">
            Ambala
          </div>
        </div>
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">Mobile No.:</div>
          <div className="col m-1 border border-success rounded">+91-XXXXX-XXXXX</div>
        </div>
        <div className="row">
              <div className="col m-1 bg-success text-white rounded">E-Mail:</div>
              <div className="col m-1 border border-success rounded">XXXXXXXXXXXXXXXXXX</div>
            </div>
      </div>


      {/*
       ________________________________________MORE DETAILS, DROPDOWN ______________________________________________________
       */}
      <div className="dropdown m-3">
        <button
          className="shadow bg-success text-white w-100 btn border border-success dropdown-toggle"
          type="button"
        >
          <h4 className="pr-5">
          More Details
            </h4>
        </button>
        {/* <div className="dropdown-menu"> */}
          <div className="container dropdown-item mt-3">
            <div className="row">
              <div className="col m-1 bg-success text-white w-75 rounded">Age(in years):</div>
              <div className="col m-1 border border-success rounded">50</div>
            </div>
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">Driving Licence No:</div>
              <div className="col m-1 border border-success rounded">XXXXXXXXX</div>
            </div>
            
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">Vehicle number</div>
              <div className="col m-1 border border-success rounded">XXXXXXXXXXXXXXX</div>
            </div>
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">Aadhaar No.:</div>
              <div className="col m-1 border border-success rounded">4606 XXXX XXXX</div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Driver