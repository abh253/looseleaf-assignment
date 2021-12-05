import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const inputAreas = [
        'First Name', 'Last Name', 'Institute Name', 'Email Address', 'Phone Number']
    return (
        <section className='m-3 mx-4 pt-5 mt-0' style={{color:'white'}}>
            <h1 className='fs-2 text-center'>Contact us to get Started.</h1>
            <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                <div className="row flex-column align-content-center mt-5">
                    {
                        inputAreas.map((single, index) => {
                            return <input key={index} type="text" name={single} placeholder={single} className='my-2 border border-2 fw-bold p-2 border-white bg-dark col-md-6 rounded' />
                        })
                    }
                    <Link to='/contact'>
                    <button className="btn btn-primary col-4 col-md-3 m-auto mt-3" type='button'>Contact us</button>
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Form
