import React from 'react';
import './ContactForm.css';

const ContactForm = (props) => {

    return(
        <form className="form-horizontal">
            <fieldset>
                <legend className="text-center">...or send me a message</legend>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Name</label>
                  <div className="col-md-9">
                    <input id="name" name="name" type="text" placeholder="Your name" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="email">Your E-mail</label>
                  <div className="col-md-9">
                    <input id="email" name="email" type="text" placeholder="Your email" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="message">Your message</label>
                  <div className="col-md-9">
                    <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 text-left">
                    <button id="submitButton" type="submit" className="btn btn-info btn-lg">Submit</button>
                  </div>
                </div>
            </fieldset>
        </form>
    );
};

export default ContactForm;