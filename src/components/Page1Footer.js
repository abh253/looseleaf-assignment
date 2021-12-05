import React from 'react'
import {FaFacebook,FaWhatsapp,FaInstagram,FaLinkedin} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const Page1Footer = () => {
    return (
        <section className='container' style={{backgroundColor:'#0d0d0d',color:'white'}} >
            <article className='row justify-content-between text-center px-4'>
                <div className='col-md-4'>
                    <h1>Contact Number</h1>
                    <p>+91-XXXXXXXXXX</p>
                </div>
                <div className='col-md-4'>
                    <p>Illustrations by StorySet</p>
                    <p>2021 Looseleaf,LLP, All rights Reserved</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='fs-3 mx-2'><FaWhatsapp/></div>
                    <div className='fs-3 mx-2'><FaInstagram/></div>
                    <div className='fs-3 mx-2'><BsTwitter/></div>
                    <div className='fs-3 mx-2'><FaFacebook/></div>
                    <div className='fs-3 mx-2'><FaLinkedin/></div>
                </div>
                <div className='my-3'>Made in India with Love</div>
                <div className='row m-auto pt-2 justify-content-between border-top border-3 border-light'>
                    <p className='col col-md-2'>Privacy</p>
                    <p className='col col-md-2'>Terms</p>
                    <p className='col col-md-2'>Contact Us</p>
                </div>
            </article>


        </section>
    )
}

export default Page1Footer
