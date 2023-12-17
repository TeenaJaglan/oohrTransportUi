import React from "react";

const Parent = () => {
  return (
    <>
    <div className="bg-white rounded shadow m-3 p-3">
        <h3 className="bg-success m-3 text-white shadow">STUDENT DETAILS</h3>
      <div className="m-3 p-2">
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">Student Name:</div>
          <div className="col m-1 border border-success rounded">Tanishq Garg</div>
        </div>
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">School Name & Address:</div>
          <div className="col m-1 border border-success rounded">The Sirsa School, Barnala Road, Sirsa</div>
        </div>
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">House Address:</div>
          <div className="col m-1 border border-success rounded">
            #90/B-2, Gali Peer Wali, Geeta Bhawan, Sirsa
          </div>
        </div>
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">Mobile No. (Parent):</div>
          <div className="col m-1 border border-success rounded">+91-98961-00789</div>
        </div>
        <div className="row">
          <div className="col m-1 bg-success text-white rounded">Mobile No.(Student):</div>
          <div className="col m-1 border border-success rounded">+91-79884-18770</div>
        </div>
      </div>


      {/*
       MORE DETAILS, DROPDOWN ______________________________________________________
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
              <div className="col m-1 border border-success rounded">20</div>
            </div>
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">School Scholar No:</div>
              <div className="col m-1 border border-success rounded">650</div>
            </div>
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">E-Mail (Parent):</div>
              <div className="col m-1 border border-success rounded">tanishqgarg002@gmail.com</div>
            </div>
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">E-Mail (Student):</div>
              <div className="col m-1 border border-success rounded">tanishqgarg002@gmail.com</div>
            </div>
            <div className="row">
              <div className="col m-1 bg-success text-white rounded">Aadhaar No.:</div>
              <div className="col m-1 border border-success rounded">4606 XXXX XXXX</div>
            </div>
          </div>
        </div>
      </div>
     {/* </div> */}
    </>
  );
};

export default Parent;
