import img1 from'../../assets/assets/images/banner/1.jpg'
import img2 from'../../assets/assets/images/banner/2.jpg'
import img3 from'../../assets/assets/images/banner/3.jpg'
import img4 from'../../assets/assets/images/banner/4.jpg'
import img5 from'../../assets/assets/images/banner/5.jpg'

const Banner = () => {
    return (
        <div>
<div className="carousel w-full  h-[600px] ">
  <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full  rounded-xl" />
<div>    
</div>
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

        
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>



    </div>
    <div className="absolute flex  h-full  items-center pl-12 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]    ">

    
    <div className='text-white space-y-7 w-1/2'>

    <h1 className='text-6xl' >Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
 <div >

  <button className="btn btn-primary mr-4">Discover More</button> 
  <button className="btn btn-outline btn-accent">Latest Project</button>
 </div>

    </div>


    </div>




  </div> 
  <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full  rounded-xl" />
<div>    
</div>
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

        
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>



    </div>
    <div className="absolute flex  h-full  items-center pl-12 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]    ">

    
    <div className='text-white space-y-7 w-1/2'>

    <h1 className='text-6xl' >Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
 <div >

  <button className="btn btn-primary mr-4">Discover More</button> 
  <button className="btn btn-outline btn-accent">Latest Project</button>
 </div>

    </div>


    </div>




  </div> 
  <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full  rounded-xl" />
<div>    
</div>
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

        
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>



    </div>
    <div className="absolute flex  h-full  items-center pl-12 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]    ">

    
    <div className='text-white space-y-7 w-1/2'>

    <h1 className='text-6xl' >Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
 <div >

  <button className="btn btn-primary mr-4">Discover More</button> 
  <button className="btn btn-outline btn-accent">Latest Project</button>
 </div>

    </div>


    </div>




  </div> 
 

  <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full  rounded-xl" />
<div>    
</div>
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

        
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>



    </div>
    <div className="absolute flex  h-full  items-center pl-12 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]    ">

    
    <div className='text-white space-y-7 w-1/2'>

    <h1 className='text-6xl' >Affordable Price For Car Servicing</h1>
    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
 <div >

  <button className="btn btn-primary mr-4">Discover More</button> 
  <button className="btn btn-outline btn-accent">Latest Project</button>
 </div>

    </div>


    </div>




  </div> 

</div>
            
        </div>
    );
};

export default Banner;