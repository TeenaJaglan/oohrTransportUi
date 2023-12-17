import React from 'react'
import "../pagesCSS/Driver_detail.css"

function Child_detail() {
  return (
    <>
      <div className='childDetail_section'>
          <div className='section_1'>
            <h1>Fill Up the Child Detail</h1>
            <form action="./backend.php">
              <label htmlFor="name" className='text'>Name</label>
              <input type="text" name="name" id="name"/>
              <label htmlFor="phone_no">Phone Number</label>
              <input type="number" name="phone_no" id="phone_no" />
              <label htmlFor="school_name">School Name</label>
              <input type="text" name="school_name" id="school_name" />
              {/* <label htmlFor="licence_no">Licence Number</label>
              <input type="number" name="licence_no" id="licence_no" /> */}
              <button type='submit' className='btn'>Submit</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default Child_detail
