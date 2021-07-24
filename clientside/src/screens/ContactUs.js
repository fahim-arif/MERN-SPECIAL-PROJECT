import React from "react";

const Contact = () => {
  return (
    <>
      <main>
        <section className='top-section'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-12  d-md-flex flex-md-column justify-content-md-center mt-md-0 mt-5'>
                  <div className='contact-details '>
                    <div className='contact-title text-light '>
                      <h1>
                        Get in Touch Us And We'll Help You to find the best
                        tutor.
                      </h1>
                    </div>
                    <div className='contact-address text-light mt-4'>
                      <p>
                        {" "}
                        <i class='fas fa-map-marker-alt'></i> Box Ali Munsi
                        Masjid , Bandartila , Chittagong
                      </p>
                      <p>
                        <i class='fas fa-envelope-open-text'></i>{" "}
                        musfiquehasan08@gmail.com
                      </p>
                      <p>
                        <i class='fas fa-phone'></i>01647581789
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <div className='form '>
                    <form className='bg-light contact_form'>
                      <h1>Communicate Us </h1>
                      <label htmlFor=''>Name*</label>
                      <input type='text' re />
                      <label htmlFor=''>Email*</label>
                      <input type='email' re />
                      <label htmlFor=''>Phone*</label>
                      <input type='text' re />
                      <label htmlFor=''>Message</label>
                      <textarea
                        className='textarea'
                        name=''
                        id=''
                        cols='30'
                        rows='10'
                      >
                        message..
                      </textarea>
                      <input
                        className='button'
                        type='button'
                        value='SEND MESSAGE'
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
