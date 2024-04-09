

const Scard = ( { service} ) => {

    const {title,img,price} = service
console.log('service check',title,img,price)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body  text-center items-center  ">
          <h2 className="card-title">
            {title}
        
          </h2>
          <p className="text-xl text-orange-500 font-bold " >Price:${price}</p>
          <div className="card-actions">
          <button className="btn btn-outline btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Scard;