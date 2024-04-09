
import { useState,useEffect } from "react";
import Scard from "./Scard";



const Service = () => {

const[services,setservice]= useState([]);



useEffect(()=>{

fetch('server.json')
.then(res=>res.json())
.then(data=>setservice(data));



})



    return (
        <div className='text-center p-8 ' >  

            <div className="p-10 space-y-4">

            <h1 className='text-3xl text-orange-500'>Our service</h1>
            <h1 className='text-3xl' >Browse Our Products</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>   
            </div>
        
        
      
          
         

      
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 sm:items-center gap-10 mt-8 ">

    {
              

              services.map(service =><Scard service={service} key={service._id}> console.log{service} </Scard> ) 
              
              
              
                          }

    </div>
           
             
             
             
             
             </div>
        
       
    );
};

export default Service;