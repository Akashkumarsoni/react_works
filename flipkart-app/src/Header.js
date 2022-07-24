import React from 'react'
import './App.css';
import './Header.css';



export class Header extends React.Component {
    render(){
        return (
            <nav style={{alignItems:"center"}} className="navbar navbar-expand-lg navbar-light bg-primary navparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img style={{width: "100px"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"/></a>
         
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                <div className="d-flex">
                <input className="form-control me-2 position-relative" type="search" placeholder="Search" aria-label="Search"/>
                {/* <i  className="bi bi-search text-primary position-absolute searchIcon"></i> */}
            
          </div>
                </li>
                <li className="nav-item">
                <button className="btn btn-outline-primary  text-primary bg-light" type="submit">Login</button>
                </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Become&nbsp;a&nbsp;seller</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light text-primary">
                    <i className="bi bi-cart text-primary"></i> Cart
                  </button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

          );
    }
  
}
