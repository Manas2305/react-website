import React, { useState } from 'react';

const Contact = () => {
    const[data,setData] = useState({
        fname:"",
        mobile:"",
        email:"",
        message:""
    })

    const InputEvent=(event)=>{
        const{name,value} = event.target;

        setData((perval)=>{
            return{
                ...perval,
                [name]:value,
            };
        });
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`                 Your name is ${data.fname}. 
                Contact Number is ${data.mobile}. 
                Your Email is ${data.email} .
                Your Message is ${data.message}.`);
    }

    

    return (
        <>
            <div>
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Mobile</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="Mobile Number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;