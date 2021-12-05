import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const inputAreas = [
        'First Name', 'Last Name', 'Institute Name', 'Email Address', 'Phone Number']
    return (
        <section className='m-3 mx-4 pt-5 mt-0' style={{color:'white'}}>
            <h1 className='fs-2 text-center'>Contact us to get Started.</h1>
            <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                <div className="row flex-column align-items-center mt-5">
                    {
                        inputAreas.map((single, index) => {
                            return <input key={index} type="text" name={single} placeholder={single} className='my-2 border border-2 p-2 border-white bg-dark col-10 col-md-6 rounded text-white' />
                        })
                    }
                    <Link to='/looseleaf-assignment/contact' className="btn btn-primary col-4 col-md-3 mt-3 align-self-center fw-bold" >Contact us</Link>
                </div>
            </form>
        </section>
    )
}

export default Form
