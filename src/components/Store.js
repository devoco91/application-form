
import React, { Component } from 'react'
import './Store.css'
import IMG from '../Images/ElizabethVine.png'

class Store extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       product:[],
       DataisLoaded:false
    }
  }

  componentDidMount(){
    fetch(
      'http://localhost:8000/product/')
      .then((res)=>res.json())
      .then((json)=>{
        this.setState({
          product:json,
          DataisLoaded:true
          
        })
      
      })
    
  }
  render() {
    const{DataisLoaded, product}=this.state
    if (!DataisLoaded) return <div>
      <h1>Please wait for some time....</h1>
    </div>

    return (
      <div>
           

          
        <div className="container my-5">
  
            <div className="row">
            { product.map((products) =>(
           
             <div className="col-md-4 mb-5" key={products.id}>

          
                
            
                  <div className="card text-center">
                    <img src={products.image} alt="" className='card-img-center' />
                    <div className="card-body">
                      <div className="card-title">
                        <h1>{products.name}</h1>
                      </div>
                      <div className="card-text">
                        <p>{products.description}</p>
                        <p>&#8358;{products.price}</p>
                      </div>
                    </div>
                  </div>

                
                         
                 
                </div>
              
              

              ))
            }
             </div>
            
  
             
             </div>



        </div>

     
    )
  }
}

export default Store
// import React, {useState,useEffect} from 'react'
// import IMG from '../Images/ElizabethVine.png'
// import IMG1 from '../Images/purepng1.png'
// import IMG2 from '../Images/gallery-7.jpg'
// import './Store.css'
// import axios from 'axios'



// //  const url='http://127.0.0.1:8000/product/'
// function Store() {

//   // const[product,setProduct]=useState([])

//   // useEffect(() =>{
//   //   axios
//   //   .get(url)
//   //   .then(res =>{
//   //     console.log(res)
//   //     setProduct(res.data)
//   //   })

//   //   .catch(err =>{
//   //     console.log(err)
//   //   })
//   // }, [])


//   return (
//     <div>
     
//         <div className="container my-5">
//             <div className="row">
//                 <div className="col-md-4">
//                   <div className="card text-center">
//                     <img src={IMG} alt="" className='card-img-center' />
//                     <div className="card-body">
//                       <div className="card-title">
//                         <h1>Lorem ipsum dolor sit amet.</h1>
//                       </div>
//                       <div className="card-text">
//                         <p>&#8358;100000</p>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//                 <div className="col-md-4">
//                   <div className="card text-center">
//                     <img src={IMG1} alt="" className='card-img-center' />
//                     <div className="card-body">
//                       <div className="card-title">
//                         <h1>Lorem ipsum dolor sit amet.</h1>
//                       </div>
//                       <div className="card-text">
//                         <p>&#8358;700000</p>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//                 <div className="col-md-4">
//                   <div className="card text-center">
//                     <img src={IMG2} alt="" className='card-img-center' />
//                     <div className="card-body">
//                       <div className="card-title">
//                         <h1>Lorem ipsum dolor sit amet.</h1>
//                       </div>
//                       <div className="card-text">
//                         <p>&#8358;168000</p>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Store