import React, {useState, useEffect} from 'react';
import './Apply.css'
import axios from 'axios'




const baseUrl='http://127.0.0.1:8000/applicant/'
const Apply = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [message, setMessage] = useState({error: false, msg: ""})
  const [studentsData, setStudentsData]=useState({

    'firstname':'',
    'lastname':'',
    'email':'',
    'address':'',
    'phone':'',
    'center':'',
    'course':'',
    'mode':'',
    'status':''

  })
  const [focus, setFocus] = useState(false)
	



const submitForm =()=>{
  // const studentFormData=new FormData()
  // studentFormData.append('firstname',studentsData.firstname)
  // studentFormData.append('lastname',studentsData.lastname)
  // studentFormData.append('email',studentsData.email)
  // studentFormData.append('address',studentsData.address)
  // studentFormData.append('phone',studentsData.phone)
  // studentFormData.append('center',studentsData.center)
  // studentFormData.append('course',studentsData.course)
  // studentFormData.append('mode',studentsData.mode)



  try{
  axios.post(baseUrl, studentsData).then((response) =>{
    setStudentsData({
'firstname':'',
'lastname':'',
'email':'',
'address':'',
'phone':'',
'center':'',
'course':'',
'mode':'',
'status':true
    })
    console.log(response)
    if(studentsData === ""){
      setMessage({error:false, msg: "All fields are mandatory!"});
      return;
    }
   
  })
  }catch(error){
    console.log(error)
    setStudentsData({'status':false})
  }

  alert('Application submitted successfully')
 
  // navigate("/", {replace: true});
}

const handleFocus =(e)=>{
  setFocus(true);
};



  return ( <div>
    

    <div className="application-container py-5">
  <form onSubmit={submitForm} className="application-form">
    <input type="text"  onChange={(e)=>{setStudentsData({...studentsData, firstname:e.target.value})}}  value={studentsData.firstname} placeholder="FirstName" pattern='/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/){3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>Input a valid firstname</span>

    <input type="text"   onChange={(e)=>{setStudentsData({ ...studentsData,lastname:e.target.value})}}  value={studentsData.lastname} placeholder="LastName" pattern='/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/){3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
        <span>Input a valid lastname</span>

    <input type="email"   onChange={(e)=>{setStudentsData({...studentsData,email:e.target.value})}}  value={studentsData.email} placeholder="Email" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid email account</span>

    <input type="address"   onChange={(e)=>{setStudentsData({...studentsData,address:e.target.value})}}value={studentsData.address} placeholder="address" onBlur={handleFocus} focus={focus.toString()}/>
    <span> this field is required</span>

    <input type="tel"   onChange={(e)=>{setStudentsData({...studentsData,phone:e.target.value})}}value={studentsData.phone} placeholder="Phone-number" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid phone number</span>

    {/* <input type="text" name="amount"  placeholder="amount" value={usersData.amount} onChange={e=> setUsersData({...usersData, amount:e.target.value})} onBlur={handleFocus} required focus={focus.toString()}  />
    <span>this field is required</span> */}
    {/* <label>Date of application</label>
<input type="date" name="date"   value={usersData.date} onChange={e=> setUsersData({...usersData, date:e.target.value})} onBlur={handleFocus} required focus={focus.toString()}   />
    <span>this field is required</span> */}


    {/* choose a course */}

    <label name="Course">Center:
    <select name="Course" id="Course-select" value={studentsData.center}  onChange={(e)=>{setStudentsData({...studentsData,center:e.target.value})}}>
    <option value="No location selected" selected>Select a desired center</option>
    <option value="Ogba">Ogba</option>
    {/* <option value="Olowora,Ojodu-Berger">Ojodu-Berger</option> */}
    {/* <option value="Ajah" >Ajah</option> */}
    </select> </label>

    <label name="Course">Course:
    <select name="Course" id="Course-select" value={studentsData.course}  onChange={(e)=>{setStudentsData({...studentsData,course:e.target.value})}}>
    <option value="No course selected" selected>Select a course</option>
    <option value="Frontend Development">Frontend Development</option>
    <option value="Backend Development">Backend Development</option>
    <option value="Fullstack Developement" >Fullstack Developement</option>
    {/* <option value="UI/UX Course">UI/UX Course</option> */}
    {/* <option value="App Development(Android and iOS)">App Development(Android and iOS)</option> */}
    {/* <option value="Data Science & AI">Data Science & AI</option> */}
    </select> </label>
    <br/>


    <label name="mode of study">Mode of study:
    <select name="mode of study" id="mod-select" value={studentsData.mode}  onChange={(e)=>{setStudentsData({...studentsData,mode:e.target.value})}}>
    <option value="No mode selected" selected>Select a study mode</option>
    <option value="Weekday">Weekday</option>
    <option value="Weekend">Weekend</option>
    <option value="Online">Online</option>
    </select> </label>
    
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>

  </div>
  )
}

export default Apply;







// first_name:'',
// last_name:'',
// email:'',
// address:'',
// phone:'',
// center:'',
// course:'',
// mode:'',