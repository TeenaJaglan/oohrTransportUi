import React from "react";
import "../pagesCSS/Contact.css";

const Contact=()=>{
    return (
        <>
        <div className="w-full flex items-center justify-center">
            <div className="bg-white rounded p-2 m-3 w-[500px] shadow">
                <form className=" border border-success m-3 p-3 rounded">
                <h2 className="bg-success text-white rounded mb-4 p-3">CONTACT US</h2>
                <p className="fs-5">Fill out this form, we'll get in touch with you soon!</p>
                    <div className="mb-3">
                        <label className="form-label fs-5 " htmlFor="name">Name:</label>
                        <input type="text" className="border border-success mb-3 form-control" id="name" autoComplete="name"/>
                            
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-5" htmlFor="email">E-Mail:</label>
                        <input type="email" className="border border-success form-control" id="email" autoComplete="email"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-5" htmlFor="phone_no">Mobile Number:</label>
                        <input type="tel" className="border border-success form-control" id="phone_no" autoComplete="off"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-5 align-left" htmlFor="subject">Subject:</label>
                        <input type="text" className="border border-success form-control" id="subject"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-5" htmlFor="message">Message:</label>
                        <textarea className="border border-success form-control" id="message"/>
                    </div>
                    <button type="btn" className="shadow btn btn-success fs-5 mt-3">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact
