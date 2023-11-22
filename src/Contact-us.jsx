import React from "react"
function ContactPage(){
return (
    <div>
         <center>
              <h1>Contact us</h1>
        </center>
  
    <div className="main-container">

       <div className="data">
        <div className="first-container">
           <h3>Reach us </h3>
           <p className="text"> Fill up the forn and we will get back to you within 24 hours</p>

           <div className="phone">
           <i class="bi bi-telephone-fill" style={{color:"#AA336A"}}></i>  <span className="icons"> +91 xxxxxxxxxx</span>
           </div>
            <div className="email">       
            <i class="bi bi-envelope-fill" style={{color:"#AA336A"}}></i>   <span className="icons">info@happpydonars.net</span>
           </div>
           <div  className="pic">
              <img width={150} src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" class="img-thumbnail" alt="..."/>
           </div>
        </div>
        <div className="second-container">
            <div className="data-field">
                <div className="first-field">
                    
                    <div className="fields">
                         <p className="text-font">Your Name</p>
                        <input type="text"  className="first-text-box"/>
                    </div>
                    
                      <div className="fields">
                      <p  className="text-font">Contact Number (optional)</p>
                      <input type="text"  className="second-text-box"/>
                      </div>

                </div>

                <div className="second-field">
                   
                   <div className="fields">
                   <p  className="text-font">Email Adress</p>
                    <input type="text"  className="first-text-box"/>
                   </div>

                    <div className="fields">
                    <p  className="text-font">Your organization name (optional)</p>
                    <input type="text"  className="second-text-box"/>
                    </div>
                </div>

            </div>

            <div className="message">         
                 <p  className="text-font">Message</p>
                 <input type="text" placeholder="What do you want to talk to us about?"  className="message"/>
            </div>

            <div className="button">              
                 <button type="button" class="btn btn-danger">Send Message</button>
            </div>
        </div>
        </div>
    </div>
    </div>
)
}
export default ContactPage;