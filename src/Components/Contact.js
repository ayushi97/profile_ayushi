import React, { Component } from 'react';
import { BsChevronCompactUp } from "react-icons/bs";
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';



class Contact extends Component {

   constructor(){
      super()
      this.sendEmail = this.sendEmail.bind(this);
      this.createNotification = this.createNotification.bind(this);
    }

    createNotification = (type) => {
      console.log(type);
      return () => {
        switch (type) {
          case 'success':
            NotificationManager.success('Success message', 'Title here', 1000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
        }
      };
   };

   sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_kxmdzdt', 'template_7c8lijf', e.target, 'wahmQdXi5Ala0MxTT')
      .then((result) => {
      console.log(result.text);
      NotificationManager.success('Success message', 'Thank you!', 1000);
      }, (error) => {
      console.log(error.text);
      this.createNotification('error');
      NotificationManager.error('Error message', 'Please try again' , 1000);
      });
   }



  render() {



    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }



      
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit = {this.sendEmail} >
					<fieldset>

                  <div>
						   <label htmlFor="contactName"><b>Name </b><span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="from_name" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail"><b>Email </b><span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="email" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject"><b>Subject</b></label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage"><b>Message </b><span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message" required></textarea>
                  </div>

                  <div>
                     <button className="submit" type = "submit">Submit</button> <NotificationContainer/>
                  </div>
					</fieldset>
              
				   </form>
              
               

             {/*} <div>
                  <button
                     onClick={this.createNotification('success')}>Success
                  </button>
                  <hr/>
                  <button
                     onClick={this.createNotification('error')}>Error
                  </button>
                  <NotificationContainer/>
    </div>*/}
    

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

            </aside>
      </div>

      
      <div className="button_contact">
      <a className="smoothscroll"  href="#home"><BsChevronCompactUp /></a>
      </div>
   </section>
    );
  }
}

export default Contact;
