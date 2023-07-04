import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Navbar() {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./Register.js`; 
    navigate(path);
  }
  return (
    <div>
        <section className='navbar-bg'>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <Link className="navbar-brand" to="/">UpEvent</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <div className="navbar-li-a">
                    <Link className="nav-a active" aria-current="page" to="/">Home</Link>
                    </div>
                </li>
                <li className="nav-item">
                <div className="navbar-li-a">
                    <Link className="nav-a" to="/events">Events</Link>
                </div>
                </li>
            </ul>
            <form className='d-flex'>
            <Link className="btn btn-style" to="/addevents">Add Events</Link>
            <Link className="btn btn-style" to="register">Sign In</Link>
            </form>
            </div>
        </div>
        </nav> 
        </section>
    </div>
  )
}
