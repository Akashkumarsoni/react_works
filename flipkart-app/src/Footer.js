import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
     <div className='d-flex flex-row justify-content-between'> 
    <div>
            <div  className='border shadow-lg p-3  bg-body d-flex flex-row  justify-content-between' style={{height:"50px",width:"100%",padding:"auto"}} >
                <div ><span style={{fontWeight:"bold",fontSize:"2.2vw"}}>Deals of the day </span><span><img alt='' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' style={{width:"2vw"}}/></span><span className='blockquote ' style={{fontSize:"1.8vw"}} >11:11:33 Left</span></div>
                <div >
                    <button style={{marginTop:"-14px",height:"30px",width:"10vw",fontSize:"1.5vw"}}  type="button" class="btn btn-primary pb-2">View All</button>
                </div>
            </div>
            <div style={{flexWrap:"wrap"}} className='d-flex flex-row '><Products /></div>
    </div>
         <div ><img type="button" width={200} alt='' src='https://rukminim1.flixcart.com/flap/464/708/image/a60eb148185597ad.jpg?q=70' /></div>
       </div>
  )
}



export const Products = () => {
  return (
    

<div className="row mb-3 ">
      <div className="col-12">
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <div className="img-wrapper">
                    <img type="button" src="https://rukminim1.flixcart.com/image/150/150/krntoy80/cookware-set/g/n/x/kan028-kreme-original-imag5e7extvftecn.jpeg?q=70" style={{width:"100%"}}  alt="..."/>
                    </div>
                    <div className="card-body">
                    <p type="button"  style={{fontSize:".8rem",fontWeight:"bold",marginBottom:"-4px"}} >Kitchen Dinning Set</p>
                      <p id="cardstyle"  className=" text-success">Up to 70% Off</p>
                      <p type="button" id="cardstyle">Best Discount &nbsp;</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <div className="img-wrapper">
                    <img type="button" src="https://rukminim1.flixcart.com/image/150/150/krntoy80/cookware-set/g/n/x/kan028-kreme-original-imag5e7extvftecn.jpeg?q=70" style={{width:"100%"}}  alt="..."/>
                    </div>
                    <div className="card-body">
                    <p type="button"  style={{fontSize:".8rem",fontWeight:"bold",marginBottom:"-4px"}} >Kitchen Dinning Set</p>
                      <p id="cardstyle"className="text-success ">Up to 70% Off</p>
                      <p type="button" id="cardstyle">Best Discount</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <div className="img-wrapper">
                    <img type="button" src="https://rukminim1.flixcart.com/image/150/150/krntoy80/cookware-set/g/n/x/kan028-kreme-original-imag5e7extvftecn.jpeg?q=70" style={{width:"100%"}} alt="..."/>
                    </div>
                    <div className="card-body">
                    <p type="button"  style={{fontSize:".8rem",fontWeight:"bold",marginBottom:"-4px"}} >Kitchen Dinning Set</p>
                      <p id="cardstyle"className="text-success ">Up to 70% Off</p>
                      <p type="button" id="cardstyle">Best Discount</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <div className="img-wrapper">
                    <img type="button" src="https://rukminim1.flixcart.com/image/150/150/krntoy80/cookware-set/g/n/x/kan028-kreme-original-imag5e7extvftecn.jpeg?q=70" style={{width:"100%"}} alt="..."/>
                    </div>
                    <div className="card-body">
                    <p type="button"  style={{fontSize:".8rem",fontWeight:"bold",marginBottom:"-4px"}} >Kitchen Dinning Set</p>
                      <p id="cardstyle"className="text-success">Up to 70% Off</p>
                      <p type="button" id="cardstyle">Best Discount</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <div className="img-wrapper">
                    <img type="button" src="https://rukminim1.flixcart.com/image/150/150/krntoy80/cookware-set/g/n/x/kan028-kreme-original-imag5e7extvftecn.jpeg?q=70" style={{width:"100%"}}  alt="..."/>
                    </div>
                    <div className="card-body">
                    <p type="button"  style={{fontSize:".8rem",fontWeight:"bold",marginBottom:"-4px"}} >Kitchen Dinning Set</p>
                    <p id="cardstyle"className="text-success">Up to 70% Off</p>
                    <p type="button" id="cardstyle">Best Discount</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-light" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next text-light" type="button" data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next">
            <span className="carousel-control-next-icon text-light" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

  )
}


export default Footer