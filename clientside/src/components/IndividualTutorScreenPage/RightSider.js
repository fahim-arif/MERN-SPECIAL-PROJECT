import React from 'react'

function RightSider({tutor}) {
    return (
        <>

<h5 className="text-title">Contact with This tutor</h5>
                <form action="" method="post" className="tutorScreen__contactForm">
                                     
                     <div className="form-group">
                        <label className="tutorScreen___label" for="Name">Name:</label>
                        <input type="text"  className="form-control" name="request_name" placeholder="Enter your full name"/>
                        <input type="hidden" name="tutor_id" value="31"/>
                    </div>
                    <div className="form-group">
                        <label className="tutorScreen___label" for="E-Mail">E-Mail:</label>
                        <input type="email" name="request_email" className="form-control" id="E-Mail" placeholder="E-Mail"/>
                    </div>
                    <div className="form-group">
                        <label className="tutorScreen___label"  for="PhoneNo">Phone Number:</label>
                        <input type="number" name="request_phoneNumber" className="form-control" id="PhoneNo" placeholder="Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label className="tutorScreen___label"  for="DetailsInformation">Message:</label>
                        <textarea rows="3" name="request_info" className="form-control" id="DetailsInformation"></textarea>
                    </div>
                    <button style={{backgroundColor: '#f44336',borderColor: '#f44336'}} type="submit" className="btn btn-primary pull-right">Submit</button>
                </form>

           
            
        </>
    )
}

export default RightSider
