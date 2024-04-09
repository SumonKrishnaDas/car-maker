
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
        <div className='text-center' >   
            <h1 className='text-3xl text-orange-500'>our service</h1>
            <h1 className='text-3xl' >Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        
        
        <div>
            <p> {services.length}</p>
         

      
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 sm:items-center gap-24 ">

    {
              

              services.map(service =><Scard service={service} key={service._id}> console.log{service} </Scard> ) 
              
              
              
                          }

    </div>
           
             
             
             
             
             </div>
        
        </div>
    );
};

export default Service;