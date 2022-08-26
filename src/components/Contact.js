import React, { useState, useEffect } from 'react'
import './Contact.css'


import axios from 'axios'


const baseUrls='http://127.0.0.1:8000/contact/'
function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  
  const [contact, setContact] = useState({
    "name":"",
    "email":"",
    "subject":"", 
    "phone":"",
    "message":"",
    "status":""
  })
  const [message, setMessage] = useState({error: false, msg: ""})
	



  const submitForm =()=>{
   
    try{
    axios.post(baseUrls, contact).then((response) =>{
      setContact({

    "name":"",
    "email":"",
    "subject":"", 
    "phone":"",
    "message":"",
    "status":"success"
  
      })
      console.log(response)
      if(contact === ""){
        setMessage({error:false, msg: "All fields are mandatory!"});
        return;
      }
     
    })
    }catch(error){
      console.log(error)
      setContact({'status':'error'})
    }
    alert('Message sent successfully')
  
  }

  
 
 
 
 

  return (
    <div className='small'>
    
     <div className='change'>
     <div className= 'container-fluid'>
       <div className='row pt-5 mx-auto switch'>
         <div className='col-sm-12 col-md-6 col-lg-6'>
          
            <h3>Drop Us A Line</h3>
            <form onSubmit={submitForm}>
            <div className='row mt-5 mx-auto'>
              <div className='col-sm-12 col-md-6 col-lg-6 mb-3 closest '>
               
                <input type="text" className="form-control" placeholder="Your Name..." name="name" value={contact.name} onChange={(e)=>setContact({...contact, name:e.target.value})} style={{height:'35px'}}/>
              </div>
          
              <div className='col-sm-12 col-md-6 col-lg-6 closer'>
                <input type="email" className="form-control" placeholder="Your Email Address..." name="email"  value={contact.email} onChange={(e)=>setContact({ ...contact, email:e.target.value})} style={{height:'35px'}}/>
              </div>
            </div>
            <div className='row mt-5 mx-auto '>
              <div className='col-sm-12 col-md-6 col-lg-6 mb-3 close '>
              <input type="text" className="form-control" placeholder="Subject matter..." name="subject" value={contact.subject} onChange={(e)=>setContact({ ...contact, subject:e.target.value})} style={{height:'35px', background:'#ffffff'}}/>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
              <input type="text" className="form-control" placeholder="Your Phone Number..." name=""  value={contact.phone} onChange={(e)=>setContact({ ...contact, phone:e.target.value})} style={{height:'35px'}}/>
              </div>
            </div>
            {/* <div className='col-sm-12 col-md-6 col-lg-6'> */}
             <textarea className="form-control" id="" cols="70" rows="8" placeholder="Your message" name="message" value={contact.message} onChange={(e)=>setContact({ ...contact, message:e.target.value})}></textarea>
            {/* </div> */}
            <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-6 mx-auto mt-5'>
                <button type='submit' className='btn btn-outline-primary send'>Send Message</button>

              </div>
            </div>
            </form>
         </div>
           
         <div className='col-sm-12 col-md-6
           
          col-lg-6 second'>
            <div className='first'>
            <h2>Get In Touch With Us</h2>
            <p className='para'><i class="fa-solid fa-location-dot"></i> 3, Bar. C.O.N Akabogu street, University View Estate, Ajah </p>
               {/* <p className='para'><i class="fa-solid fa-location-dot"></i>114, Iju road, Agege </p> */}
               <p className='para'><i class="fa-solid fa-location-dot"></i>27, Thomas Salako street, Ogba. </p>
               <p className='para'><i class="fa-solid fa-location-dot"></i>86 old Olowora road, by Solomon avenue, Olowora, Berger  </p>

            <a href="tel:+234 702 571 3326" target="_blank"><i className='fas fa-phone'></i>+234 702 571 3326 
               </a>
               <br/>
            <a href="tel:+234 807 402 4260" target="_blank" className='anchor'>+234 807 402 4260
               </a>
               <br/>

            <a href="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net </a>
             <div className='row pt-5 mx-auto switch'>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                 <p className='faq'>Need Help?<span className='pipe'>|</span><a href='FAQPage' className='goto'> Go to FAQ</a></p>
                 
                </div>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                
                 {/* <img src={STR} alt='' className='stroke'/> */}
                </div>
            </div>

           
            </div>

            
              
          </div>

       </div>

     </div>
     </div>
    </div>
  )
}

export default Contact