import React from 'react'
import homeImg from "../images/home.png"
export default function Home() {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center
                flex-column align-item-start'>
                    <h1 className='display-2'>Tired of missing out <br /> important event?</h1>
                    <p className='main-hero-para'>
                    No more stress now , we are <br /> here for you.
                    </p>
                    <p className="btn-home-para" align="center">
                        <button className="btn btn-style-home" type='submit'>Get Started</button>
                    </p>
                </div>

                <div className='col-12 col-lg-6 header-right-side
                d-flex justify-content-center flex-column align-item-start'>
                    <img src={homeImg} alt="homeimage" />
                </div>
            </div>
        </section>
    </header>
    </>
  )
}
